<template>
    <component :is="tag"
        :class="[
            {[`invalid-${tooltip ? 'tooltip' : 'feedback'}`]: invalid},
            {[`valid-${tooltip ? 'tooltip' : 'feedback'}`]: valid}
        ]"
    >
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SFormFeedback",
    props: {
        tag: {
            type: String,
            required: false,
            default: 'div',
        },
        tooltip: Boolean,
        invalid: Boolean,
        valid: Boolean
    },
};
</script>

<style scoped>

</style>