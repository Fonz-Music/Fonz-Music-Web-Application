<template>
    <div class="container">
        <div class="row d-flex">
            <div class="col-md-4 col-sm-12 mobile-align-centre">
                <h3> {{heading}} </h3>
                <p> {{paragraph}} </p>
            </div>

            <div class="col-md-8 col-sm-12 mobile-align-centre">
                <c-image
                    :src="require('@/assets/images/' + imageSubPath + '')"
                    alt="Client 05"
                    :width="600"
                />
            </div>
        </div>
    </div>
</template>

<script>
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CSplashBlockLeft',
  components: {
    CImage
  },
  props: {
      heading: {
          type: String,
          default: 'heading'
      },
      paragraph: {
          type: String,
          default: 'paragraph'
      },
      imageSubPath: {
          type: String,
          default: 'TeamMembers/team-member-02.png'
      }
  },
};


</script>


<style scoped>
@media (max-width: 768px) {
    .mobile-align-centre {
		text-align: center !important;
        margin: auto !important;
        
    }
}
</style>
