<template>
    <component v-bind:is="tag" class="navbar-nav">
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SNavbarNav",
    props: {
        tag: {
            type: String,
            required: false,
            default: 'ul',
        },
    },
};
</script>

<style scoped>

</style>