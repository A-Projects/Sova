<template>
    <div class="accordion-item">
        <slot/>
    </div>
</template>

<script>
import {computed} from 'vue';
import {v4 as uuidv4} from 'uuid';

export default {
    name: 'SAccordionItem',
    props: {
        itemKey: {
            type: [Number, String],
            default() {
                return uuidv4()
            },
            require: false,
        },
    },
    inject: ['activeItemKeys', 'toogleItemKey'],
    computed: {
        active() {
            return this.activeItemKeys.includes(this.itemKey)
        }
    },
    provide() {
        return {
            'active': computed(() => this.active),
            'toggleActive': this.toggleActive
        }
    },
    methods: {
        toggleActive() {
            this.toogleItemKey(this.itemKey);
        }
    }
}
</script>

<style scoped>

</style>