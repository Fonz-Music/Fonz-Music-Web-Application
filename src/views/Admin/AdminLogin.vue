<template> 
    <fragment>
        <section class="section">
        <div class="container">
            <div class="row">
                <div class="col d-flex justify-content-center">
                <c-input type="text" name="username" v-model="input.username" placeholder="Username"/>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                <c-input type="password" name="password" v-model="input.password" placeholder="Password"/>
                </div>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                <c-button type="button" @click="userLogin()">Login</c-button>
                </div>
            </div>
        </div>
        </section>
    </fragment>
</template>




<script>
// import layout
import CLayout from "@/layouts/LayoutDefault.vue";

// import components
import CButton from "@/components/elements/Button.vue";
import CInput from "@/components/elements/Input.vue";
import COrdersTable from '@/components/sections/Admin/OrdersTable.vue';


// firebase auth
const provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth().onAuthStateChanged(user => {
//     if(user) {
//         console.log('is auth');
//         console.log(user.uid);
//         // user.getIdTokenResult().then(idTokenResult => {
//         //     console.log(idTokenResult.claims);
//         // })
//     }
//     else {
//         console.log('isnt auth');
//     }
// }) 

export default {
    name: "AdminLogin",
    components: {
        CButton,
        COrdersTable,
        CInput
    },

    data() {
        return {
            input: {
                username:"",
                password:""
            }
        }
    },

    methods: {
        userLogin() {
            // const loginForm = document.querySelector('#login-form')

            if(this.input.username != "" && this.input.password != "") {
                firebase.auth().signInWithEmailAndPassword(this.input.username, this.input.password)
                .then((user) => {
                    console.log('signed in');
                    this.$router.push('/admin-orders');

                })
                .catch((error) => {
                    alert("Incorrect Details");
                })
            }
        },


        userLogout() {
            firebase.auth().signOut().then(() => {
                console.log("Just logged out");
            });
        },

        add(a, b) {
            var sum = parseInt(a) + parseInt(b);
            alert(sum);
        }
    },

    created() {
        this.$emit("update:layout", CLayout);
    }
};

</script>

<style>
.input-style {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>