<template>
    <section
        class="hero section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="hero-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop',
                        alignTop && 'align-top'
                    ]">
                    <div class="split-item">
                        <div class="hero-content split-item-content center-content-mobile">
                            <h1 class="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="150">
                                Landing template for startups
                            </h1>
                            <p class="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="300">
                                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                            </p>
                            <div class="reveal-from-bottom" data-reveal-delay="450">
                                <c-button tag="a" color="primary" wide-mobile href="#">
                                    Get started now
                                </c-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionSplitProps } from '@/utils/SectionProps.js'
import CButton from '@/components/elements/Button.vue'

export default {
  name: 'CHeroSplit',
  components: {
    CButton
  },
  mixins: [SectionSplitProps]
}
</script>

<style scoped>
@media (min-width: 641px) {
  .split-wrap .split-item {
    min-height: 492px;
  }
}
</style>