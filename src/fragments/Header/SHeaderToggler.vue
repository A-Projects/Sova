<template>
    <button type="button" class="btn btn-toggler" :class="[
        { 'btn-close-white': white },
        { 'disabled': disabled }
    ]" v-on:click="onClick">
    </button>
</template>

<script>
export default {
    name: 'SHeaderToggler',
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
        'toggle',
    ],
    methods: {
        onClick() {
            this.$emit('toggle')
        }
    }
};
</script>

<style scoped>
.btn-toggler {
    background: transparent url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' role='img'><path d='M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z'></path></svg>") center/1em auto no-repeat;
    width: 1em;
    height: 1em;
    font-size: 1.5rem;
}
</style>