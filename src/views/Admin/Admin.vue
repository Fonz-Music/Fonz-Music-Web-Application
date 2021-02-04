<template> 
    <fragment>
        <c-orders-table/>
    </fragment>
</template>



<script>
import CLayout from "@/layouts/LayoutDefault.vue";
import router from "@/router.js";
import COrdersTable from "@/components/sections/Admin/OrdersTable.vue";

export default {
    name: "Admin",

    components: {
        COrdersTable
    },

    data() {
        return {
            isAuthenticated: false
        }
    },

    created() {
        this.$emit("update:layout", CLayout);
        // Firebase Listener
        var user = firebase.auth().currentUser
        if (user) {

        firebase.auth().onAuthStateChanged(function(user) {
            if(user.uid === 'RDlE5IwuOLbpMB07DRTineMWlbK2'
            || user.uid === 'XUhAllOZwGSaGBWcb7Bg5Afb5lk2'
            || user.uid === 'Z2OquhNyvoOrS0mTRKZUVMTXcIp2'
            || user.uid === 'kDILEGQaPhOvocP5OWedzZNNOXJ3'
            ) {
                console.log("admin home listener: authenticated");
            }
            else {
                console.log("not authenticated");
                router.push('/admin-login');
            }
        });
        }
        
        else {
            router.push('/admin-login')
            console.log("null user");
        }
    }    
}
</script>



// // import layout
// import CLayout from "@/layouts/LayoutDefault.vue";

// // import components
// import CButton from "@/components/elements/Button.vue";
// import CInput from "@/components/elements/Input.vue";
// import COrdersTable from '@/components/sections/Admin/OrdersTable.vue';
// import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";

// // firebase auth

// firebase.auth().onAuthStateChanged(user => {
//     if(user) {
//         console.log('is auth');
//         this.input.loggedIn = true;
//     }
//     else {
//         console.log('isnt auth');
//         this.input.loggedIn = false;
//     }
// }) 

// export default {
//     name: "Admin",
//     components: {
//         CButton,
//         COrdersTable,
//         CInput,
//         CSectionHeader,
//         COrdersTable
//     },

//     data() {
//         return {
//             input: {
//                 username:"",
//                 password:"",
//                 loggedIn: false
//             },
//             sectionHeader: {
//                 title: 'Welcome to your dashboard!',
//                 paragraph: 'Here are our orders.'
//             },
//         }
//     },

//     methods: {
//         userLogin() {
//             if(this.input.username != "" && this.input.password != "") {
//                 firebase.auth().signInWithEmailAndPassword(this.input.username, this.input.password)
//                 .then((user) => {
//                     console.log('signed in');
//                     this.input.loggedIn = true;
//                     this.input.username = "";
//                     this.input.password = "";
//                 })
//                 .catch((error) => {
//                     alert("Incorrect Details");
//                     this.input.loggedIn = false;
//                 })
//             }
//         },

//         userLogout() {
//             firebase.auth().signOut().then(() => {
//                 console.log("Just logged out");
//                 this.input.loggedIn = false;
//             });
//         },

//         loggedIn() {
//             return this.input.loggedIn;
//         }
//     },

//     created() {
//         this.$emit("update:layout", CLayout);
//     }
// };

// </script>

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