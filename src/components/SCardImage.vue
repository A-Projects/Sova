<template>
    <component
        :is="tag"
        :class="[
            { ['card-img-' + orientation]: orientation }
        ]"
    >
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SCardImage",
    props: {
        tag: {
            type: String,
            required: false,
            default: 'img',
        },
        orientation: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'top',
                    'bottom'
                ].includes(x)
            },
        },
    },
};
</script>

<style scoped>

</style>