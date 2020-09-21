<template>
    <fragment>
        <c-team top-divider />
    </fragment>
</template>

<script>
// import layout
import CLayout from '@/layouts/LayoutAlternative.vue'
// import sections
import CTeam from '@/components/sections/Team.vue'

export default {
  name: 'Team',
  components: {
    CTeam,
  },
  data() {
    return {
      genericSection01Header: {
        title: 'Modal - Lorem ipsum is placeholder text commonly used.'
      },        
      genericSection02Header: {
        title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection03Header: {
        title: 'Input forms - Lorem ipsum is placeholder text commonly used.'
      },
      genericSection04Header: {
        title: 'FAQ - Lorem ipsum is placeholder text commonly used.'
      },        
      demoModalActive: false
    }
  },
  created() {
    this.$emit('update:layout', CLayout)
  }
}
</script>
