<template>
    <div class="accordion-item" :test="activeKey">
        <slot/>
    </div>
</template>

<script>
import {computed} from 'vue';

export default {
    name: 'SAccordionItem',
    props: {
        itemKey: {
            type: [Number, String],
            default: undefined,
            require: false,
        },
    },
    inject: ['alwaysOpen', 'activeKey', 'setActiveKey'],
    provide() {
        return {
            'active': computed(() => {
                return this.activeKey == this.itemKey || this.alwaysOpen ? true : false;
            }),
            'setActive': this.setActive
        }
    },
    methods: {
        setActive() {
            this.setActiveKey(this.itemKey);
        }
    }

}
</script>

<style scoped>

</style>