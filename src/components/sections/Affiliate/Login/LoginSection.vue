<template>
    <section class="section">
        <div class="section-inner">
            <div class="container">
                <div class="row justify-content-center">
                    <h1> Affiliate Portal </h1>
                </div>

                <div class ="row justify-content-center">
                    <form>
                        <fieldset>
                            <c-input
                            id="emailField"
                            type="email"
                            placeholder="e-mail"
                            label="e-mail"
                            required
                            />
                            <c-input
                            id="passwordField"
                            type="password"
                            label="password"
                            required
                            />
                        </fieldset>
                    </form>
                </div>

                <div class="row justify-content-center">
                        <c-button @click="signInEmail()"> sign in </c-button>
                </div>
            </div>

            <div v-if='createdAccountError' class="container"> 
                <div class="row justify-content-center">
                    <p>
                    Invalid e-mail or an account already exists with this name.                    
                    </p>
                </div>
            </div>

            <div v-if='incorrectLogin' class="container mt-16"> 
                <div class="row justify-content-center">
                    <p>
                        Your e-mail or password is incorrect.
                    </p>
                </div>
            </div>


        </div>
    </section>
</template>

<script>
import CButton from "@/components/elements/Button.vue";
import CInput from "@/components/elements/Input.vue";


export default {
    name:'LoginSection',

    components: {
        CButton,
        CInput
    },

    data() {
        return {
            createdAccountError: false,
            incorrectLogin: false
        }
    },

    methods: {
        async signInEmail() {
            var email = document.getElementById("emailField");
            var password = document.getElementById("passwordField");

            firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then((userCredential) => {
                user = userCredential.user;
            })
            .catch(() => {
                console.log("error");
                this.incorrectLogin = true;
                this.createdAccountError = false;
            })
        },

        async signOut() {
            firebase.auth().signOut()
            .then(() => {
                console.log('successfully signed out');
            })
            .catch(() => {
                console.log("error");
            })

        }
    }
}

</script>