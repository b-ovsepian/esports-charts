<template>
    <header class="flex items-center mb-3 justify-between">
        <div class="download-block__button flex items-center">
            <div class="download-block__icon">
                <svg
                    class="fill-current download-block__icon-custom"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7.3335 1.36667V8.66667H14.6335C14.2995 12.0353 11.4568 14.6667 8.00016 14.6667C4.31816 14.6667 1.3335 11.682 1.3335 8C1.3335 4.54333 3.96483 1.70067 7.3335 1.36667ZM8.66683 0.362C12.3688 0.68 15.3195 3.63133 15.6382 7.33333H8.66683V0.362Z"
                    ></path>
                </svg>
                <svg
                    class="fill-current download-block__icon-download"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.66683 6.66667H12.0002L8.00016 10.6667L4.00016 6.66667H7.3335V2H8.66683V6.66667ZM2.66683 12.6667H13.3335V8H14.6668V13.3333C14.6668 13.5101 14.5966 13.6797 14.4716 13.8047C14.3465 13.9298 14.177 14 14.0002 14H2.00016C1.82335 14 1.65378 13.9298 1.52876 13.8047C1.40373 13.6797 1.3335 13.5101 1.3335 13.3333V8H2.66683V12.6667Z"
                    ></path>
                </svg>
            </div>
            <div class="download-block__button-text">
                <span class="px-3 text-sm font-bold w-max whitespace-nowrap text-default">
                    <button class="btn link-primary">Login</button>
                    to download as .PNG
                </span>
            </div>
            <h2 class="text-white font-bold">Stats by month</h2>
        </div>
        <CustomSelect :options="['by ACCV', 'by PV']" :default="'by ACCV'" class="select" />
    </header>
</template>

<script>
import CustomSelect from './CustomSelect.vue'

export default {
    components: {
        CustomSelect,
    },
}
</script>

<style scoped>
.download-block__icon {
    @apply relative bg-card p-4 mr-3 rounded-md text-white w-8 h-8 z-10;
}

.download-block__icon-custom,
.download-block__icon-download {
    @apply absolute ease-linear duration-150;
}

.download-block__icon-custom {
    @apply top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
}

.download-block__icon-download {
    @apply top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0;
}

.card:hover .download-block__icon-download {
    @apply opacity-100 top-1/2;
}
.card:hover .download-block__icon-custom {
    @apply opacity-0 top-full;
}

.download-block__button {
    @apply relative;
}

.download-block__button-text {
    @apply absolute h-8 w-8 top-[1px] left-0 flex items-center pl-8 text-white bg-card rounded-md overflow-hidden ease-linear duration-150 opacity-0;
}

.download-block__icon:hover + .download-block__button-text {
    @apply w-[calc(100%_+_4.5rem)] overflow-visible opacity-100;
}
</style>
