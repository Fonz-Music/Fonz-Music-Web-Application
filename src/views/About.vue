<template>
    <fragment>
        <c-generic-section top-divider class="center-content illustration-section-01">
            <c-section-header :data="genericSection01Header" class="reveal-from-bottom" />
            <p> How you use the Fonz coaster depends upon whether you're hosting the party or joining it. </p>
        </c-generic-section>
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
// import some required elements

export default {
  name: 'Secondary',
  components: {
    CSectionHeader,
    CGenericSection,
    CGuestInstructions,
    CHostInstructions,
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
