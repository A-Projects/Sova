<template>
    <input :id="id" :type="type" class="btn-check" :checked="modelValue" @change="onChange"
        :class="[
            {'is-invalid': invalid},
            {'is-valid': valid}
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
import {v4 as uuidv4} from 'uuid'
import {Color, Shape} from '../../types.js'

export default {
    name: "SFormBtnCheck",
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
        outline: Boolean,
        label: String,
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
        valid: Boolean,
        invalid: Boolean,
        modelValue: Boolean
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