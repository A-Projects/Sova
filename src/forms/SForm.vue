<template>
    <form :class="[
        {'was-validated': typeof valid !== 'undefined' && valid},
        {'form-floating': floating}
    ]">
        <slot/>
    </form>
</template>

<script>
export default {
    name: "SForm",
    props: {
        floating: Boolean,
        valid: {
            type: Boolean,
            default: undefined,
            required: false
        },
    }
};
</script>

<style scoped>

</style>