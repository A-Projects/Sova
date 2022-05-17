<template>
    <a
        :is="to ? 'router-link' : 'a'"
        :class="[
            [ 'link-' + color ],
            { 'text-nowrap': nowrap },
            { 'active': active },
            { 'disabled': disabled } ]"
        :href="href"
        :to="to"
    >
        <slot/>
    </a>
</template>

<script>
import {Color} from '../types.js'

export default {
    name: 'SLink',
    props: {
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
        color: Color,
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