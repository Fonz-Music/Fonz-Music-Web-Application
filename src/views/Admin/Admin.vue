<template> 
    <fragment>

        <section v-if="!loggedIn()" class="section">
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

        <section v-if="loggedIn()" class="section">
            <div class='container'>
                <div class='row title-style'>
                    <c-section-header :data="sectionHeader"/>
                </div>
                <div class='row'>
                    <div class='col container-style'>
                        <c-orders-table/>
                    </div>
                </div>
                <div class='row'>
                    <c-button class="col" type="button" @click="userLogout()">Logout</c-button>
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
import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";

// firebase auth
const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(user => {
    if(user) {
        console.log('is auth');
        this.input.loggedIn = true;
    }
    else {
        console.log('isnt auth');
        this.input.loggedIn = false;
    }
}) 

export default {
    name: "Admin",
    components: {
        CButton,
        COrdersTable,
        CInput,
        CSectionHeader,
        COrdersTable
    },

    data() {
        return {
            input: {
                username:"",
                password:"",
                loggedIn: false
            },
            sectionHeader: {
                title: 'Welcome to your dashboard!',
                paragraph: 'Here are our orders.'
            },
        }
    },

    methods: {
        userLogin() {
            if(this.input.username != "" && this.input.password != "") {
                firebase.auth().signInWithEmailAndPassword(this.input.username, this.input.password)
                .then((user) => {
                    console.log('signed in');
                    this.input.loggedIn = true;
                    this.input.username = "";
                    this.input.password = "";
                })
                .catch((error) => {
                    alert("Incorrect Details");
                    this.input.loggedIn = false;
                })
            }
        },

        userLogout() {
            firebase.auth().signOut().then(() => {
                console.log("Just logged out");
                this.input.loggedIn = false;
            });
        },

        loggedIn() {
            return this.input.loggedIn;
        }
    },

    created() {
        this.$emit("update:layout", CLayout);
    }
};

</script>

<style>
  .container-style {
    background-color: rgb(255, 255, 255) !important;
    border: 1px solid rgb(206, 206, 206) !important;
    border-radius: 20px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .title-style {
      margin-top: 50px;
  }
</style>