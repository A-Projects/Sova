<template>
    <component :is="href || to ? (to ? 'router-link' : 'a') : tag"
        class="page-link"
        :class="{ 'text-nowrap': nowrap }"
        :href="href"
        :to="to"
    >
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SPaginationLink",
    props: {
        tag: {
            type: String,
            default: 'a',
            required: false,
        },
        href: {
            type: String,
            default: undefined,
            required: false,
        },
        to: {
            type: String || Object,
            default: undefined,
            required: false,
        },
        nowrap: {
            type: Boolean,
            default: false,
            required: false,
        },
    }
};
</script>

<style scoped>

</style>