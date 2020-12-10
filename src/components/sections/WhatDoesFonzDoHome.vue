<template lang="html">
  <div class="what-does-fonz-do center-content">
    <FonzTakesRequests />
    <HostConnectsSpotify />
    <GuestJoinsSession />
    <GuestQueuesSong />
  </div>
</template>

<script>
import FonzTakesRequests from "@/components/sections/WhatDoesFonzDoHome/FonzTakesRequests.vue";
import HostConnectsSpotify from "@/components/sections/WhatDoesFonzDoHome/HostConnectsSpotify.vue";
import GuestJoinsSession from "@/components/sections/WhatDoesFonzDoHome/GuestJoinsSession.vue";
import GuestQueuesSong from "@/components/sections/WhatDoesFonzDoHome/GuestQueuesSong.vue";
export default {
  components: {
    FonzTakesRequests,
    HostConnectsSpotify,
    GuestJoinsSession,
    GuestQueuesSong
  }
};
</script>

<style lang="css" scoped>
.what-does-fonz-do {
  max-width: 900px;
  margin: 50px auto;
}
</style>
