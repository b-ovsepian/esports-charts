<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            {{ selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div
                v-for="(option, i) of options"
                :key="i"
                @click=";(selected = option), (open = false), $emit('input', option)"
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: this.default ? this.default : this.options.length > 0 ? this.options[0] : null,
            open: false,
        }
    },
    mounted() {
        this.$emit('input', this.selected)
    },
}
</script>

<style scoped>
.custom-select {
    @apply relative w-32 text-left outline-none h-8;
}

.custom-select .selected {
    @apply rounded-md cursor-pointer py-1 px-3 bg-card hover:bg-gray-700 select-none;
}

.custom-select .selected:after {
    @apply absolute top-1/2 right-2 content-[""] w-0 h-0;
    border: 5px solid transparent;
    border-color: #fff transparent transparent transparent;
}

.custom-select .items {
    @apply text-white overflow-hidden absolute z-10 bg-gray-700 right-0 w-48 rounded-md py-2 px-4 top-[calc(100%_+_1rem)];
}

.custom-select .items div {
    @apply cursor-pointer text-white select-none mb-2 last:mb-0 hover:bg-gray-500;
}

.selectHide {
    @apply hidden;
}
</style>
