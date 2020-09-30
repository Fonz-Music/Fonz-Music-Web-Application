<template>
    <section
        class="features-tiles section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="features-tiles-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" />
                <div
                    class="tiles-wrap"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-from-right">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/tapIconWhite.svg')"
                                        alt="Feature tile icon 01"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Download our App
                                </h4>
                                <p class="m-0 text-sm">
                                    Navigate to the App Store or Play Store and download the Fonz app
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-right">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/spotifyIconWhite.svg')"
                                        alt="Feature tile icon 03"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Connect your Spotify
                                </h4>
                                <p class="m-0 text-sm">
                                    Sign into your Spotify account on the Fonz App
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="tiles-item reveal-from-right">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/tapIconWhite.svg')"
                                        alt="Feature tile icon 05"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Tap to Connect Your Coasters
                                </h4>
                                <p class="m-0 text-sm">
                                    Tap each of your Fonz coasters to pair them to your phone and set yourself as host
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="tiles-item reveal-from-left">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/queueIconWhite.svg')"
                                        alt="Feature tile icon 06"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Select your Tune
                                </h4>
                                <p class="m-0 text-sm">
                                    Search up the first song of the session using the Spotify
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="tiles-item reveal-from-left">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/rockOnWhite.svg')"
                                        alt="Feature tile icon 06"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Rock on!
                                </h4>
                                <p class="m-0 text-sm">
                                    Your music is now queued! Enjoy the party!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionTilesProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CHostInstructions',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: "I'm a Host",
        paragraph: "You're the one connected to the speaker, and in control of the tunes!"
      }
    }
  }
}
</script>