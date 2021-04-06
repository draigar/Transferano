<template>
    <apexchart class="apex-charts" type="line" :options="chartOptions" height="465" :series="series"></apexchart>    
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

/**
 * Products-sales component
 */
export default {
    components: {
        apexchart: () => import('vue-apexcharts')
    },
    data() {
        return {
            series: [{
                    name: "Bitcoin",
                    type: "area",
                    data: [22, 30, 55, 41, 67, 22, 43, 21, 41, 56, 27]
                },
                {
                    name: "",
                    type: "line",
                    data: []
                }
            ],
            chartOptions: {
                chart: {
                    type: "line",
                    padding: {
                        right: 0,
                        left: 0
                    },
                    stacked: false,
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    width: [4],
                    curve: "smooth"
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%"
                    }
                },
                colors: ["#3bafda", "#1abc9c", "#f7b84b"],
                fill: {
                    opacity: [0.25, 1],
                    gradient: {
                        inverseColors: false,
                        shade: "light",
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                labels: [
                    "01/01/2020",
                    "02/01/2020",
                    "03/01/2020",
                    "04/01/2020",
                    "05/01/2020",
                    "06/01/2020",
                    "07/01/2020",
                    "08/01/2020",
                    "09/01/2020",
                    "10/01/2020",
                    "11/01/2020"
                ],
                markers: {
                    size: 0
                },
                legend: {
                    offsetY: 5
                },
                xaxis: {
                    type: "datetime"
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return val + "k";
                        },
                        offsetX: -10
                    }
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return y.toFixed(0) + " Dollars";
                            }
                            return y;
                        }
                    }
                },
                grid: {
                    borderColor: "#f1f3fa",
                    padding: {
                        bottom: 10
                    }
                }
            }
        };
    }
};
</script>