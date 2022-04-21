<template>
  <a :class="[
    [ 'link-' + color ],
    { ['text-' + nowrap]: nowrap },
    { 'disabled': disabled }
  ]">
    <slot/>
  </a>
</template>

<script>
import {Size, Color} from '../types.js'

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
    color: Color
  }
}
</script>

<style scoped>

</style>