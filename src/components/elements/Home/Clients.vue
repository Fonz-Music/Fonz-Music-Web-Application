<template>
    <ul class="list-reset row ">
        <li class="reveal-from-top col align-graphics">
            <c-image
                :src="require('@/assets/images/ClientIcons/clients-01.svg')"
                alt="Client 01"
                :width="100"
                />
        </li>

        <li class="reveal-from-bottom col align-graphics" data-reveal-delay="150">
            <c-image
                :src="require('@/assets/images/ClientIcons/clients-02.svg')"
                alt="Client 02"
                :width="100"
                />
        </li>

        <li class="reveal-from-top col align-graphics" data-reveal-delay="300">
            <c-image
                :src="require('@/assets/images/ClientIcons/clients-03.svg')"
                alt="Client 03"
                :width="100"
                />
        </li>

        <li class="reveal-from-bottom col align-graphics" data-reveal-delay="450">
            <c-image
                :src="require('@/assets/images/ClientIcons/clients-04.svg')"
                alt="Client 04"
                :width="100"
                />
        </li>
                    
        <li class="reveal-from-top col align-graphics" data-reveal-delay="600">
            <c-image
                :src="require('@/assets/images/ClientIcons/clients-05.svg')"
                alt="Client 05"
                :width="100"
                />
        </li>
    </ul>
</template>

<script>
import CImage from '@/components/elements/Image.vue';

export default {
  name: 'CClients',
  components: {
    CImage
  },
};
</script>

<style scoped>
    .align-graphics {
        margin-top: 0px;
    }
</style>