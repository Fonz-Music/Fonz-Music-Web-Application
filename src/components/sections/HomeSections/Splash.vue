<template>
    <section class="section">
        <div class="container-xl">
            <div class="section-inner">

                <!-- Split of Copy / Image -->
                <div
                class="split-wrap"
                :class="[
                    invertMobile && 'invert-mobile',
                    invertDesktop && 'invert-desktop',
                    alignTop && 'align-top'
                ]"
                >
                    <div class="split-item row">

                        <!-- Copy -->
                        <div class="split-item-content center-content-mobile col-8">

                            <h1 class="row mt-0 mb-4 reveal-from-bottom" data-reveal-delay="150">
                                <span>because there&apos;s always a&nbsp;</span> 
                                <span style="color: #fcc485;">perfect song</span> 
                                <span>&nbsp;to play next</span>
                            </h1>

                            <div class="row mt-0 mb-24" data-reveal-delay="450">
                                    <c-button
                                    tag="a"
                                    color="primary"
                                    wide-mobile
                                    href="/buy"
                                    >Buy now!</c-button>
                            </div>

                            <div class="row-2">
                                <c-clients/>
                            </div>

                        </div>

                        <!-- Image -->
                        <div class="split-item-content center-content-mobile center-content col-4">
                            <c-image
                            class="image-larger"
                            :src="require('@/assets/images/splashGraphic.png')"
                            alt="Splash Graphic"
                            :width="700"
                            :height="388"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import CButton from "@/components/elements/Button.vue";
import CImage from "@/components/elements/Image.vue";
import CClients from "@/components/elements/Home/Clients.vue";


export default {
  name: "CSplash",
  components: {
    CButton,
    CImage,
    CClients,
  },
};
</script>

<style scoped>
@media (min-width: 641px) {
  /* .split-wrap .split-item {
    min-height: 492px;
  } */
}

</style>
