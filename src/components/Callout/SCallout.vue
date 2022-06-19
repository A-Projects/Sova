<template>
    <div class="callout" :class="{[`callout-${color}`]: color}">
        <slot/>
    </div>
</template>

<script>
import {Color} from '../../types.js'
export default {
    name: 'SCallout',
    props: {
        color: Color
    },
};
</script>

<style scoped>

</style>