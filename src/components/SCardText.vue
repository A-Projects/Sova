<template>
    <component :is="tag" class="card-text">
        <slot/>
    </component>
</template>

<script>
export default {
    name: 'SCardText',
    props: {
        tag: {
            type: String,
            required: false,
            default: 'p',
        }
    },
};
</script>

<style scoped>

</style>