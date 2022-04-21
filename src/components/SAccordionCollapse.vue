<template>
    <transition name="fade">
        <div class="collapse accordion-collapse" :class="[{ 'show': active }]" v-if="active">
            <slot/>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'SAccordionCollapse',
    inject: ['active'],
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>