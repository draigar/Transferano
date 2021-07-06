<!--<template>
<div>
  <div>
    <h2 class="tw-ml-6">Market Overiew</h2>
  </div>
  <div class="tw-bg-white border-gray-200 tw-rounded-3xl tw-shadow-xl">
      
  </div>
</div>
  
</template>-->

<script>
import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    data() {
        return {
            selectedKey: 0,
            offersLoading: false,
            chartdata: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                ],
                datasets: [
                    {
                        label: "Market Overiew",
                        data: [10000, 9080, 12340, 17890, 25600, 19000, 19090],
                        backgroundColor: " rgba(42, 170, 192, 0.11)",
                        borderColor: '#2AAAC0',
                        borderWidth: 4,
                        pointBackgroundColor: "#fff",
						pointRadius: 7,
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    gridLines: {
                        display: true
                    }
                    }],
                    xAxes: [ {
                    gridLines: {
                        display: false
                    }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    },
    methods: {
        selectOffers(key) {

        },
        open(){
            this.$refs.filterModal.showModal()
        }
    }
}
</script>

<style scoped>
.tab-head {
  width: 100%;
  margin-bottom: 5px;
}
.tab-head-tab {
  padding: 15px 27px;
  font-weight: 400;
  font-size: 15px;
  color: #bdbdbd;
  cursor: pointer;
}
.tab-head-tab.selected {
  color: rgb(32, 13, 138);
  border-bottom: solid 3px rgb(32, 13, 138);
}
</style>