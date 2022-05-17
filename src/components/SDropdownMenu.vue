<template>
    <ul
        ref="dropdownMenuRef"
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
    inject: ['visible', 'setDropdownMenu'],
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
    mounted() {
        this.setDropdownMenu(this.$refs.dropdownMenuRef);
    }
}
</script>

<style scoped>

</style>