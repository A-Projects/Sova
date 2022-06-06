<template>
    <component :is="tag"
        :class="[
            {[`valid-${tooltip ? 'tooltip' : 'feedback'}`]: typeof valid !== 'undefined' && valid},
            {[`invalid-${tooltip ? 'tooltip' : 'feedback'}`]: typeof valid !== 'undefined' && !valid}
        ]"
    >
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SFeedback",
    props: {
        tag: {
            type: String,
            required: false,
            default: 'div',
        },
        tooltip: Boolean,
        valid: {
            type: Boolean,
            default: undefined,
            required: false
        },
    },
};
</script>

<style scoped>

</style>