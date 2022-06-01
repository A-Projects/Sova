<template>
    <div class="toast-header">
        <slot/>
        <s-toast-close v-if="dismissible" v-on:close="onClose"/>
    </div>
</template>

<script>
import SToastClose from './SToastClose.vue';
export default {
    name: "SToastHeader",
    components: {SToastClose},
    props: {
        dismissible: {
            type: Boolean,
            require: false,
            default: false,
        },
    },
    inject: ['onClose'],
};
</script>

<style scoped>

</style>