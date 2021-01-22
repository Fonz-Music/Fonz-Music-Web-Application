<template>
    <div class="container">
        <div class="row">
            <div class="split-item-content col-5">
                <h3> {{heading}} </h3>
                <p> {{paragraph}} </p>
            </div>

            <div class="split-item-content visible-desktop center-content-mobile center-content col-7">
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
@media (max-width: 767px) {
    . {

    }
    .desktop
}

@media (min-width:992px) {
    .desktopTitle {
        

    }
}
</style>