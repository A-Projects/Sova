<template>
    <transition
        @enter="onEnter"
        @leave="onLeave"
    >
        <div
             v-if="show"
             class="tab-pane fade"
             :class="[
                { 'active': show },
                { 'show': firstRender && show }
             ]"
        >
            <slot/>
        </div>
    </transition>
</template>

<script>
export default {
    name: "STabPane",
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
            show: this.visible,
            firstRender: true
        }
    },
    emits: [
        'hide',
        'show',
    ],
    watch: {
        visible: function (value) {
            this.show = value
        }
    },
    methods: {
        onEnter(el, done) {
            this.firstRender = false

            el.addEventListener('transitionend', () => {
                done()
            })

            setTimeout(() => {
                el.classList.add('show')
            }, this.duration)

            this.$emit('show')
        },
        onLeave(el, done) {
            this.firstRender = false

            this.$emit('hide')

            el.classList.remove('show')

            el.addEventListener('transitionend', () => {
                done()
            })
        }
    }
};
</script>

<style scoped>

</style>