<template>
    <component v-bind:is="tag" class="dropdown-header">
        <slot/>
    </component>
</template>

<script>
export default {
    name: 'SDropdownHeader',
    props: {
        tag: {
            type: String,
            default: 'h6',
            required: false
        },
    }
}
</script>

<style scoped>

</style>