<template>
    <component :is="tag" class="card-header">
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SCardHeader",
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