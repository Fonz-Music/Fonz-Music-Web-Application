<template>
    <fragment>
      <div class="center-content">
        <c-features-split invert-mobile top-divider image-fill class="illustration-section-01"/>     
      </div>  
      <c-host-instructions top-divider class="center-content"/>
      <c-guest-instructions top-divider class="center-content"/>           
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutAlternative.vue'
// import section header
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
// import sections
import CGenericSection from '@/components/sections/GenericSection.vue'
import CGuestInstructions from '@/components/sections/GuestInstructions.vue'
import CHostInstructions from '@/components/sections/HostInstructions.vue'
import CFeaturesSplit from '@/components/sections/FeaturesSplit.vue'
// import some required elements


export default {
  name: 'Secondary',
  components: {
    CSectionHeader,
    CGenericSection,
    CGuestInstructions,
    CHostInstructions,
    CFeaturesSplit,
  },
  data() {
    return {
      genericSection01Header: {
        title: 'How does Fonz work?'
      },        
      demoModalActive: false
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
