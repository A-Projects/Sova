<template>
    <component
        :is="href || to ? (to ? 'router-link' : 'a') : tag"
        :type="tag === 'button' || tag === 'input' ? type : undefined"
        class="nav-link"
        :class="[
            { 'text-nowrap': nowrap },
            { 'active': active },
            { 'disabled': disabled } ]"
        :href="href"
        :to="to"
    >
        <slot/>
    </component>
</template>

<script>
export default {
    name: 'SNavLink',
    props: {
        tag: {
            type: String,
            default: 'a',
            required: false,
        },
        type: {
            type: String,
            default: undefined,
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
        nowrap: {
            type: Boolean,
            default: false,
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
    }
}
</script>

<style scoped>

</style>