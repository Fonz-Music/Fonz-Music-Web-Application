<template>
    <section>
        <div class="section-inner">
            <div class="container">
                <div class="row justify-content-center">
                    <c-line-chart :chartdata="chartData" :options="chartOptions"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CLineChart from "@/components/elements/LineChart.vue"

export default {
    name: 'AffiliateGraph',
    components: {
        CLineChart
    },

    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April'],
                datasets: [
                    {
                        label: 'Data One',
                        data: [40, 20, 30, 50, 10]
                    }
                ],
            },
            chartOptions: {

            }
        }
    }
}
</script>

<style scoped>
    .graph-style{
    }
</style>