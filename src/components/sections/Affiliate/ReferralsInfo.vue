<template>
    <fragment>
        <div class="container">
            <div class="col">
                <div class ="referrals-style">
                    <div class="row title-style">
                        <p> Referrals </p>
                    </div>
                    <div class="row subtext-style">
                        <span> Want to make 5% on every transaction? Become an affiliate! </span>
                    </div>
                    <div class="row subtext-style">
                        <b> Your Affiliate URL </b>
                    </div>
                    <div class="row url-box">
                        <div class="url-text">
                            <span> https://www.fonzmusic.com?aff=124234 </span>
                        </div>
                    </div>
                    <div class="row subtext-style">
                        <span> Affiliates earn 5% of referrals' purchases. All you have to do is give the user your Affiliate URL on sign-up, and the rest is handled by us! </span> 
                    </div>
                </div>
            </div>
        </div>
    </fragment>
</template>

<script>
export default {
    name: 'CReferralsInfo',
}

</script>

<style scoped>
    .url-box {
        border: 1px solid rgb(206, 206, 206) ;
        border-radius: 15px;
        margin-bottom: 30px;
        margin-top: -10px;
        height: 40px;
    }

    .url-text {
        margin: auto;
        font-size: 13px;
    }

    .referrals-style {
        padding-left: 20px;
        padding-right: 20px;
    }

    .referrals-style .title-style {
        color: #A77FA9;
        font-weight: 900;
    }

    .referrals-style .subtext-style {
        font-size: 14px;
        margin-top: -10px;
        margin-bottom: 30px;
    }
</style>