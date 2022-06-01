<template>
    <span class="modal-header">
        <slot/>
        <s-close-button v-if="dismissible" v-on:close="onClose"/>
    </span>
</template>

<script>
import SCloseButton from '../SCloseButton.vue';
export default {
    name: "SModalHeader",
    components: {SCloseButton},
    props: {
        dismissible: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    inject: ['onClose'],
};
</script>

<style scoped>

</style>