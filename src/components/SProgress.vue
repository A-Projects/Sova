<template>
    <div class="progress" :style="{ height: height + 'px' }">
        <slot/>
    </div>
</template>

<script>
import SProgressBar from './SProgressBar.vue';
export default {
    name: 'SProgress',
    components: {SProgressBar},
    props: {
        height: {
            type: Number,
            default: undefined,
            required: false,
        }
    }
}
</script>

<style scoped>

</style>