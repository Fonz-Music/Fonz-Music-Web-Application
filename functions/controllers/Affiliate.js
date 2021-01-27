const user = {
    name: 'David',
    discount: 15,
    affiliateId: 'davidiu319didkaslk'
};

exports.getReferrals = (referralCode) => {
    return new Promise(async (resolve, reject) => {
        try {
            // .where('variable name', 'COMPARE', 'what youre looking for')
            const data = await global.OrdersDB.where('cart.coupon', '==', referralCode).get();
            // Destructure affiliateCut from this.getCoupon
            /* this.getCoupon = {
                active: true,
                affiliateId: "David2020",
                affiliateCut: 0.5
            }
            */

            const {
                affiliateCut
            } = await this.getCouponByAffiliateId(user.affiliateId);

            let output = [];
            data.forEach((doc) => {

                let {
                    cart,
                    created
                } = doc.data();
                let {
                    price
                } = cart;
                output.push({
                    transactionId: doc.id,
                    ...cart,
                    created,
                    affiliateEarning: price * affiliateCut
                });
                resolve(output); //finish promise, send back data
            });
        } catch (error) {
            console.log(error)
            reject(error);
        }
    })

}

exports.getCouponByAffiliateId = (affiliateId) => {
    return new Promise(async (resolve, reject) => {
        try {
            // .where => I do not know what the document ID is, I want to filter all documents where the affiliateCode is 'referralCode'
            const coupon = await global.CouponsDB.where('affiliateId', '==', affiliateId).limit(1).get();
            /*
            doc.data() = {
                active: true,
                affiliateId: "David2020",
                affiliateCut: 0.5,
                discount: 10,
            }
            */
            //let info = doc.data().info; Data destructurin
            // let { active } = doc.data() /
            // let active = doc.data().active
            coupon.forEach((doc) => { // only 1 array in this loop
                let couponData = doc.data();
                resolve(couponData);
            })


        } catch (error) {
            reject(error);
        }
    })
}

exports.getCoupon = (couponCode) => {
    return new Promise(async (resolve, reject) => {
        try {
            // I know exactly the document I want
            const coupon = await global.CouponsDB.doc(couponCode).get();
            resolve(coupon.data())

        } catch (error) {
            reject(error);
        }
    });
}

exports.createCoupon = (couponCode) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!couponCode) // if specific coupon code NOT set, generate a coupon code
                couponCode = user.name + user.discount;

            const couponCodeOwned = await this.getCoupon(couponCode); // check if coupon code is available

            if (couponCodeOwned)
                return reject('This coupon code is not currently in use, please try a different one :)');


            const {
                couponCode: couponAlreadyExists
            } = await this.getCouponByAffiliateId(user.affiliateId);
            //pulling the couponCode from the couponData

            if (couponAlreadyExists)
                return reject('You already have a coupon code. Is one not enough for you?????');

            // Otherwise coupon code is available!
            // Create new document in database for couponCode

            const response = await global.CouponsDB.doc(couponCode).set({
                affiliateCut: 0.3,
                affiliateId: user.affiliateId,
                discount: user.discount,
                name: user.name,
                discountType: "constant"
            })

            resolve({
                couponCode,
                response
            });



        } catch (error) {
            reject(error);
        }
    });
}

exports.getDailyRevenue = (referralCode) => {
    return new Promise(async (resolve, reject) => {
        try {
            const orders = await this.getReferrals(referralCode);
            // If 2 orders have same date, sum affiliate earnings
            // Get min date, first object is oldest, last object is newest
            console.log({
                oldest: orders[0],
                newest: orders[orders.length - 1]
            })

            const oldestTimestamp = orders[0].created._seconds;
            const newestTimestamp = orders[orders.length - 1].created._seconds;

            const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
            const oldestDate = new Date(oldestTimestamp * 1000)
            const newestDate = new Date(newestTimestamp * 1000);

            const daysInBetween = Math.round(Math.abs((oldestDate - newestDate) / oneDay));

            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            let currentDate = oldestDate;
            let chartLabels = []
            for (i = 0; i <= daysInBetween; i++) {
                let nextDate = new Date(currentDate.setDate(currentDate.getDate() + 1)); // increment from oldest date to newest
                let infoString = `${nextDate.getDate()} ${months[nextDate.getMonth()]}`; // make a readable date (eg 15 Nov)
                chartLabels[i] = infoString;
            }

            // resolve({
            //     chartLabels,
            //     days
            // })

            let chartData = new Array(daysInBetween + 1).fill(0); // automatically set each day to €0 earned, until added
            for (let j = 0; j <= orders.length - 1; j++) {
                // find index from oldestdate ie 0 = 15 Nov and 38 = 23 Dec
                let currentOrderTimestamp = orders[j].created._seconds
                let currentOrderDate = new Date(currentOrderTimestamp * 1000);
                const daysInBetweenOldestAndCurrent = Math.round(Math.abs((oldestDate - currentOrderDate) / oneDay)) - 1;
                console.log({
                    daysInBetween,
                    daysInBetweenOldestAndCurrent
                })
                chartData[daysInBetweenOldestAndCurrent] += orders[j].affiliateEarning;
            }


            resolve({
                chartLabels,
                chartData
            })

            console.log({
                oldestTimestamp,
                newestTimestamp,
                oldestDate,
                newestDate,
                daysInBetween
            })

            /*
            function FilterDate(order) {

            }
            const sortedSales = orders.map(FilterDate);
            resolve(sortedSales)
            */

            resolve(orders)
        } catch (error) {
            console.error(error)
            reject(error);
        }
    })
}