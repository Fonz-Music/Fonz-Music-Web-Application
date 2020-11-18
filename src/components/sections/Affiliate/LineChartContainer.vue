<template>
    <div>
      <c-line-chart class="chart-style"/>
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

</style>