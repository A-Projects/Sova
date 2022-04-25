<template>
    <component v-bind:is="tag" :style="[ {width: width + 'rem'}, {height: height + 'rem'} ]" :class="[
        [ 'spinner-' + variant ],
        { ['spinner-' + variant + '-' + size] : size },
        { ['text-' + color] : color }
    ]"/>
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
        grow: {
            type: Boolean,
            default: false,
            required: false,
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
        width: {
            type: Number,
            required: false,
            default: undefined,
        },
        height: {
            type: Number,
            required: false,
            default: undefined,
        },
        color: TextColor
    },
    data() {
        return {
            variant: this.grow ? 'grow' : 'border',
        }
    }
}
</script>

<style scoped>

</style>