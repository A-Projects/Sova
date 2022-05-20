<template>
    <span class="modal-header">
        <slot/>
        <s-close-button v-on:click="onClose"/>
    </span>
</template>

<script>
import SCloseButton from '../SCloseButton.vue';
export default {
    name: "SModalHeader",
    components: {SCloseButton},
    inject: ['onClose'],
    props: {
        closeButton: {
            type: Boolean,
            required: false,
            default: true,
        },
    },
};
</script>

<style scoped>

</style>