<template>
    <component :is="tag" class="modal-title">
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SModalTitle",
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