<template>
    <s-form-wrapper v-if="label || feedback || floating"
        :for-id="id"
        :label="label"
        :label-first="true"
        :feedback="feedback"
        :invalid="invalid"
        :valid="valid"
        :w-class="this.class"
        :w-style="this.style"
    >
        <textarea v-bind="$attrs" :id="id" ::placeholder="placeholder" :value="modelValue" @change="onChange" @input="onInput"
            :class="[
                [plaintext ? 'form-control-plaintext' : 'form-control'],
                {'is-invalid': invalid},
                {'is-valid': valid}
            ]"
        />
    </s-form-wrapper>
    <textarea v-else v-bind="$attrs" :style="this.style" :id="id" :placeholder="placeholder" :value="modelValue" @change="onChange" @input="onInput"
        :class="[
            [plaintext ? 'form-control-plaintext' : 'form-control'],
            {'is-invalid': invalid},
            {'is-valid': valid},
            this.class
        ]"
    />
</template>

<script>
import {v4 as uuidv4} from 'uuid'
import SFormWrapper from '../Form/SFormWrapper.vue'

export default {
    name: "SInputTextarea",
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
        placeholder: String,
        feedback: String,
        label: String,
        invalid: Boolean,
        valid: Boolean,
        class: String,
        style: String,
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