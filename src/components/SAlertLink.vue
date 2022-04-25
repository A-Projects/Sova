<template>
    <a class="alert-link" :class="[
        { ['text-' + nowrap]: nowrap },
    ]">
        <slot/>
    </a>
</template>

<script>
export default {
    name: 'SAlertLink',
    props: {
        nowrap: {
            type: Boolean,
            default: false,
            required: false,
        }
    }
}
</script>

<style scoped>

</style>