<template>
    <section
        class="cta section center-content-mobile reveal-from-bottom"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="cta-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider',
                    split && 'cta-split'
                ]">
                <div class="cta-slogan">
                    <h3 class="m-0">
                        For previewing layouts and visual?
                    </h3>
                </div>
                <div class="cta-action">
                    <c-input id="newsletter" type="email" label="Subscribe" label-hidden has-icon="right" placeholder="Your best email">
                        <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
                        </svg>
                    </c-input>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CInput from '@/components/elements/Input.vue'

export default {
  name: 'CCta',
  components: {
    CInput
  },
  mixins: [SectionProps],
  props: {
    split: {
      type: Boolean,
      default: false
    }
  }
}
</script>