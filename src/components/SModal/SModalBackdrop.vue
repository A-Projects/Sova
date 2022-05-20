<template>
    <transition
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave"
        @after-leave="onAfterLeave"
    >
        <div
            v-if="show"
            class="fade"
        >
            <slot/>
        </div>
    </transition>
</template>

<script>
export default {
    name: "SModalBackdrop",
    props: {
        visible: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
    data() {
        return {
            duration: 5,
            show: this.visible
        }
    },
    watch: {
        visible: function (value) {
            this.show = value
        }
    },
    methods: {
        onBeforeEnter(el) {
            el.classList.remove('d-none')
        },
        onEnter(el, done) {
            el.addEventListener('transitionend', () => {
                done();
            });

            setTimeout(() => {
                el.style.visibility = 'visible'
                el.classList.add('show')
            }, this.duration);
        },
        onLeave(el, done) {
            this.$emit('hide');
            el.addEventListener('transitionend', () => {
                done()
            })
            el.classList.remove('show')
        },
        onAfterLeave(el) {
            el.classList.add('d-none')
        }
    }
};
</script>

<style scoped>

</style>