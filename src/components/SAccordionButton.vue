<template>
    <button class="accordion-button" :class="[{ 'collapsed': !active }]" :aria-expanded="active" type="button" @click="setActive">
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'SAccordionButton',
    inject: ['active', 'setActive']
}
</script>

<style scoped>

</style>