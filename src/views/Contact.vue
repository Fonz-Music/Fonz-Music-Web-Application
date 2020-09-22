<template>
    <fragment>
        <c-pricing pricing-switcher class="illustration-section-01" />
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutAlternative.vue'
// import section header
// import sections
import CPricing from '@/components/sections/Pricing.vue'
// import some required elements

export default {
  name: 'Secondary',
  components: {
    CPricing,
  },
  data() {
    return {
      genericSection01Header: {
        title: 'Modal - Lorem ipsum is placeholder text commonly used.'
      },        
      demoModalActive: false
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
