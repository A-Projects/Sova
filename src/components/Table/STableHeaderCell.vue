<template>
    <th :class="{ [`table-${color}`]: color }">
        <slot/>
    </th>
</template>

<script>
import { Color } from '../../types.js';
export default {
    name: "STableHeaderCell",
    props: {
        color: Color,
    }
};
</script>

<style scoped>

</style>