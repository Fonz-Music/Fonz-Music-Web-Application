<template>
    <fragment>
        <c-hero-split class="illustration-section-01" />
        <c-clients top-divider bottom-divider />
        <c-generic-section top-divider class="center-content">
            <c-section-header :data="genericSection01Header" class="reveal-from-bottom" />
            <div class="reveal-from-bottom">
                <a
                    data-video="https://player.vimeo.com/video/174002812"
                    href="#"
                    aria-controls="video-modal"
                    @click.prevent="videoModalActive = true">
                    <c-image
                        :src="require('@/assets/images/video-placeholder.svg')"
                        alt="Video"
                        :width="712"
                        :height="400" />
                </a>
            </div>
            <c-modal
                id="video-modal"
                :active.sync="videoModalActive"
                video="https://player.vimeo.com/video/174002812"
                video-tag="iframe" />
        </c-generic-section>        
        <c-features-tiles top-divider class="center-content" />
        <c-testimonial top-divider />
        <c-cta split />
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutDefault.vue'
// import section header
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
// import sections
import CHeroSplit from '@/components/sections/HeroSplit.vue'
import CClients from '@/components/sections/Clients.vue'
import CGenericSection from '@/components/sections/GenericSection.vue'
import CFeaturesTiles from '@/components/sections/FeaturesTiles.vue'
import CTestimonial from '@/components/sections/Testimonial.vue'
import CCta from '@/components/sections/Cta.vue'
// import some reuqired elements
import CImage from '@/components/elements/Image.vue'
import CModal from '@/components/elements/Modal.vue'

export default {
  name: 'Home',
  components: {
    CSectionHeader,
    CHeroSplit,
    CClients,
    CGenericSection,
    CFeaturesTiles,
    CTestimonial,
    CCta,
    CImage,
    CModal
  },
  data() {
    return {
      genericSection01Header: {
        title: 'Built exclusively for you',
        paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.'
      },
      videoModalActive: false
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
