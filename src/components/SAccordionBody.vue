<template>
    <s-accordion-collapse :visible="active">
        <div class="accordion-body">
            <slot/>
        </div>
    </s-accordion-collapse>
</template>

<script>
import SAccordionCollapse from './SAccordionCollapse.vue';
export default {
    name: 'SAccordionBody',
    components: {SAccordionCollapse},
    inject: ['active']
}
</script>

<style scoped>

</style>