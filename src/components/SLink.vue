<template>
  <a :class="[
    [ 'link-' + color ],
    { ['text-' + nowrap]: nowrap },
    { 'disabled': disabled }
  ]" :href="href">
    <slot/>
  </a>
</template>

<script>
import {Color} from '../types.js'

export default {
  name: 'SLink',
  props: {
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    nowrap: {
      type: Boolean,
      default: false,
      required: false,
    },
    href: {
      type: String,
      default: '#',
      required: false,
    },
    color: Color,
  }
}
</script>

<style scoped>

</style>