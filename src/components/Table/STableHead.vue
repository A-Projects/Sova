<template>
    <thead :class="{ [`table-${color}`]: color }">
        <slot/>
    </thead>
</template>

<script>
import { Color } from '../../types.js';
export default {
    name: "STableHead",
    props: {
        color: Color,
    }
};
</script>

<style scoped>

</style>