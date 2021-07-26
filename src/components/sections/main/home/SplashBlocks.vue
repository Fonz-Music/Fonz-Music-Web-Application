<template>
    <section class="section">
        <div class="section-inner">
            <div class="container">
                <div class="row-12 mb-16 reveal-from-bottom">
                    <c-splash-block-left
                     :heading="headingOne"
                     :paragraph="paraOne"
                     :imageSubPath="imgOne"
                    />
                </div>

                <div class="row-12 mb-16 reveal-from-top">
                    <c-splash-block-left
                     :heading="headingTwo"
                     :paragraph="paraTwo"
                     :imageSubPath="imgTwo"
                    />
                </div>

                <div class="row-12 mb-16 reveal-from-bottom">
                    <c-splash-block-left
                     :heading="headingThree"
                     :paragraph="paraThree"
                     :imageSubPath="imgThree"
                    />
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import CImage from "@/components/elements/Image.vue";
import CSplashBlockLeft from "@/components/elements/SplashBlockLeft.vue";
import CSplashBlockRight from "@/components/elements/SplashBlockRight.vue";

export default {
    name:"CSplashBlocks",
    components: {
        CImage,
        CSplashBlockLeft,
        CSplashBlockRight
    },

    data() {
        return {
            headingOne: "queue music effortlessly",
            paraOne: "we've all been there. your friend comes up to you for the twentieth time that night asking to play a song. you grit your teeth and say 'sure!', full well knowing between unlocking your phone, opening your music app and praying to god they don't exit your playlist, 5 minutes of your night has been wasted. the fonz coaster solves all that.",
            imgOne: "SplashImages/splashArtwork-01.png",
            
            headingTwo: "collaborative playing",
            paraTwo: "to use your Fonz coaster, simply start a session as a host and connect your spotify. now guests can simply join your session by tapping your coaster, and start queueing songs immediately.",
            imgTwo: "SplashImages/splashArtwork-03.png",

            headingThree: "wherever, whenever",
            paraThree: "the fonz coaster is made with high-quality PVC. it requires no power, and as long as your phone has access to cellular or the internet, you're good to go. it's also spill-proof, so no worries about bringing it to the pregame, tailgate, or after-party.",
            imgThree: "SplashImages/splashArtwork-02.png",
        }
    }
};

</script>

<style scoped>

</style>