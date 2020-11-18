<template>
    <fragment>
        <div class="container">
            <div class="col">
                <div class ="referrals-style">
                    <div class="row title-style">
                        <p> Referrals </p>
                    </div>
                    <div class="row subtext-style">
                        <p> Want to make 5% on every transaction? Become an affiliate! </p>
                    </div>
                    <div class="row subtext-style">
                        <p> Your affiliate URL </p>
                    </div>
                    <div class="row subtext-style">
                        <p> Affiliates earn 5% of referrals' purchases. All you have to do is give the user your Affiliate URL on sign-up, and the rest is handled by us! </p>
                    </div>
                </div>
            </div>
        </div>
    </fragment>
</template>

<script>
export default {
    name: 'ReferralsInfo'
}
</script>

<style scoped>
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
    }
</style>