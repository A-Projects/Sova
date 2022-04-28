<template>
    <component
        :is="tag"
        class="dropdown-item-text"
    >
        <slot/>
    </component>
</template>

<script>
export default {
    name: 'SDropdownText',
    props: {
        tag: {
            type: String,
            default: 'span',
            required: false
        },
    }
}
</script>

<style scoped>

</style>