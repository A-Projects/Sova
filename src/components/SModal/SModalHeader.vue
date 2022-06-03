<template>
    <span class="modal-header">
        <slot/>
        <s-btn-close v-if="dismissible" v-on:close="onClose"/>
    </span>
</template>

<script>
import SBtnClose from '../SBtnClose.vue';
export default {
    name: "SModalHeader",
    components: {SBtnClose},
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