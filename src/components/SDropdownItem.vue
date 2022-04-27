<template>
    <li>
        <component v-bind:is="link ? 'a' : 'button'" :type="[ 'button' ? link : undefined]" :href="href" class="dropdown-item" :class="[
            { 'btn': !link},
            { 'text-nowrap': nowrap },
            { 'active': active },
            { 'disabled': disabled }
          ]">
            <slot/>
        </component>
    </li>
</template>

<script>
export default {
    name: 'SDropdownItem',
    props: {
        href: {
            type: String,
            default: undefined,
            required: false,
        },
        link: {
            type: Boolean,
            default: false,
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
    },
}
</script>

<style scoped>

</style>