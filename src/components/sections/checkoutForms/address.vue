<template lang="html">
  <div class="addressTab">
    <h3 class="text-center">please fill in your address</h3>
    <div class="text-center autocomplete">
      <label>
        Address:
        <br />
        <GmapAutocomplete class="search-address" @place_changed="setPlace">
        </GmapAutocomplete>
        <br />
        <b-button @click="usePlace">Submit</b-button>
      </label>
    </div>

    <br />
  </div>
</template>

<script>
import CInput from "@/components/elements/Input.vue";
import CButton from "@/components/elements/Button.vue";
export default {
  name: "address",
  components: {
    CInput,
    CButton
  },
  methods: {
    nextTab: function() {
      this.$emit("nextTab", 2);
    },
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      this.place = place;
    }
    // usePlace(place) {
    //   if (this.place) {
    //     this.markers.push({
    //       position: {
    //         lat: this.place.geometry.location.lat(),
    //         lng: this.place.geometry.location.lng()
    //       }
    //     });
    //     this.place = null;
    //   }
    // }
  },
  data() {
    return {
      address: "",
      error: ""
    };
  }
  // mounted() {
  //   new google.maps.places.Autocomplete(
  //     document.getElementById("autocomplete")
  //   );
  // }
};
</script>

<style lang="css" scoped>
/* c-button {
  width: 90px;
} */
.paymentTab {
  max-width: 500px;
  /* padding: auto; */
  margin: auto;
}
.btn-secondary {
  background-color: #b288b9;
}
.paymentTab p {
  text-align: center;
}

.button-block {
  margin: 35px 0;
}
.search-address {
  background-color: white;
  margin: 20px 0;
  /* width: 100%; */
}
.autocomplete label {
  font-size: 18pt;
}
</style>
