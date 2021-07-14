<template>
  <div class="container">
    <div class="row row-style d-flex">

      <div class="align-center col-md-7 col-sm-12 mobile-align-centre">
        <c-image
          class="image-styling"
          :src="require('@/assets/images/' + imageSubPath + '')"
          alt="Client 05"
          :width="500"
        />
      </div>
      
      <div class="col-md-5 col-sm-12 mobile-align-centre">
        <div class="row">
          <span class="header-style"> {{ heading }} </span>
        </div>
        <div class="row">
          <span class="subtext-style"> {{ paragraph }} </span>
        </div>
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

.image-styling {
  float: left;
}

.header-style {
  font-weight: 900;
  font-size: 28px;
  color: grey;
}

.subtext-style {
  font-size: 18px;
  
}

</style>
