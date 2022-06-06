<template>
    <transition
        @enter="onEnter"
        @after-enter="onAfterEnter"

        @leave="onLeave"
        @after-leave="onAfterLeave"

        v-bind="$attrs"
    >
        <div ref="modalRef"
            v-if="show"
            class="modal"
            :class="[
                { 'fade': transition }]"
        >
            <div
                class="modal-dialog"
                :class="[
                    { 'modal-dialog-centered': alignment === 'center' },
                    { ['modal-fullscreen-' + fullscreen + '-down'] : fullscreen && typeof fullscreen === 'string' },
                    { ['modal-dialog-scrollable']: scrollable },
                    { ['modal-'+ size]: size }]"
                role="dialog"
            >
                <div ref="modalContentRef"
                    class="modal-content"
                     :class="[
                        { [ contentClassName ] : contentClassName }]"
                >
                    <slot/>
                </div>
            </div>
        </div>
    </transition>
    <s-backdrop v-if="backdrop" class="modal-backdrop" :visible="show"/>
</template>

<script>
import SBackdrop from '../SBackdrop.vue';
export default {
    name: "SModal",
    components: {SBackdrop},
    inheritAttrs: false,
    props: {
        alignment: {
            default: 'top',
            required: false,
            validator: (x) => {
                return [
                    'top',
                    'center'
                ].includes(x)
            },
        },
        backdrop: {
            type: [Boolean, String],
            default: true,
            require: false,
        },
        contentClassName: {
            type: String,
            default: undefined,
            required: false,
        },
        fullscreen: {
            type: [Boolean, String],
            default: undefined,
            required: false,
            validator: (x) => {
                if (typeof x == 'boolean') {
                    return true
                }

                if (typeof x == 'string') {
                    return [
                        'sm',
                        'md',
                        'lg',
                        'xl',
                        'xxl'
                    ].includes(x)
                }

                return false
            },
        },
        keyboard: {
            type: Boolean,
            default: true,
            required: false,
        },
        scrollable: {
            type: Boolean,
            required: false,
        },
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'sm',
                    'lg',
                    'xl'
                ].includes(x)
            },
        },
        transition: {
            type: Boolean,
            default: true,
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
          show: this.visible
      }
    },
    emits: [
        'close',
        'close-prevented',
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
                done();
            });

            document.body.classList.add('modal-open')
            el.style.display = 'block'

            setTimeout(() => {
                el.classList.add('show')
            }, this.duration);

            this.$emit('show');
        },
        onAfterEnter(el){
            window.addEventListener('mousedown', this.onMouseDown)
            window.addEventListener('keyup', this.onKeyUp)
        },
        onLeave(el, done) {
            el.addEventListener('transitionend', () => {
                done()
            })

            document.body.classList.remove('modal-open')
            el.classList.remove('show')
        },
        onAfterLeave(el) {
            window.removeEventListener('mousedown', this.onMouseDown)
            window.removeEventListener('keyup', this.onKeyUp)
            el.style.display = 'none'
        },
        onClose() {
            this.$emit('close')
            this.show = false
        },
        onKeyUp(event) {
            if(this.$refs.dropdownButtonRef && !this.$refs.dropdownButtonRef.contains(event.target))
                this.onHide();

            if (this.$refs.modalContentRef && !this.$refs.modalContentRef.contains(event.target)) {
                if (this.backdrop !== 'static' && event.key === 'Escape' && this.keyboard) {
                    this.onClose()
                }
                if (this.backdrop === 'static') {
                    this.$refs.modalRef.classList.add('modal-static')
                    this.$emit('close-prevented')
                    setTimeout(() => {
                        this.$refs.modalRef.classList.remove('modal-static')
                    }, 300)
                }
            }
        },
        onMouseDown(event) {
            window.addEventListener('mouseup', () => this.onMouseUp(event), { once: true })
        },
        onMouseUp(event) {
            if (this.$refs.modalContentRef && !this.$refs.modalContentRef.contains(event.target)) {
                if (this.backdrop !== 'static') {
                    this.onClose()
                }
                if (this.backdrop === 'static') {
                    this.$refs.modalRef.classList.add('modal-static')
                    setTimeout(() => {
                        this.$refs.modalRef.classList.remove('modal-static')
                    }, 300)
                }
            }
        }

    }
};
</script>

<style scoped>

</style>