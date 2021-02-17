<template>
  <div class="modal-background">
    <div class="modal-content">
      <p> Test </p>
    </div>
  </div>

</template>

<script>
export default {
  name: "AffiliateRegister",
}
</script>

<style scoped>

.modal-background {
  display: none;
  position: fixed; 
  z-index: 999; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

</style>