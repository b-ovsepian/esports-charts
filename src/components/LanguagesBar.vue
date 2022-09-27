<template>
    <div class="p-6">
        <div class="flex items-center text-sm">
            Languages distribution
            <svg
                data-tippy-content="By active streamers in selected month"
                class="fill-current w-4 h-4 ml-3 opacity-50 hover:cursor-help"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.00016 14.6667C4.31816 14.6667 1.3335 11.682 1.3335 8.00001C1.3335 4.31801 4.31816 1.33334 8.00016 1.33334C11.6822 1.33334 14.6668 4.31801 14.6668 8.00001C14.6668 11.682 11.6822 14.6667 8.00016 14.6667ZM8.00016 13.3333C9.41465 13.3333 10.7712 12.7714 11.7714 11.7712C12.7716 10.7711 13.3335 9.4145 13.3335 8.00001C13.3335 6.58552 12.7716 5.22897 11.7714 4.22877C10.7712 3.22858 9.41465 2.66668 8.00016 2.66668C6.58567 2.66668 5.22912 3.22858 4.22893 4.22877C3.22873 5.22897 2.66683 6.58552 2.66683 8.00001C2.66683 9.4145 3.22873 10.7711 4.22893 11.7712C5.22912 12.7714 6.58567 13.3333 8.00016 13.3333ZM7.3335 4.66668H8.66683V6.00001H7.3335V4.66668ZM7.3335 7.33334H8.66683V11.3333H7.3335V7.33334Z"
                ></path>
            </svg>
        </div>
        <div class="h-20">
            <div class="flex items-center rounded-md mt-4">
                <template v-for="(lang, index) in data" :key="lang.text">
                    <div
                        class="h-2 w-2 block first:rounded-l-sm last:rounded-r-sm border-r-[1px] last:border-none border-black"
                        v-bind:style="{ width: `calc(${lang.value}%)` }"
                        :class="'bg-' + lang.color"
                    ></div>
                </template>
            </div>
            <div class="grid grid-cols-2 mt-3">
                <div class="h-4 flex items-center text-xs mt-1" v-for="(lang, index) in data" :key="lang.text">
                    <span :class="'bg-' + lang.color" class="w-2 h-2 flex-shrink-0 mr-3"></span>
                    <p>
                        {{ lang.text }} <span>{{ lang.value }}%</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

export default {
    name: 'LanguagesBar',
    props: {
        data: {
            type: Object,
            required: true,
        },
    },

    mounted() {
        tippy('[data-tippy-content]')
    },
}
</script>
