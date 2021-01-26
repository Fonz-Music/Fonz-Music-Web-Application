<template>
    <fragment>
        <c-login-section/>
    </fragment>
</template>



<script>


import CLayout from "@/layouts/LayoutDefault.vue";
import CLoginSection from "@/components/sections/Affiliate/Login/LoginSection.vue";

export default {
    name:'AffiliateLogin',

    components: {
        CLoginSection
    },

    created() {
        this.$emit("update:layout", CLayout);
    },
}