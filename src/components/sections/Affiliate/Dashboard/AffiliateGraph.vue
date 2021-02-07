<template>
  <section>
    <div class="container">
      <div class="row">
          <div>
            <b-dropdown id="dropdown-1" text="Filter" class="m-md-2">
              <b-dropdown-item @click="filterWeek()"> Last 7 Days </b-dropdown-item>
              <b-dropdown-item @click="filterMonth()"> Last 4 Weeks </b-dropdown-item>
              <b-dropdown-item @click="filterBiYear()"> Last 6 Months</b-dropdown-item>
              <b-dropdown-item @click="filterYear()"> Last Year </b-dropdown-item>
            </b-dropdown>
          </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 tile-background tile-spacing">
          <c-line-chart :chart-data="graphData" :options="chartOptions"/>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import CLineChart from "@/components/elements/LineChart.vue"
import CButton from "@/components/elements/Button.vue";
import CModal from "@/components/elements/Modal.vue";

export default {
  name: 'AffiliateGraph',
  components: {
      CLineChart,
      CButton,
      CModal
  },

  props: [
      'referrals'
  ],

  data() {
      return {
          graphData: {},
          salesData: [],

          // November 1st 2020
          startDate: new Date('1 November, 2020'),
          endDate: new Date(Date.now()),
          showFilter: false, 

          chartOptions: {
            tooltips: {
              mode: 'x',
              intersect: false
            },

            elements: {
              line: {
                tension: 0,
                fill: false,
                borderColor: '#ffc27d',
              },
              point: {
                radius: 3,
                backgroundColor: '#ff9425',
                borderColor: '#ff9425'
              },
            },
            
            scales: {
                xAxes: [{
                  type: 'time',
                  time: {
                    unit: 'week'
                  },
                  gridLines: {
                      drawBorder: false,
                      display: false
                  }
                }],
                yAxes: [{
                  gridLines: {
                      drawBorder: false,
                  },
                  ticks: {
                    beginAtZero: true
                  }
                }]
            },
            responsive: true,
            maintainAspectRatio: false,
          }
      }
  },
  methods: {
    displayData() {
      this.salesData = [
        {
          x: this.startDate,
          y: 0
        },
        {
          x: this.endDate,
          y: 0
        }
      ]
      this.referrals.forEach((referral) => {
        var point = { x: '', y: 0,};
        var pushed = false;
        var timestamp = referral.created._seconds * 1000;                        
        if(timestamp >= this.startDate && timestamp <= this.endDate) {
          var formattedTimestamp = new Date(timestamp)
          point.x = formattedTimestamp;
          point.y = referral.affiliateEarning;

          if(this.salesData.length != 0) {
            this.salesData.forEach((saleData) => {
            if(point.x.getDate() == saleData.x.getDate()) 
            {
              saleData.y += point.y;
              pushed = true;
            }
            })
          }
          if(!pushed) {
            this.salesData.push(point);
          }
        }
      })

      var temp = this.salesData.sort((a, b) => a.x - b.x);
      this.salesData = temp;
      this.graphData = {
        datasets: [
            {   
              label: 'Earnings',
              data: this.salesData
            }
          ]
        }
      this.showFilter = false;
    },

    openFilter() {
      // this.showFilter = true;
    },

    filterWeek() { 
      this.startDate.setTime(Date.now() - 604800000);
      this.chartOptions.scales.xAxes[0].time.unit = 'day'
      this.displayData();
    },

    filterMonth() { 
      this.startDate.setTime(Date.now() - 2629800000);
      this.chartOptions.scales.xAxes[0].time.unit = 'week'
      this.displayData();
    },

    filterBiYear() { 
      this.startDate.setTime(Date.now() - 15778800000);
      this.chartOptions.scales.xAxes[0].time.unit = 'month'
      this.displayData();
    },

    filterYear() { 
      this.startDate.setTime(Date.now() - 31557600000);
      this.chartOptions.scales.xAxes[0].time.unit = 'year'
      this.displayData();
    }
  },

  mounted() {
    this.displayData();
  }
}
</script>

<style scoped>
    .tile-background {
        border: solid 1px;
        border-radius: 5px;
        border-color: lightgrey !important;
        background-color: white;
    }

    .tile-spacing {
        margin: 0px 0px 0px 0px;
    }


</style>