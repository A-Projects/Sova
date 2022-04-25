<template>
    <button type="button" class="btn btn-close" :class="[
        { 'btn-close-white': white },
        { 'disabled': disabled }
    ]" @click="onClick"/>

</template>

<script>
export default {
    name: 'SCloseButton',
    props: {
        disabled: {
            type: Boolean,
            default: false,
            required: false,
        },
        white: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    emits: [
        'click',
    ],
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>

</style>