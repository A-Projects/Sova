<template>
    <div class="accordion" :class="[
            { 'accordion-flush' : flush }]">
        <slot/>
    </div>
</template>

<script>
import {computed, ref} from 'vue';

export default {
    name: 'SAccordion',
    props: {
        alwaysOpen: {
            type: Boolean,
            default: false,
            require: false
        },
        activeItemKey: {
            type: [Number, String],
            default: undefined,
            require: false,
        },
        flush: {
            type: Boolean,
            default: false,
            require: false
        }
    },
    data() {
        return {
            activeKey: this.activeItemKey
        }
    },
    provide() {
        return {
            'alwaysOpen': this.alwaysOpen,
            'activeKey': computed(() => this.activeKey),
            'setActiveKey': this.setActiveKey
        }
    },
    methods: {
        setActiveKey(itemKey) {
            this.activeKey = itemKey;
        }
    }
}
</script>

<style scoped>

</style>