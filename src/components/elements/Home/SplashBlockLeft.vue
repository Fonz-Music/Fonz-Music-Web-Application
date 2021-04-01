<template>
  <div class="container container-padding">
    <div class="row row-style d-flex">
      
      <div class="col-md-5 col-sm-12 mobile-align-centre">
        <div class="row">
          <span class="header-style"> {{ heading }} </span>
        </div>
        <div class="row">
          <span class="subtext-style"> {{ paragraph }} </span>
        </div>
      </div>

      <div class="col-md-7 col-sm-12 mobile-align-centre">
        <c-image
          class="image-styling"
          :src="require('@/assets/images/' + imageSubPath + '')"
          alt="Client 05"
          :width="500"
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

.image-styling {
  float: right;
}

.header-style {
  font-weight: 900;
  font-size: 28px;
  color: grey;
}

.subtext-style {
  font-size: 18px;
}

.container-padding {
    margin-bottom: 50px;
}
</style>
