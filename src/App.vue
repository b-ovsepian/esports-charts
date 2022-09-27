<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Stats from './components/Stats.vue'
import Chart from './components/Chart.vue'
import LanguagesBar from './components/LanguagesBar.vue'
</script>

<template>
    <div class="container py-6">
        <section class="card mx-auto lg:w-1/4 w-full h-full max-w-sm">
            <Stats />
            <div class="rounded-lg bg-card">
                <Chart
                    field="viewers"
                    :chartData="data"
                    :currentIndex="index"
                    :changeIndex="setIndex"
                    :color="['rgba(255, 207, 42, 1)', 'rgba(255, 207, 42, .25)']"
                />
                <Chart
                    field="channels"
                    :chartData="data"
                    :currentIndex="index"
                    :changeIndex="setIndex"
                    :color="['rgba(109, 141, 255, 1)', 'rgba(109, 141, 255, .25)']"
                />
                <LanguagesBar :data="data[index].languages" />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'App',

    data() {
        // It's a function that returns a random integer between min and max.
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min
        }

        function getDates() {
            const dates = []
            const now = new Date()
            const year = now.getFullYear()
            const month = now.getMonth()
            for (let i = 0; i < 48; i++) {
                const date = new Date(year, month - i, 2)
                dates.push(date)
            }
            return dates
        }

        // It's a function that adds spaces to a number.
        function numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        }

        // It's a function that returns an object with languages data.
        function makeLanguagesData() {
            const languages = [
                { text: 'English', color: 'blue' },
                { text: 'Russian', color: 'orange' },
                { text: 'Spanish', color: 'yellow' },
                { text: 'German', color: 'red' },
                { text: 'Portuguese', color: 'green' },
                { text: 'Others', color: 'gray' },
            ]

            let total = 0

            return languages.reduce((acc, language, index) => {
                let random = 0

                if (index === languages.length - 1) {
                    random = 100 - total
                } else {
                    random = getRandomInt(0, 100 - total)
                }

                total += random
                acc[language.text] = {
                    text: language.text,
                    color: language.color,
                    value: random,
                }

                return acc
            }, {})
        }

        // It's a function that returns an array of objects with mock data.
        function makeMockData() {
            return getDates().map((date) => {
                const viewersValue = getRandomInt(100000, 1000000)
                const channelsValue = getRandomInt(1000, 5000)

                const data = {
                    date: date.toISOString().split('T')[0],
                    formatted_date: date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                    }),
                    viewers: {
                        value: viewersValue,
                        formatted_value: numberWithSpaces(viewersValue),
                    },
                    channels: {
                        value: channelsValue,
                        formatted_value: numberWithSpaces(channelsValue),
                    },
                    languages: makeLanguagesData(),
                }
                return data
            })
        }

        const data = makeMockData().reverse()
        return {
            data,
            index: data.length - 1,
        }
    },
    methods: {
        setIndex(index) {
            this.index = index
        },
    },
}
</script>
