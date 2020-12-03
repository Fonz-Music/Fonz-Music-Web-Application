<template>
    <div>
        <c-chart-base 
        :chartdata="chartData"
        :options ="chartOptions"
        />
    </div>
</template>


<script>
import CChartBase from '@/components/elements/Charts/core/ChartBase.vue'

export default {
  name: "ChartRevenue",
  components: { CChartBase },

  data: () => ({
    chartData: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: null,
          backgroundColor: '#A77FA9',
          data: [20, 10, 30, 2, 9, 2, 34, 5, 2, 9, 10, 23]
        }
      ]
    },
  
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,

        layout: {
            padding: {
                left: 20
            }
        },

        legend: {
            display: false
        },

        title: {
            display: true,
            text: 'Income',
            fontSize: 18,
            position: 'top',
            fontColor: '#A77FA9',
            lineHeight: 2,
            padding: 5
        },

        elements: {
            point: {
                pointStyle: 'circle',
                borderColor: '#A77FA9',
                radius: 2
            },

            line: {
                fill: false,
                borderColor: '#A77FA9',
                borderWidth: '1',
                tension: 0.5
            }
        }   
    }
  }),
}

</script>