<template>
    <component v-bind:is="tag" class="navbar"
        v-bind:class="[
            { [`bg-${color}`]: color },
            { [`navbar-${colorScheme}`]: colorScheme },
            { [typeof expand === 'boolean' ? 'navbar-expand' : `navbar-expand-${expand}`]: expand },
            { placement }
        ]"
    >
        <slot/>
    </component>
</template>

<script>
import {Color} from '../../types.js';

export default {
    name: "SNavbar",
    props: {
        color: Color,
        colorScheme: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'dark',
                    'light'
                ].includes(x)
            },
        },
        tag: {
            type: String,
            default: 'nav',
            required: false,
        },
        expand: {
            type: [Boolean, String],
            default: undefined,
            required: false,
            validator: (x) => {
                return (
                    typeof value === 'boolean' ||
                    ['sm', 'md', 'lg', 'xl', 'xxl'].includes(x)
                )
            },
        },
        placement: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'fixed-top',
                    'fixed-bottom',
                    'sticky-top'
                ].includes(x)
            },
        },
    },
};
</script>

<style scoped>

</style>