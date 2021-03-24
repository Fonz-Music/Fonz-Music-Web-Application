const { random } = require("lodash");

exports.getReferrals = (referralCode) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                couponCode: referralCode,
                affiliateCut
            } = await this.getCouponByAffiliateId(global.userId);
            if (!referralCode) return reject({
                message: 'No coupon code'
            })
            const data = await global.OrdersDB.where('cart.coupon', '==', referralCode).get();
            if (data.size == 0) resolve([])

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
            const coupon = await global.CouponsDB.where('affiliateId', '==', global.userId).limit(1).get();
            if (coupon.size == 0) resolve('') // check if user already has a coupon
            coupon.forEach((doc) => { // only 1 array in this loop
                let couponData = doc.data();
                resolve({
                    couponCode: doc.id,
                    ...couponData
                });
            })


        } catch (error) {
            console.error(error)
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
            console.log(error)
            reject(error);
        }
    });
}

exports.createCoupon = (couponCode) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!couponCode) // if specific coupon code NOT set, generate a coupon code
                couponCode = (global.identifier + random(new Date())).substring(0, 12);

            const couponCodeOwned = await this.getCoupon(couponCode); // check if coupon code is available

            if (couponCodeOwned)
                return reject('This coupon code is not currently in use, please try a different one :)');


            const couponExists = await this.getCouponByAffiliateId(global.userId);
            if (couponExists)
                return reject('You already have a coupon code. Is one not enough for you?????');

            // Otherwise coupon code is available!
            // Create new document in database for couponCode

            const response = await global.CouponsDB.doc(couponCode).set({
                affiliateCut: 0.3,
                affiliateId: global.userId,
                discount: global.discount,
                name: global.name,
                discountType: "constant"
            })

            resolve({
                couponCode,
                response
            });



        } catch (error) {
            console.error(error)
            reject(error);
        }
    });
}

exports.getDailyRevenue = (referralCode) => {
    return new Promise(async (resolve, reject) => {
        try {
            const {
                couponCode: referralCode
            } = await this.getCouponByAffiliateId(global.userId);
            if (!referralCode) return reject({
                message: 'No coupon code'
            })
            const orders = await this.getReferrals(referralCode);
            if (orders.length == 0) return resolve([])
            // If 2 orders have same date, sum affiliate earnings
            // Get min date, first object is oldest, last object is newest

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

            chartData.reverse(); // for some reason, this array is backwards.. cba fixing it, this function does it all :D

            resolve({
                chartLabels,
                chartData
            })
        } catch (error) {
            console.error(error)
            reject(error);
        }
    })
}


/* Creates an affiliate profile
{
  balance: 0,
  level: 0,
  payouts: [
    {
      amount: 300,
      createdAt: 16303920,
      currency: "Yen"
    }
  ],
  percentageCut: 15
}
*/
exports.createAffiliateProfile = (displayName, following, platforms, source) => {
    return new Promise(async (resolve, reject) => {
        try {
            await global.AffiliateDB.doc(global.userId).set({
                balance: 0.00,
                level: 1,
                percentageCut: 15,
                platforms,
                following,
                source,
                displayName
            })
            resolve({
                message: 'Well done! You are officially a Fonzilliate',
                level: 1,
                percentageCut: 15
            })

        } catch (error) {
            console.error(error)
            reject(error);
        }
    })
}

exports.getAffiliateProfileInfo = () => {
    return new Promise(async (resolve, reject) => {
        try {

            const profile = await global.AffiliateDB.doc(global.userId).get();
            if (!profile.data()) return reject({
                message: 'Affiliate profile not created for this user.'
            })
            const {
                couponCode
            } = await this.getCouponByAffiliateId(global.userId);
            resolve({
                ...(profile.data()),
                couponCode
            })

        } catch (error) {
            console.log(error)
            reject(error);
        }
    });
}