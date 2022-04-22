<template>
    <s-accordion-collapse>
        <div class="accordion-body">
            <slot/>
        </div>
    </s-accordion-collapse>
</template>

<script>
import SAccordionCollapse from './SAccordionCollapse.vue';
export default {
    name: 'SAccordionBody',
    components: {SAccordionCollapse}
}
</script>

<style scoped>

</style>