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
                                        :src="require('@/assets/images/feature-tile-icon-01.svg')"
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
                                        :src="require('@/assets/images/feature-tile-icon-03.svg')"
                                        alt="Feature tile icon 03"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Tap the Coaster
                                </h4>
                                <p class="m-0 text-sm">
                                    Tap the Fonz Coaster to join the host's session
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="tiles-item reveal-from-right">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-05.svg')"
                                        alt="Feature tile icon 05"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Select your Tune
                                </h4>
                                <p class="m-0 text-sm">
                                    Search up your song using the Fonz app, which holds Spotify's music library
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="tiles-item reveal-from-left">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-06.svg')"
                                        alt="Feature tile icon 06"
                                        :width="72"
                                        :height="72" />
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="mt-0 mb-8">
                                    Tap the Coaster
                                </h4>
                                <p class="m-0 text-sm">
                                    Tap the Fonz coaster again to add your song to the host's session
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="tiles-item reveal-from-left">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16">
                                    <c-image
                                        :src="require('@/assets/images/feature-tile-icon-06.svg')"
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
  name: 'CGuestInstructions',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: "I'm a Guest",
        paragraph: "You're joining the party and adding your tunes to the session!"
      }
    }
  }
}
</script>