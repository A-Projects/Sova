<template>
    <li class="page-item" :class="[ { 'active': active }, { 'disabled': disabled } ]">
        <slot/>
    </li>
</template>

<script>
export default {
    name: "SPaginationItem",
    props: {
        active: {
            type: Boolean,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
    }
};
</script>

<style scoped>

</style>