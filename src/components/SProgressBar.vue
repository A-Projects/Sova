<template>
    <div class="progress-bar" :class="[
        { 'progress-bar-striped': striped },
        { 'progress-bar-animated': animated }
    ]"  :style="{ width : value + '%' }" role="progressbar">
        <slot/>
    </div>
</template>

<script>
import {Color} from '../types.js';

export default {
    name: 'SProgressBar',
    props: {
        animated: {
            type: Boolean,
            default: false,
            required: false,
        },
        striped: {
            type: Boolean,
            default: false,
            require: false
        },
        color: Color,
        value: {
            type: Number,
            default: 25,
            required: false
        }
    }
}
</script>

<style scoped>

</style>