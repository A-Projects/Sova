<template>
    <transition
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"

        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
    >
        <div
            v-show="visible"
            :class="[
                [ collapsing ? 'collapsing' : 'collapse'],
                { 'collapse-horizontal': horizontal },
                { 'show': show }]"
        >
            <slot/>
        </div>
    </transition>
</template>

<script>
export default {
    name: "SCollapse",
    props: {
        horizontal: {
            type: Boolean,
            default: false,
            required: false,
        },
        visible: {
            type: Boolean,
            required: false,
        },
    },
    emits: [
        'hide',
        'show',
    ],
    data() {
        return {
            duration: 5,
            collapsing: false,
            show: this.visible,
        }
    },
    methods: {
        onBeforeEnter(el) {
            this.collapsing = true;
        },
        onEnter(el, done) {
            this.$emit('show');
            el.addEventListener('transitionend', () => {
                done();
            });

            setTimeout(() => {
                if(this.horizontal)
                    el.style.width = `${el.scrollWidth}px`
                else
                    el.style.height = `${el.scrollHeight}px`
            }, this.duration);
        },
        onAfterEnter(el){
            el.style.removeProperty('height');
            this.collapsing = false;
            this.show = true;
        },
        onBeforeLeave(el) {
            el.style.height = `${el.scrollHeight}px`
            this.collapsing = true
            this.show = false
        },
        onLeave(el, done) {
            this.$emit('hide');
            el.addEventListener('transitionend', () => {
                done()
            })
            setTimeout(() => {
                if (this.horizontal)
                    el.style.width = '0px'
                else
                    el.style.height = '0px'
            }, this.duration)
        },
        onAfterLeave(el) {
            this.collapsing = false
        }
    }
};
</script>

<style scoped>

</style>