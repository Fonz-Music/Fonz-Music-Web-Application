<template>
    <section class="section">
        <div class="section-inner container">
            <div class="col">
                <div class="row">
                    <c-splash-block-left
                     :heading="headingOne"
                     :paragraph="paraOne"
                     :imageSubPath="imgOne"
                    />
                </div>

                <div class="row">
                    <c-splash-block-right
                     :heading="headingTwo"
                     :paragraph="paraTwo"
                     :imageSubPath="imgTwo"
                    />
                </div>

                <div class="row">
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
import CSplashBlockLeft from "@/components/elements/Home/SplashBlockLeft.vue";
import CSplashBlockRight from "@/components/elements/Home/SplashBlockRight.vue";

export default {
    name:"CSplashBlocks",
    components: {
        CImage,
        CSplashBlockLeft,
        CSplashBlockRight
    },

    data() {
        return {
            headingOne: "make the party for everyone",
            paraOne: "Tap the coaster, queue the party. Fonz offers you a new way to play music at parties, events and gatherings. Instead of relying on one phone to host the music, now we all can.",
            imgOne: "SplashImages/splashArtwork-01.png",
            
            headingTwo: "collaborative playing",
            paraTwo: "To use your Fonz coaster, simply start a session as a host and connect your Spotify. Now guests can simply join your session by tapping your coaster, and start queueing songs immediately.",
            imgTwo: "SplashImages/splashArtwork-02.png",

            headingThree: "wherever, whenever",
            paraThree: "The Fonz coaster is made with high-quality PVC. It requires no power, and as long as your phone has access to cellular or the internet, you're goot to go. It's also spill-proof, so no worries about bringing it to the pregame, tailgate, or after-party.",
            imgThree: "SplashImages/splashArtwork-03.png",
        }
    }
};

</script>

<style scoped>

</style>