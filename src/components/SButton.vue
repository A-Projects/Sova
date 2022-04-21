<template>
  <component type="button" v-bind:is="link ? 'a' : 'button'" class="btn" :class="[
    [ outline ? 'btn-outline-' + color : 'btn-' + color],
    { ['btn-' + size]: size },
    { ['text-' + nowrap]: nowrap },
    { 'active': active },
    { 'disabled': disabled }
  ]">
    <slot/>
  </component>
</template>

<script>
import {ButtonSize, Color} from '../types.js'

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
    size: ButtonSize,
    color: Color
  }
}
</script>

<style scoped>

</style>