<template>
    <button class="navbar-toggler">
        <slot v-if="$slots.default"/>
        <span v-else class="navbar-toggler-icon"/>
    </button>
</template>

<script>
export default {
    name: "SNavbarToggler"
};
</script>

<style scoped>

</style>