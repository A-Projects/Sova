<template>
    <li>
        <component
            :is="href || to ? (to ? 'router-link' : 'a') : tag"
            :type="tag == 'button' || tag == 'input' ? type : undefined"
            class="dropdown-item"
            :class="[
                { 'active': active },
                { 'disabled': disabled } ]"
            :href="href"
            :to="to"
        >
            <slot/>
        </component>
    </li>
</template>

<script>
export default {
    name: 'SDropdownItem',
    props: {
        tag: {
            type: String,
            default: 'button',
            required: false,
        },
        type: {
            type: String,
            default: 'button',
            require: false,
        },
        href: {
            type: String,
            default: undefined,
            required: false,
        },
        to: {
            type: String || Object,
            default: undefined,
            required: false,
        },
        active: {
            type: Boolean,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
    },
}
</script>

<style scoped>

</style>