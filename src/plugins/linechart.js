import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    data: () => ({
        chartdata: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: null,
              backgroundColor: '#A77FA9',
              data: [0, 10, 20, 7, 9, 2, 34, 5, 2, 9, 10, 23]
            }
          ]
        },
        options: {
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

  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartdata, this.options)
  }
}