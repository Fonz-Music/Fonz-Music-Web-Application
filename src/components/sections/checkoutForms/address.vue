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
      type: Object
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

      // console.log("value" + this.value);
      // console.log("address " + JSON.stringify(addressData));
      console.log("address " + givenAddress);
      var numberAddress = JSON.parse(
        JSON.stringify(
          addressData["address_components"][0]["long_name"]
        ).toString()
      );
      var streetNameAddress = JSON.parse(
        JSON.stringify(
          addressData["address_components"][1]["long_name"]
        ).toString()
      );
      var cityNameAddress = JSON.parse(
        JSON.stringify(
          addressData["address_components"][2]["long_name"]
        ).toString()
      );
      var stateNameAddress = JSON.parse(
        JSON.stringify(
          addressData["address_components"][4]["long_name"]
        ).toString()
      );
      var countryCodeAddress = JSON.parse(
        JSON.stringify(
          addressData["address_components"][5]["short_name"]
        ).toString()
      );
      var zipCodeAddress = JSON.parse(
        JSON.stringify(
          addressData["address_components"][6]["long_name"]
        ).toString()
      );
      var addressArray = [
        numberAddress,
        streetNameAddress,
        cityNameAddress,
        stateNameAddress,
        countryCodeAddress,
        zipCodeAddress,
        givenAddress
      ];
      localStorage.setItem("guestAddressArray", JSON.stringify(addressArray));
      // console.log("arary address " + numberAddress);
      // localStorage.setItem("guestAddress", JSON.stringify(givenAddress));
      // console.log(typeof givenAddress);
      // console.log(
      //   "address from storage " + localStorage.getItem("guestAddress")
      // );
      console.log(
        "addressArray from storage " + localStorage.getItem("guestAddressArray")
      );
      this.$emit("input", addressArray);
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
