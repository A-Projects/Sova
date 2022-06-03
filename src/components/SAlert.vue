<template>
    <transition
            name="fade"
            duration="200"
            enter-active-class="fade"
            enter-to-class="fade show"
            leave-active-class="fade">
        <div v-if="show"
                class="alert"
                :class="[
                    {[`alert-${color}`]: color},
                    {'alert-dismissible': dismissible},
                ]">
            <slot/>
            <s-btn-close v-if="dismissible" v-on:close="onClose"/>
        </div>
    </transition>
</template>

<script>
import {Color} from "../types.js";
import SBtnClose from "./SBtnClose.vue";

export default {
    name: 'SAlert',
    components: {SBtnClose},
    props: {
        color: Color,
        dismissible: {
            type: Boolean,
            default: false,
            required: false,
        },
        visible: {
            type: Boolean,
            default: true,
            required: false,
        }
    },
    emits: [
        'close'
    ],
    data() {
        return {
            show: this.visible
        }
    },
    watch: {
        visible: function (value) {
            this.show = value
        }
    },
    methods: {
        onClose() {
            this.show = false
            this.$emit('close')
        }
    }
}
</script>

<style scoped>

</style>