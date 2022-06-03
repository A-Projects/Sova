<template>
    <component
        :is="href || to ? (to ? 'router-link' : 'a') : tag"
        :type="tag == 'button' || tag == 'input' ? type : undefined"
        class="btn"
        :class="[
            [ shape ],
            [ color ? (outline ? 'btn-outline-' + color : 'btn-' + color) : undefined ],
            { ['btn-' + size]: size },
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
import {Color, Shape} from '../types.js'

export default {
    name: 'SBtn',
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
        outline: {
          type: Boolean,
          default: false,
          required: false,
        },
        nowrap: {
          type: Boolean,
          default: false,
          required: false,
        },
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'sm',
                    'lg',
                ].includes(x)
            }
        },
        shape: Shape,
        color: Color,
        active: {
            type: Boolean,
            default: false,
            required: false,
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false,
        }
    }
}
</script>

<style scoped>

</style>