<template>
  <div role="group" :class="[
    [ vertical ? 'btn-group-vertical': 'btn-group'],
    { ['btn-group-' + size]: size }
  ]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'SButtonGroup',
  props: {
    vertical: {
      type: Boolean,
      default: false,
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
  }
}
</script>

<style scoped>

</style>