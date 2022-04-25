<template>
    <component v-bind:is="tag" class:="alert-heading">
        <slot/>
    </component>
</template>

<script>
export default {
    name: 'SAlertHeading',
    props: {
        tag: {
            type: String,
            default: 'h4',
            required: false
        },
    }
}
</script>

<style scoped>

</style>