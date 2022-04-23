<template>
    <component v-bind:is="tag" :class="[
        [ 'spinner-' + variant ],
        { ['spinner-' + variant + '-' + size] : size },
        { ['text-' + color] : color }
    ]" role="status" />
</template>

<script>
import {TextColor} from '../types.js';

export default {
    name: 'SSpinner',
    props: {
        tag: {
            type: String,
            default: 'div',
            required: false
        },
        variant: {
            type: String,
            default: 'border',
            required: false,
            validator: (x) => {
                return [
                    'border',
                    'grow'
                ].includes(x)
            }
        },
        size: {
            type: String,
            default: undefined,
            validator: (x) => {
                return [
                    'sm'
                ].includes(x)
            }
        },
        color: TextColor
    }
}
</script>

<style scoped>

</style>