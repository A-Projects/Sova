<template>
  <component component v-bind:is="tag" :class="[
    [ 'link-' + color ],
    { 'text-nowrap': nowrap },
    { 'active': active },
    { 'disabled': disabled }
  ]" :href="href">
    <slot/>
  </component>
</template>

<script>
import {Color} from '../types.js'

export default {
    name: 'SLink',
    props: {
        tag: {
            type: String,
            default: 'a',
            required: false,
        },
        href: {
            type: String,
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