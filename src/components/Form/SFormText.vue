<template>
    <component :is="tag" class="form-text">
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SFormText",
    props: {
        tag: {
            type: String,
            required: false,
            default: 'div',
        },
    },
};
</script>

<style scoped>

</style>