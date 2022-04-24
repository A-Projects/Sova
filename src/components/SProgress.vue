<template>
    <div class="progress">
        <s-progress-bar>
            <slot/>
        </s-progress-bar>
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
        },
        ...SProgressBar.props
    },
}
</script>

<style scoped>

</style>