<template>
  <component v-bind:is="link ? 'a' : 'button'" type="button" class="btn" :href="href" :class="[
    [ outline ? 'btn-outline-' + color : 'btn-' + color ],
    { ['btn-' + size]: size },
    { ['text-' + nowrap]: nowrap },
    { 'active': active },
    { 'disabled': disabled },
    [ shape ]
  ]">
    <slot/>
  </component>
</template>

<script>
import {Color, Shape} from '../types.js'

export default {
    name: 'SButton',
    props: {
        active: {
          type: Boolean,
          default: false,
          required: false,
        },
        disabled: {
          type: Boolean,
          default: false,
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
        color: Color,
        shape: Shape
    }
}
</script>

<style scoped>

</style>