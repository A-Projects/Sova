<template>
    <component
        v-bind:is="tag"
        v-bind:class="[fluid ? 'container-fluid' : size ? `container-${size}` : 'container']"
    >
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SContainer",
    props: {
        tag: {
            type: String,
            default: 'div',
            required: false,
        },
        size: {
            type: [String],
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'sm',
                    'md',
                    'lg',
                    'xl',
                    'xxl'
                ].includes(x)
            },
        },
        fluid: {
            type: Boolean,
            default: false,
            required: false,
        },
    },
};
</script>

<style scoped>

</style>