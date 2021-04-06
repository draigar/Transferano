<script>
import VueApexCharts from "vue-apexcharts";

/**
 * Widget-chart component
 */
export default {
    components: {
        apexchart: () => import("vue-apexcharts"),
    },
    props: {
        number: {
            type: String,
            required: true,
        },
        chartColor: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    sparkline: {
                        enabled: true,
                    },
                },
                grid: {
                    padding: {
                        top: 10,
                    },
                },
                tooltip: {
                    fixed: {
                        enabled: false,
                    },
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: (seriesName) => {
                                return "";
                            },
                        },
                    },
                    marker: {
                        show: false,
                    },
                },
                stroke: {
                    show: true,
                    curve: "smooth",
                    width: 3,
                },
                colors: [this.chartColor],
            },
            series: [{
                data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
            }, ],
        };
    },
};
</script>
<template>
<div class="card">
    <div class="card-body">
        <div class="">
            <h3 class="mb-1">{{ number }}</h3>
            <p class="text-muted mb-1">{{ text }}</p>
        </div>
        <div class="">
            <div>
                <apexchart type="line" height="54" :series="series" :options="chartOptions"></apexchart>
            </div>
        </div>
    </div>
</div>
</template>
