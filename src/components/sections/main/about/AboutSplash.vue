<template>
    <section class="section">
        <div class="section-inner splash">
            <div class="splash-subheader">
                about us
            </div>
            <div class="splash-header">
                fonz music
            </div>
            <div class="splash-text">
              fonz music is an irish technology company focusing on making music a more social experience.
            </div>
            <div class="splash-image">
                <img src="@/assets/images/SplashImages/splashArtwork-02.png"/>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
@media (max-width: 768px) {
    .splash {
        text-align: center;
        padding-top: 120px !important;
    }
}

.splash {
    text-align: center;
}

.splash-subheader {
    color: #ff9425;
    font-size: 22px;
}

.splash-header {
    font-size: 48px;
    color: #363636;
    font-weight: 700;
}

.splash-text {
    display: block;
    margin: 0 auto;
    font-size: 14px;
    width: 300px;
    color: #707070;
}

.splash-image {
    display: block;
    margin: 0 auto;
    max-width: 300px;
}
</style>