<template>
    <ul
        class="dropdown-menu"
        :class="[
            {'dropdown-menu-dark': dark},
            {'show': visible} ]"
    >
        <slot/>
    </ul>
</template>

<script>
export default {
    name: 'SDropdownMenu',
    inject: ['visible'],
    props: {
        tag: {
            type: String,
            default: 'div',
            required: false,
        },
        dark: {
            type: Boolean,
            required: false,
        },
    },
}
</script>

<style scoped>

</style>