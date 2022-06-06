<template xmlns="http://www.w3.org/1999/html">
    <input class="form-range" type="range" :min="min" :max="max" :steps="steps" :readonly="readonly" v-on:change="onChange"/>
</template>

<script>
export default {
    name: "SRange",
    props: {
        max: {
            type: Number,
            default: undefined,
            required: false,
        },
        min: {
            type: Number,
            default: undefined,
            required: false,
        },
        modelValue: {
            type: String,
            value: undefined,
            required: false,
        },
        steps: {
            type: Number,
            default: undefined,
            required: false,
        },
        readonly: {
            type: Boolean,
            required: false,
        },

    },
    emits: [
        'change',
        'update:modelValue',
    ],
    methods: {
        onChange(event) {
            this.$emit('change');
            this.$emit('update:modelValue', event.target.value)
        },
    }
};
</script>

<style scoped>

</style>