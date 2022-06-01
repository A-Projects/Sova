<template>
    <button type="button" class="btn btn-close" :class="[
        { 'btn-close-white': white },
        { 'disabled': disabled }
    ]" v-on:click="onClick"/>
</template>

<script>
export default {
    name: "SToastClose",
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
        'close',
    ],
    methods: {
        onClick() {
            this.$emit('close')
        }
    }
};
</script>

<style scoped>

</style>