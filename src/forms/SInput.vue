<template>
    <div v-if="floating" class="form-floating">
        <input :id="id" :type="type" :value="modelValue" @change="onChange" @input="onInput"
               :class="[
                [plaintext ? 'form-control-plaintext' : 'form-control'],
                {[`form-control-${size}`]: size},
                {[valid ? 'is-valid': 'is-invalid'] : typeof valid === 'boolean'}
            ]"
        />
        <s-label :for="id">{{ label }}</s-label>
        <div v-if="feedback" :class="{[valid ? 'valid-feedback': 'invalid-feedback'] : typeof valid === 'boolean'}">
            {{ feedback }}
        </div>
    </div>
    <div v-else-if="!floating && label">
        <s-label class="form-label" :for="id">{{ label }}</s-label>
        <input :id="id" :type="type" :value="modelValue" @change="onChange" @input="onInput"
            :class="[
                [plaintext ? 'form-control-plaintext' : 'form-control'],
                {[`form-control-${size}`]: size},
                {[valid ? 'is-valid': 'is-invalid'] : typeof valid === 'boolean'},
            ]"
        />
        <div v-if="feedback" :class="{[valid ? 'valid-feedback': 'invalid-feedback'] : typeof valid === 'boolean'}">
            {{ feedback }}
        </div>
    </div>
    <div v-else-if="!floating && !label && feedback">
        <input :id="id" :type="type" :value="modelValue" @change="onChange" @input="onInput"
               :class="[
                    [plaintext ? 'form-control-plaintext' : 'form-control'],
                    {[`form-control-${size}`]: size},
                    {[valid ? 'is-valid': 'is-invalid'] : typeof valid === 'boolean'},
                ]"
        />
        <div :class="{[valid ? 'valid-feedback': 'invalid-feedback'] : typeof valid === 'boolean'}">
            {{ feedback }}
        </div>
    </div>
    <input v-else :id="id" :type="type" :value="modelValue" @change="onChange" @input="onInput"
        :class="[
            [plaintext ? 'form-control-plaintext' : 'form-control'],
            {[`form-control-${size}`]: size},
            {[valid ? 'is-valid': 'is-invalid'] : typeof valid === 'boolean'},
        ]"
    />
</template>

<script>
// https://vuejs.org/guide/components/events.html#usage-with-v-model
import {v4 as uuidv4} from 'uuid'
export default {
    name: "SInputText",
    props: {
        id: {
            type: String,
            default() {
                return uuidv4()
            },
            require: false
        },
        type: {
            type: String,
            default: 'text',
            require: false,
            validator: (x) => {
                return [
                    'text',
                    'email'
                ].includes(x)
            },
        },
        modelValue: {
            type: String,
            default: undefined,
            require: false,
        },
        plaintext: {
            type: Boolean,
            required: false,
        },
        size: {
            type: String,
            default: undefined,
            require: false,
            validator: (x) => {
                return [
                    'sm',
                    'lg'
                ].includes(x)
            },
        },
        valid: {
            type: Boolean,
            default: undefined,
            required: false
        },
        floating: {
            type: Boolean,
            required: false,
        },
        label: {
            type: String,
            default: undefined,
            required: false,
        },
        feedback: {
            type: String,
            default: undefined,
            required: false,
        }
    },
    emits: [
        'change',
        'input',
        'update:modelValue',
    ],
    methods: {
        onChange(event) {
            this.$emit('change');
            this.$emit('update:modelValue', event.target.value)
        },
        onInput(event) {
            this.$emit('input');
            this.$emit('update:modelValue', event.target.value)
        }
    }
};
</script>

<style scoped>

</style>