<template>
    <component
        :is="tag"
        class="nav"
        :class="[
            { ['nav-' + layout]: layout },
            { ['nav-' + variant]: variant },
        ]"
    >
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SNav",
    props: {
        tag: {
            type: String,
            required: false,
            default: 'ul',
        },
        layout: {
            type: String,
            required: false,
            default: undefined,
            validator: (x) => {
                return [
                    'fill',
                    'justified'
                ].includes(x)
            },
        },
        variant: {
            type: String,
            required: false,
            default: undefined,
            validator: (x) => {
                return [
                    'tabs',
                    'pills'
                ].includes(x)
            },
        },
    },
};
</script>

<style scoped>

</style>