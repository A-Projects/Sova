<template>
    <tr :class="[
            { [`align-${align}`]: align },
            { [`table-${color}`]: color },
            { 'table-active': active }
        ]"
    >
        <slot/>
    </tr>
</template>

<script>
import { Color } from '../../types.js';
export default {
    name: "STableRow",
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
        color: Color,
        active: {
            type: Boolean,
            required: false,
        }
    }
};
</script>

<style scoped>

</style>