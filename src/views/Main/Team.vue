<template>
  <fragment>
    <c-team top-divider/>
  </fragment>
</template>

<script>
// import layout
import CLayout from "@/layouts/LayoutDefault.vue";
// import sections
import CTeam from "@/components/sections/Team.vue";

export default {
  name: "Team",
  components: {
    CTeam
  },
  created() {
    this.$emit("update:layout", CLayout);
  }
};
</script>
