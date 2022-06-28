<template>
    <div :class="[vertical ? 'border-left' : 'border-top']"></div>
</template>

<script>
export default {
    name: 'SDivider',
    props: {
        vertical: Boolean,
    }
};
</script>

<style scoped>

</style>