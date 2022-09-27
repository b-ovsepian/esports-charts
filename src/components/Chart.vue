<template>
    <div class="card__inner">
        <div class="flex items-center text-xs mb-4">
            <p>{{ `Avg. ${field}` }}</p>
            <div class="ml-auto flex items-center gap-2">
                <p>{{ data.date }}</p>
                <b class="text-white">{{ data[field] }}</b>
            </div>
        </div>
        <chart
            class="h-[128px] w-full"
            ref="chart"
            v-on:mouseover="handleHighlight"
            :option="chartOptionsBar"
            @highlight="handleHighlight"
        ></chart>
    </div>
</template>

<script>
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'

import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'

use([CanvasRenderer, BarChart, GridComponent, TooltipComponent])

export default {
    name: 'simpleChart',
    components: {
        chart: ECharts,
    },
    props: {
        chartData: {
            type: Object,
            required: true,
        },
        field: {
            type: String,
            required: true,
        },
        currentIndex: {
            type: Number,
            required: true,
        },
        changeIndex: {
            type: Function,
            required: true,
        },
        color: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            chartOptionsBar: {
                grid: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                },
                xAxis: {
                    type: 'category',
                    data: this.chartData.map((item) => item.formatted_date),
                    show: false,
                },
                yAxis: {
                    type: 'value',
                    show: false,
                },
                series: [
                    {
                        data: this.chartData.map((item) => item[this.field].value),
                        type: 'bar',
                        roundCap: true,
                    },
                ],
            },
            data: {
                date: this.chartData[this.currentIndex].formatted_date,
                viewers: this.chartData[this.currentIndex].viewers.formatted_value,
                channels: this.chartData[this.currentIndex].channels.formatted_value,
            },
        }
    },
    mounted() {
        this.$refs.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: this.currentIndex,
            dataIndex: this.currentIndex,
        })

        window.addEventListener('resize', this.handleResize)
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize)
    },
    watch: {
        // A watcher that is watching the currentIndex prop. When the currentIndex prop changes, it will
        // dispatch an action to the chart.
        currentIndex: function (newIndex) {
            this.$refs.chart.dispatchAction({
                type: 'highlight',
                seriesIndex: newIndex,
                dataIndex: newIndex,
            })
        },
    },
    methods: {
        // A function that is called when the mouse is over the chart.
        handleHighlight: function (params) {
            const color = this.color
            this.$refs.chart.setOption({
                series: [
                    {
                        itemStyle: {
                            color: function (e) {
                                if (e.dataIndex === params.dataIndex) {
                                    return color[0] || 'rgba(255, 207, 42, 1)'
                                } else {
                                    return color[1] || 'rgba(255, 207, 42, .25)'
                                }
                            },
                        },
                    },
                ],
            }),
                (this.data = {
                    date: this.chartData[params.dataIndex].formatted_date,
                    viewers: this.chartData[params.dataIndex].viewers.formatted_value,
                    channels: this.chartData[params.dataIndex].channels.formatted_value,
                })
            this.changeIndex(params.dataIndex)
        },
        // A function that is called when the window is resized.
        handleResize: function () {
            this.$refs.chart.resize()
        },
    },
}
</script>
