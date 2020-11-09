<template lang="html">
  <div class="addressTab">
    <h3 class="text-center">please fill in your address</h3>
    <div class="text-center autocomplete">
      <label>
        Address
        <br />
        <GmapAutocomplete
          class="search-address"
          @place_changed="getAddressData"
        >
        </GmapAutocomplete>
        <br />
        <b-button @click="setPlace">Submit</b-button>
      </label>
    </div>

    <br />
  </div>
</template>

<script>
export default {
  name: "addressTab",
  components: {},
  props: {
    value: {
      type: String
      // required: true
    }
  },
  methods: {
    nextTab: function() {
      localStorage.setItem("guestAddress", this.value);
      this.$emit("nextTab", 3);
    },
    setDescription(description) {
      this.description = description;
    },
    setPlace(place) {
      // v - model = "value";
      // this.place = place;
      // console.log(place);
      // this.nextTab();
    },
    getAddressData: function(addressData, placeResultData, id) {
      var givenAddress = JSON.parse(
        JSON.stringify(addressData["formatted_address"]).toString()
      );
      this.$emit("input", givenAddress);
      // console.log("value" + this.value);
      // console.log("address " + JSON.stringify(addressData));
      console.log("address " + givenAddress);
      localStorage.setItem("guestAddress", JSON.stringify(givenAddress));
      console.log(typeof givenAddress);
      console.log(
        "address from storage " + localStorage.getItem("guestAddress")
      );
      this.nextTab();
      // this.value = addressData;
    }
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    }
  },
  data() {
    return {
      place: "",
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
  border-radius: 15px !important;
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
  width: 60vw;
  min-width: 300px;
  max-width: 600px;
  text-align: center;
  border: 2px solid #b288b9;
  border-radius: 15px;
  /* width: 100%; */
}
.autocomplete label {
  font-size: 18pt;
}
</style>
