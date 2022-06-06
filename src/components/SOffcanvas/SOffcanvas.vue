<template>
    <transition
        @enter="onEnter"
        @after-enter="onAfterEnter"

        @leave="onLeave"
        @after-leave="onAfterLeave"

        v-bind="$attrs"
    >
        <div ref="offcanvasRef"
             v-if="show"
             class="offcanvas"
             :class="{ [`offcanvas-${placement}`]: placement }"
        >
            <slot/>
        </div>
    </transition>
    <s-backdrop v-if="backdrop" class="offcanvas-backdrop" :visible="show"/>
</template>

<script>
import SBackdrop from '../SBackdrop.vue';
export default {
    name: "SOffcanvas",
    components: {SBackdrop},
    inheritAttrs: false,
    props: {
        backdrop: {
            type: Boolean,
            default: false,
            require: false,
        },
        keyboard: {
            type: Boolean,
            default: true,
            require: false,
        },
        placement: {
            type: String,
            default: undefined,
            require: true,
            validator: (x) => {
                return [
                    'start',
                    'end',
                    'top',
                    'bottom'
                ].includes(x)
            },
        },
        scroll: {
            type: Boolean,
            default: false,
            required: false,
        },
        visible: {
            type: Boolean,
            default: true,
            require: false,
        },
    },
    data() {
        return {
            duration: 5,
            show: this.visible
        }
    },
    emits: [
        'hide',
        'show',
    ],
    watch: {
        visible: function (value) {
            this.show = value

            if (this.visible) {
                if (!this.scroll) {
                    document.body.style.overflow = 'hidden'
                    document.body.style.paddingRight = '0px'
                }
                return
            }

            if (!this.scroll) {
                document.body.style.removeProperty('overflow')
                document.body.style.removeProperty('padding-right')
            }
        }
    },
    methods: {
        onEnter(el, done) {
            this.$emit('show')
            el.addEventListener('transitionend', () => {
                done()
            })
            setTimeout(() => {
                el.style.visibility = 'visible'
                el.classList.add('show')
            }, this.duration)
        },
        onAfterEnter(el, done) {
            window.addEventListener('mousedown', this.onMouseDown)
            window.addEventListener('keyup', this.onKeyUp)
        },
        onLeave(el, done) {
            el.addEventListener('transitionend', () => {
                done()
            })
            window.removeEventListener('mousedown', this.onMouseDown)
            window.removeEventListener('keyup', this.onKeyUp)
            el.classList.remove('show')
        },
        onAfterLeave(el) {
            el.style.visibility = 'hidden'
        },
        onClose () {
            this.$emit('hide')
            this.show = false
        },
        onKeyUp (event) {
            if (this.$refs.offcanvasRef && !this.$refs.offcanvasRef.contains(event.target)) {
                if (event.key === 'Escape' && this.keyboard && this.backdrop) {
                    return this.onClose()
                }
            }
        },
        onMouseDown (event) {
            window.addEventListener('mouseup', () => this.onMouseUp(event), { once: true })
        },
        onMouseUp (event) {
            if (this.$refs.offcanvasRef.value && !this.$refs.offcanvasRef.value.contains(event.target)) {
                this.backdrop && this.onClose()
            }
        }
    }
};
</script>

<style scoped>

</style>