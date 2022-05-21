<template>
    <component
        v-bind:is="href || to ? (to ? 'router-link' : 'a') : tag"
        class="navbar-brand"
        v-bind:href="href"
        v-bind:to="to"
    >
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SNavbarBrand",
    props: {
        tag: {
            type: String,
            default: 'span',
            required: false,
        },
        href: {
            type: String,
            default: undefined,
            required: false,
        },
        to: {
            type: String || Object,
            default: undefined,
            required: false,
        },
    },
};
</script>

<style scoped>

</style>