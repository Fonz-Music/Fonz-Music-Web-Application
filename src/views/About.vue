<template>
    <fragment>
        <c-generic-section top-divider class="center-content illustration-section-01">
            <c-section-header :data="genericSection01Header" class="reveal-from-bottom" />
            <p>Fonz acts a communication device, allowing multiple people to <br> contribute to the same Spotify session.
            </p>
            <c-button-group>
              <c-button color="primary">I'm a host</c-button>
              <c-button color="primary">I'm a guest</c-button>
            </c-button-group>
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
import CButton from '@/components/elements/Button.vue'
import CButtonGroup from '@/components/elements/ButtonGroup.vue'


export default {
  name: 'Secondary',
  components: {
    CSectionHeader,
    CGenericSection,
    CGuestInstructions,
    CHostInstructions,
    CButton,
    CButtonGroup
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
