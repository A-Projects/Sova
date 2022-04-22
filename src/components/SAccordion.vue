<template>
    <div class="accordion" :class="[
            { 'accordion-flush' : flush }]">
        <slot/>
    </div>
</template>

<script>
import {computed} from 'vue';
//import { v4 as uuidv4 } from 'uuid';

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
            activeItemKeys: []
        }
    },
    provide() {
        return {
            'activeItemKeys': computed(() => this.activeItemKeys),
            'toogleItemKey': this.toogleItemKey
        }
    },
    mounted() {
        if(this.activeItemKey)
            this.activeItemKeys.push(this.activeItemKey);
    },
    methods: {
        toogleItemKey(itemKey) {
            if (this.activeItemKeys.includes(itemKey))
                this.activeItemKeys = this.activeItemKeys.filter(x => x != itemKey);
            else
                this.alwaysOpen ? this.activeItemKeys.push(itemKey) : this.activeItemKeys = [ itemKey ]
        }
    }
}
</script>

<style scoped>

</style>