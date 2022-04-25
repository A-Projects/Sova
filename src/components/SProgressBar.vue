<template>
    <div class="progress-bar" :style="{ width: value + '%' }" :class="[
        [ 'bg-' + color ],
        { 'progress-bar-striped': striped },
        { 'progress-bar-animated': animated }
    ]">
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
            required: false
        },
        striped: {
            type: Boolean,
            default: false,
            required: false,
        },
        value: {
            type: Number,
            required: false,
            default: 0,
        },
        color: Color,
    }
}
</script>

<style scoped>

</style>