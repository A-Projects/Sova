<template>
    <component :is="tag" class="card-title">
        <slot/>
    </component>
</template>

<script>
export default {
    name: 'SCardTitle',
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