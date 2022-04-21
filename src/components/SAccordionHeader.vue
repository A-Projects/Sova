<template>
    <h2 class="accordion-header">
        <s-accordion-button>
            <slot/>
        </s-accordion-button>
    </h2>
</template>

<script>
import SAccordionButton from './SAccordionButton.vue';
export default {
    name: 'SAccordionHeader',
    components: {SAccordionButton}
}
</script>

<style scoped>

</style>