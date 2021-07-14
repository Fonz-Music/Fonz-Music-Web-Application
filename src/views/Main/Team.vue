<template>
  <fragment>
    <c-members top-divider/>
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/layoutMain.vue";
// import sections
import CMembers from "@/components/sections/main/team/Members.vue";

export default {
  name: "Team",
  components: {
    CMembers
  },
  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
