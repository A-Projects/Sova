<template>
    <component v-bind:is="tag" class="offcanvas-title">
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SOffcanvasTitle",
    props: {
        tag: {
            type: String,
            required: false,
            default: 'h5',
        },
    },
};
</script>

<style scoped>

</style>