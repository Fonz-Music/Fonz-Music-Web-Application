<template>
    <section class="section">
        <div class="section-inner">
            <div class="container">
                <div class="row justify-content-center">
                    <h1> Sign Up </h1>
                </div>

                <div class ="row justify-content-center">
                    <form>
                        <fieldset>
                            <c-input
                            id="nameField"
                            type = "text"
                            placeholder = "name"
                            label = "name"
                            required
                            />
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
                            <c-input
                            id="confirmPasswordField"
                            type="password"
                            label="confirm password"
                            required
                            />
                        </fieldset>
                    </form>
                </div>

                <div class="row justify-content-center">
                    <c-button @click="registerEmail()"> register </c-button>
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
    name:'RegisterSection',

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
        async registerEmail() {
            var testPassword = document.getElementById("passwordField");
            var testConfirmPassword = document.getElementById("confirmPasswordField");

            if(testPassword.value === testConfirmPassword.value) {
                var email = document.getElementById("emailField");
                var password = document.getElementById("passwordField");

                firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
                .then((userCredential) => {
                    user = userCredential.user;
                    console.log("account created");
                })

                .catch(() => {
                    console.log("Invalid e-mail or an account already exists with this name.");
                    this.createdAccountError = true;
                    this.incorrectLogin = false;
                })
            }
            else {
                console.log("passwords dont match")
            }
        }
    }
}

</script>

