<template>
    <s-form-wrapper v-if="label || feedback || inline" class="form-check form-switch"
        :for-id="id"
        :label="label"
        :label-first="false"
        :inline="inline"
        :feedback="feedback"
        :invalid="invalid"
        :valid="valid"
        :w-class="this.class"
        :w-style="this.style"
    >
        <input v-bind="$attrs" :id="id" type="checkbox" role="switch" class="form-check-input" :checked="modelValue" @change="onChange"
            :class="[
                {'is-invalid': invalid},
                {'is-valid': valid}
            ]"
        />
    </s-form-wrapper>
    <input v-else v-bind="$attrs" :id="id" :style="this.style" type="checkbox" role="switch" class="form-check-input" :checked="modelValue" @change="onChange"
        :class="[
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
    name: "SFormSwitch",
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
        inline: Boolean,
        label: String,
        valid: Boolean,
        invalid: Boolean,
        modelValue: Boolean,
        feedback: String,
        class: String,
        style: String,
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