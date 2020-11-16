<template>
    <div class="small">
        <c-line-chart/>
    </div>
</template>

<script>
import CLineChart from '@/plugins/linechart.js'

export default {
  name: "LineChartContainer",
  components: { CLineChart },

  data () {
      return {
        datacollection: null
      }
  }
}
</script>


<style>
  .small {
    max-width: 800px;
    margin:  0px 0px;
  }
</style>