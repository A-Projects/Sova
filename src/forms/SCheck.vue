<template>
    <div v-if="label" class="form-check"
        :class="[
            { 'form-check-inline': inline },
            { 'is-valid': typeof valid !== 'undefined' && valid },
            { 'is-invalid': typeof valid !== 'undefined' && !valid }
        ]"
    >
        <input :type="type" class="form-check-input" :indeterminate="indeterminate" v-bind:checked="modelValue" v-on:change="onChange"
            :class="[
                { 'is-valid': typeof valid !== 'undefined' && valid },
                { 'is-invalid': typeof valid !== 'undefined' && !valid }
            ]"
        />
        <label class="form-check-label">{{ label }}</label>
    </div>
    <input v-else :type="type" class="form-check-input" :indeterminate="indeterminate" v-bind:checked="modelValue" v-on:change="onChange"
           :class="[
                { 'is-valid': typeof valid !== 'undefined' && valid },
                { 'is-invalid': typeof valid !== 'undefined' && !valid }
            ]"
    />
</template>

<script>
// https://vuejs.org/guide/components/events.html#usage-with-v-model
export default {
    name: "SCheck",
    props: {
        indeterminate: {
            type: Boolean,
            default: false,
            required: false
        },
        inline: {
            type: Boolean,
            required: false,
        },
        label: {
            type: String,
            default: undefined,
            required: false,
        },
        type: {
            type: String,
            default: 'checkbox',
            required: false,
            validator: (x) => {
                return [
                    'checkbox',
                    'radio',
                ].includes(x)
            }
        },
        valid: {
            type: Boolean,
            default: undefined,
            required: false
        },
        modelValue: {
            type: Boolean,
            required: false
        },
    },
    emits: [
        'change',
        'update:modelValue',
    ],
    methods: {
        onChange(event) {
            this.$emit('change');
            this.$emit('update:modelValue', event.target.checked)
        }
    }
};
</script>

<style scoped>

</style>