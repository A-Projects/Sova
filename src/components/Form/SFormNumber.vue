<template>
    <s-form-wrapper v-if="label || feedback"
        :for-id="id"
        :label="label"
        :label-first="true"
        :feedback="feedback"
        :invalid="invalid"
        :valid="valid"
        :w-class="this.class"
        :w-style="this.style"
    >
        <input v-bind="$attrs" :id="id" type="number" :placeholder="placeholder" :min="min" :max="max" :step="step" :value="modelValue" @change="onChange" @input="onInput"
            :class="[
                [plaintext ? 'form-control-plaintext' : 'form-control'],
                {[`form-control-${size}`]: size},
                {'is-invalid': invalid},
                {'is-valid': valid}
            ]"
        />
    </s-form-wrapper>
    <input v-else v-bind="$attrs" :style="this.style" :id="id" type="number" :min="min" :max="max" :step="step" :placeholder="placeholder" :value="modelValue" @change="onChange" @input="onInput"
        :class="[
            [plaintext ? 'form-control-plaintext' : 'form-control'],
            {[`form-control-${size}`]: size},
            {'is-invalid': invalid},
            {'is-valid': valid},
            this.class
        ]"
    />
</template>

<script>
import {v4 as uuidv4} from 'uuid'
import SFormWrapper from './SFormWrapper.vue'

export default {
    name: "SFormNumber",
    components: {SFormWrapper},
    inheritAttrs: false,
    props: {
        id: {
            type: String,
            default() {
                return uuidv4()
            },
            require: false
        },
        modelValue: String,
        plaintext: Boolean,
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
        placeholder: String,
        feedback: String,
        label: String,
        invalid: Boolean,
        valid: Boolean,
        class: String,
        style: String,
        max: Number,
        min: Number,
        step: Number,
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