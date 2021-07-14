<template>
    <nav class="footer-nav">
        <ul class="list-reset">
            <li>
                <router-link to="/contact/">Contact/FAQs</router-link>
            </li>
            <li>
              <!-- <a href="https://form.jotform.com/Fonz_Music/bugfixform" target="_blank">Report Bug</a> -->
                <router-link to="/bugfix/">Report Bug</router-link>
            </li>
            <li>
                <router-link to="/about/">About</router-link>
            </li>
            <li>
                <router-link to="/email">Join the Newsletter</router-link>
            </li>
            <li>
                <router-link to="/privacy-policy">Privacy Policy</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'CFooterNav'
}
</script>
