<template>
    <section>
        <div class="container">
            <div class="row d-flex justify-content-center mobile-align-centre">
                <h2> download the Fonz Music app </h2>
            </div>
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <c-button-group>
                        <c-button 
                        tag="a" 
                        href="https://apps.apple.com/us/app/fonz-music/id1537308329"
                        color='primary'
                        >
                            App Store
                            <img src='@/assets/images/DownloadApp/downloadIcons-01.svg'/>
                        </c-button>

                        <c-button 
                        tag="a" 
                        href="https://play.google.com/store/apps/details?id=com.fonzmusic.fonz&hl=en_US&gl=US"
                        color='primary'
                        >
                            Google Play
                            <img src='@/assets/images/DownloadApp/downloadIcons-02.svg'/>
                        </c-button>

                    </c-button-group>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CButton from "@/components/elements/Button.vue";
import CButtonGroup from "@/components/elements/ButtonGroup.vue";

export default {
  name: "DownloadApp",
  components: {
    CButton,
    CButtonGroup
  }
};
</script>

<style scoped>
@media (max-width: 768px) {

    .mobile-align-centre {
		text-align: center !important;
        margin: auto !important;
        
    }
}

</style>