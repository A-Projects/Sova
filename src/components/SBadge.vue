<template>
    <component v-bind:is="tag" class="badge" :class="[
        { 'position-absolute translate-middle': position },
        { 'top-0': position && position.includes('top') },
        { 'top-100': position && position.includes('bottom') },
        { 'start-0': position && position.includes('left') },
        { 'start-100': position && position.includes('right') },
        { ['bg-' + color] : color },
        { ['text-' + textColor] : textColor },
        { [ shape ]: shape }
    ]">

        <slot/>
    </component>
</template>

<script>
import {Color, Shape, TextColor} from "../types.js";

export default {
    name: 'SBadge',
    props: {
        tag: {
            type: String,
            default: 'span',
            required: false
        },
        position: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'top-left',
                    'top-right',
                    'bottom-left',
                    'bottom-right'
                ].includes(x)
            },
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
        shape: Shape,
        color: Color,
        textColor: TextColor,
    }
}
</script>

<style scoped>

</style>