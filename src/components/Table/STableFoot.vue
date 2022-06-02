<template>
    <tfoot :class="{ [`table-${color}`]: color }">
        <slot/>
    </tfoot>
</template>

<script>
import { Color } from '../../types.js';
export default {
    name: "STableFoot",
    props: {
        color: Color
    }
};
</script>

<style scoped>

</style>