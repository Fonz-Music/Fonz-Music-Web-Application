<template>
  <section>
    <div class="container">
      <div class="row">
        <c-button @click="openFilter()"> Filter </c-button>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 tile-background tile-spacing">
          <c-line-chart :chart-data="graphData" :options="chartOptions"/>
        </div>
      </div>
    </div>

    <c-modal :active.sync="showFilter">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <p> Start Date: </p>
          </div>
          <div class="col-8">
            <input id="startDate" class="form-control" type="date" value="2020-11-13"/>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <p> End Date: </p>
          </div>

          <div class="col-8">
            <input id="endDate" class="form-control" type="date" value="2020-12-23"/>
          </div>
        </div>

        <div class="row justify-content-center">
          <button class="form-control"
            @click="updateData()"> Refresh 
          </button>
        </div>
      </div>
    </c-modal>
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
          startDate: 1577836800000,
          endDate: 1640908800000,
          showFilter: false, 

          chartOptions: {
              scales: {
                  xAxes: [{
                      gridLines: {
                          drawBorder: false,
                          display: false
                      }
                  }],
                  yAxes: [{
                      gridLines: {
                          drawBorder: false,
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
        this.salesData = [];
        this.referrals.forEach((referral) => {
            var timestamp = referral.created._seconds * 1000;            
            if(timestamp >= this.startDate && timestamp <= this.endDate) {
                this.salesData.push(referral.affiliateEarning);
            }            
        })

        this.graphData = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
          datasets: [
              {   
                label: 'Sales',
                data: this.salesData
              }
            ]
        }
      this.showFilter = false;
    },

    updateData() {
      this.startDate = document.getElementById("startDate").valueAsNumber;
      this.endDate = document.getElementById("endDate").valueAsNumber;
      this.displayData();
    },

    openFilter() {
      this.showFilter = true;
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