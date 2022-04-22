<template>
    <transition
            @before-enter="onBeforeEnter"
            @enter="onEnter"
            @after-enter="onAfterEnter"

            @before-leave="onBeforeLeave"
            @leave="onLeave"
            @after-leave="onAfterLeave"
    >
        <div v-show="active" class="accordion-collapse" :class="[
                [ collapsing ? 'collapsing' : 'collapse'],
                { 'show': show }]">
            <slot/>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'SAccordionCollapse',
    inject: ['active'],
    data() {
        return {
            duration: 5,
            collapsing: false,
            show: this.active,
        }
    },
    methods: {
        onBeforeEnter(el) {
            this.collapsing = true;
        },
        onEnter(el, done) {
            el.addEventListener('transitionend', () => {
                done();
            });

            setTimeout(() => {
                el.style.height = `${el.scrollHeight}px`;
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
            el.addEventListener('transitionend', () => {
                done()
            })
            setTimeout(() => {
                el.style.height = '0px'
            }, this.duration)
        },
        onAfterLeave(el) {
            this.collapsing = false
        }
    }
}
</script>

<style scoped>

</style>