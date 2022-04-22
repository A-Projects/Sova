<template>
    <button class="accordion-button" :class="[{ 'collapsed': !active }]" :aria-expanded="active" type="button" @click="toggleActive">
        <slot/>
    </button>
</template>

<script>
export default {
    name: 'SAccordionButton',
    inject: ['active', 'toggleActive']
}
</script>

<style scoped>

</style>