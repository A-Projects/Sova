<template>
    <component :is="link || href || to ? (to ? 'router-link' : 'a') : 'button'"
        class="btn"
        :href="href"
        :to="to"
        :type="link || href || to ? undefined : type"
        :class="[
            [ shape ],
            [ color ? (outline ? 'btn-outline-' + color : 'btn-' + color) : undefined ],
            { ['btn-' + size]: size },
            { 'text-nowrap': nowrap },
            { 'active': active },
            { 'disabled': disabled } ]"
      >
        <slot/>
    </component>
</template>

<script>
import {Color, Shape} from '../types.js'

export default {
    name: 'SButton',
    props: {
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
        link: {
          type: Boolean,
          default: false,
          required: false,
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
        type: {
            type: String,
            default: 'button',
            validator: (x) => {
                return [
                    'button',
                    'submit',
                    'reset',
                ].includes(x)
            }
        },
        size: {
            type: String,
            default: undefined,
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