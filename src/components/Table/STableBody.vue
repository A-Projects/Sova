<template>
    <tbody :class="{ [`table-${color}`]: color }">
        <slot/>
    </tbody>
</template>

<script>
import { Color } from '../../types.js';
export default {
    name: "STableBody",
    props: {
        color: Color
    }
};
</script>

<style scoped>

</style>