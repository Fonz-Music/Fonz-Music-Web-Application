<template>
    <fragment>
        <c-login-section/>
    </fragment>
</template>

<script>
import CLoginSection from "@/components/sections/Admin/Login/LoginSection.vue";
import router from "@/router.js";

export default {
    name: 'AdminLogin',
    components: {
        CLoginSection
    },

    created() {
        // Firebase Listener
        firebase.auth().onAuthStateChanged(function(user) {
            if(user.uid === 'RDlE5IwuOLbpMB07DRTineMWlbK2'
            || user.uid === 'XUhAllOZwGSaGBWcb7Bg5Afb5lk2'
            || user.uid === 'Z2OquhNyvoOrS0mTRKZUVMTXcIp2'
            || user.uid === 'kDILEGQaPhOvocP5OWedzZNNOXJ3'
            ) {
                console.log(user.uid);
                console.log("Admin Authenticated.");
                router.push('/Admin');
            }
            else {
                console.log("Not authenticated.");
            }
        });
    }

}


</script>