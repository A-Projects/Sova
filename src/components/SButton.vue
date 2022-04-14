<template>
  <button class="btn" :class="[ 'btn-' + color, { 'btn-${size}': size }, { 'active': active, 'disabled': disabled } ]">
    <slot/>
  </button>
</template>

<script>
import { Color, Size } from '../types.js'

export default {
  name: "SButton",
  props: {
    active: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    color: Color,
    size: Size,
  }
}
</script>

<style scoped>

</style>