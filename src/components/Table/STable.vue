<template>
    <div v-if="responsive"
        :class="[
            { ['table-responsive']: typeof responsive === 'boolean' },
            { [`table-responsive-${responsive}`]: typeof responsive === 'string' },
        ]">
        <table v-bind="$attrs" class="table"
            :class="[
                { [`align-${align}`]: align },
                { [`caption-${caption}`]: caption },
                { [`border-${borderColor}`]: borderColor },
                { 'table-bordered': bordered },
                { 'table-borderless': borderless },
                { [`table-${color}`]: color },
                { 'table-hover': hover },
                { 'table-sm': small },
                { 'table-striped': striped }
            ]">
            <slot/>
        </table>
    </div>
    <table v-else v-bind="$attrs" class="table"
        :class="[
            { [`align-${align}`]: align },
            { [`caption-${caption}`]: caption },
            { [`border-${borderColor}`]: borderColor },
            { 'table-bordered': bordered },
            { 'table-borderless': borderless },
            { [`table-${color}`]: color },
            { 'table-hover': hover },
            { 'table-sm': small },
            { 'table-striped': striped }
        ]">
        <slot/>
    </table>
</template>

<script>
import { Color } from '../../types.js';
export default {
    name: "STable",
    inheritAttrs: false,
    props: {
        align: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'bottom',
                    'middle',
                    'top'
                ].includes(x)
            },
        },
        borderColor: Color,
        bordered: {
            type: Boolean,
            required: false,
            default: false
        },
        borderless: {
            type: Boolean,
            required: false,
            default: false
        },
        caption: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return x === 'top'
            },
        },
        color: Color,
        hover: {
            type: Boolean,
            required: false,
            default: false
        },
        responsive: {
            type: [Boolean, String],
            default: undefined,
            required: false,
            validator: (x) => {
                if (typeof x == 'boolean') {
                    return true
                }

                if (typeof x == 'string') {
                    return [
                        'sm',
                        'md',
                        'lg',
                        'xl',
                        'xxl'
                    ].includes(x)
                }

                return false
            },
        },
        small: {
            type: Boolean,
            required: false,
            default: false
        },
        striped: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style scoped>

</style>