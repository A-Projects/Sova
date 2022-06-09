<template>
    <component :is="tag" class="input-group-text">
        <slot/>
    </component>
</template>

<script>
export default {
    name: 'SInputGroupText',
    props: {
        tag: {
            type: String,
            required: false,
            default: 'span',
        }
    },
};
</script>

<style scoped>

</style>