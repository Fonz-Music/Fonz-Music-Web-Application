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
            } = await this.getCouponByAffiliateId(referralCode);
            //pulls affiliateCut from db


            let output = [];
            data.forEach((doc) => {
                let {
                    cart
                } = doc.data();
                let {
                    price
                } = cart;
                output.push({
                    transactionId: doc.id,
                    ...cart,
                    affiliateEarning: price * affiliateCut
                });
                resolve(output); //finish promise, send back data
            });
        } catch (error) {
            reject(error);
        }
    })

}

exports.getCouponByAffiliateId = (referralCode) => {
    return new Promise(async (resolve, reject) => {
        try {
            // .where => I do not know what the document ID is, I want to filter all documents where the affiliateCode is 'referralCode'
            const coupon = await global.CouponsDB.where('affiliateId', '==', referralCode).limit(1).get();
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

const user = {
    name: 'David',
    discount: 15,
    affiliateId: 'davidiu319didkaslk'
};
exports.createCoupon = (couponCode) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!couponCode) // if specific coupon code NOT set, generate a coupon code
                couponCode = user.name + user.discount;

            const couponCodeOwned = await this.getCoupon(couponCode); // check if coupon code is available
            if (couponCodeOwned)
                return reject('This coupon code is not currently in use, please try a different one :)');

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