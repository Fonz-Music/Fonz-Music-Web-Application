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
            } = await this.getCoupon(referralCode);
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


exports.getCoupon = (referralCode) => {
    return new Promise(async (resolve, reject) => {
        try {
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