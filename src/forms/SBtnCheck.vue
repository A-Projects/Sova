<template>
    <input :id="id" :type="type" class="btn-check" :indeterminate="indeterminate" v-bind:checked="modelValue" v-on:change="onChange"
           :class="[
                { 'is-valid': typeof valid !== 'undefined' && valid },
                { 'is-invalid': typeof valid !== 'undefined' && !valid }
            ]"
    />
    <label v-bind="$attrs" class="btn" :for="id"
        :class="[
            [shape],
            {['btn-' + size]: size},
            [outline ? `btn-outline-${color}`: `btn-${color}`]
        ]"
    >
        {{ label }}
    </label>
</template>

<script>
import {Color, Shape} from '../types.js'
import {v4 as uuidv4} from 'uuid'
export default {
    name: "SBtnCheck",
    inheritAttrs: false,
    props: {
        id: {
            type: String,
            default() {
                return uuidv4()
            },
            require: false
        },
        color: Color,
        shape: Shape,
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'sm',
                    'lg'
                ].includes(x)
            },
        },
        outline: {
            type: Boolean,
            default: false,
            required: false,
        },
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