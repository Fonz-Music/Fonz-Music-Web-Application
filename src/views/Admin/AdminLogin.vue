<template> 
    <fragment>
        <section class="section">
            <h1> hello </h1>
            <div class="container">

            <c-button
                class="buy-now-button"
                tag="a"
                color="primary"
                wide
                @click="userLogin()"
                >
                Login
            </c-button>
            </div>
        </section>
    </fragment>
</template>




<script>
// import layout
import CLayout from "@/layouts/LayoutAdmin.vue";

// import components
import CButton from "@/components/elements/Button.vue";

// firebase auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export default {
    name: "AdminLogin",
    components: {
        CButton
    },

    methods: {
        userLogin() {
            firebase.auth().signInWithPopup(provider).then(() => {
                var token = result.credential.accessToken;
                var user = result.user;
            })
        }
    },



  created() {
    this.$emit("update:layout", CLayout);
  }
};

</script>