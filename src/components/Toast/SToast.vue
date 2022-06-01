<template>
    <transition appear
        @enter="onEnter"
        @before-leave="onBeforeLeave"

        @leave="onLeave"
        @after-leave="onAfterLeave"
    >
        <div v-if="show" ref="toastRef" class="toast fade" aria-live="assertive" aria-atomic="true"
             :class="[
                { [`bg-${color}`]: color }
             ]"
        >
            <slot/>
        </div>
    </transition>
</template>

<script>
import { Color } from '../../types.js';
export default {
    name: "SToast",
    props: {
        autohide: {
            type: Boolean,
            default: true,
            required: false,
        },
        color: Color,
        delay: {
            type: Number,
            default: 5000,
            required: false,
        },
        index: {
            type: Number,
            default: undefined,
            required: false,
        },
        visible: {
            type: Boolean,
            default: true,
            required: false,
        }
    },
    data() {
        return {
            duration: 5,
            show: this.visible,
            timeout: 0
        }
    },
    emits: [
        'close',
        'show',
    ],
    provide() {
        return {
            'onClose': this.onClose
        }
    },
    watch: {
        visible: function (value) {
            this.show = value
        }
    },
    methods: {
        onEnter(el, done) {
            el.addEventListener('transitionend', () => {
                done()
            })

            setTimeout(() => {
                el.classList.add('show')
            }, this.duration)

            if (this.index) {
                this.$emit('show', this.index)
            } else {
                this.$emit('show')
            }
        },
        onBeforeLeave(el) {
            el.classList.remove('show')
        },
        onLeave(el, done) {
            el.addEventListener('transitionend', () => {
                done()
            })

            el.classList.remove('show')
        },
        onAfterLeave(el) {
            el.classList.add('hide')

            if (this.index) {
                this.$emit('close', this.index)
            } else {
                this.$emit('close')
            }
        },
        onClose() {
            this.show = false
        }
    },
    mounted() {
        if(this.autohide){
            this.timeout = window.setTimeout(() => {
                this.onClose()
            }, this.delay)
        }
    }
};
</script>

<style scoped>

</style>