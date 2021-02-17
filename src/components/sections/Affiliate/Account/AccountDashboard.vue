<template>
  <section class="section">
    <div class="container">
      <div class="row">

        <div class="col-4">
          <div class="tile-style tile-padding">
            <span> your account </span>
          </div>
        </div>

        <div class="col-8">
          <div class="tile-style tile-padding">
            <span> financials </span>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AccountDashboard',
  components: {

  }
}
</script>

<style scoped>
  .tile-style {
    background-color: white;
    border: solid 1px;
    border-color: lightgrey;
  }

  .tile-padding {
    padding: 10px;
  }
</style>