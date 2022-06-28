<template>
    <component :is="tag">
        <slot/>
    </component>
</template>

<script>
export default {
    name: 'SHeaderBrand',
    props: {
        tag: {
            type: String,
            required: false,
            default: 'a',
        },
    },
};
</script>

<style scoped>

</style>