<template>
    <fieldset>
        <legend v-if="legend">{{ legend }}</legend>
        <slot/>
    </fieldset>
</template>

<script>
export default {
    name: 'SFieldset',
    props: {
        legend: String
    }
};
</script>

<style scoped>

</style>