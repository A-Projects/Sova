<template>
  <div role="group" :class="[
    [ vertical ? 'btn-group-vertical': 'btn-group'],
    { ['btn-group-' + size]: size }
  ]">
    <slot/>
  </div>
</template>

<script>
import {ButtonSize} from '../types.js'

export default {
  name: 'SButtonGroup',
  props: {
    vertical: {
      type: Boolean,
      default: false,
      required: false,
    },
    size: ButtonSize,
  }
}
</script>

<style scoped>

</style>