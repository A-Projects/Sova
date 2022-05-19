<template>
    <component :is="tag" class="card-subtitle">
        <slot/>
    </component>
</template>

<script>
export default {
    name: 'SCardSubtitle',
    props: {
        tag: {
            type: String,
            required: false,
            default: 'h6',
        },
    },
};
</script>

<style scoped>

</style>