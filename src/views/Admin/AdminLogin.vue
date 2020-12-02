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
                @click="testClick()"
                >Login</c-button
              >
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



export default {
    name: "AdminLogin",
    components: {
        CButton
    },


    // data() {
        
    // },


    methods: {
        testClick() {
            firebase.auth().signInWithPopup(provider).then(function(result) {

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;

            }).catch(function(error) {
                console.log("error!");
            })
        }
    },


  created() {
    this.$emit("update:layout", CLayout);
  }
};

</script>