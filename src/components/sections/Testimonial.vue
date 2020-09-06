<template>
    <section
        class="testimonial section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="testimonial-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    class="tiles-wrap"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-from-right" data-reveal-delay="200">
                        <div class="tiles-item-inner">
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div class="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                <span class="testimonial-item-name text-color-high">Roman Level</span>
                                <span class="text-color-low"> / </span>
                                <span class="testimonial-item-link">
                                    <a href="#">AppName</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-bottom">
                        <div class="tiles-item-inner">
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div class="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                <span class="testimonial-item-name text-color-high">Diana Rynzhuk</span>
                                <span class="text-color-low"> / </span>
                                <span class="testimonial-item-link">
                                    <a href="#">AppName</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-left" data-reveal-delay="200">
                        <div class="tiles-item-inner">
                            <div class="testimonial-item-content">
                                <p class="text-sm mb-0">
                                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                                </p>
                            </div>
                            <div class="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                                <span class="testimonial-item-name text-color-high">Ben Stafford</span>
                                <span class="text-color-low"> / </span>
                                <span class="testimonial-item-link">
                                    <a href="#">AppName</a>
                                </span>
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

export default {
  name: 'CTestimonial',
  components: {
    CSectionHeader
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Don\'t take our word for it',
        paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.'
      }
    }
  }
}
</script>