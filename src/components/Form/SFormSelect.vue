<template>
    <s-form-wrapper v-if="label || feedback" class="form-check"
        :for-id="id"
        :label="label"
        :label-first="true"
        :feedback="feedback"
        :invalid="invalid"
        :valid="valid"
        :w-class="this.class"
        :w-style="this.style"
    >
        <select v-bind="$attrs" :id="id" class="form-select" :size="length" :value="modelValue" @change="onChange"
            :class="[
                {[`form-select-${size}`]: size},
                {'is-invalid': invalid},
                {'is-valid': valid}
            ]"
        >
            <option v-for="option in options" :value="option.value" :disabled="option.disabled">
                {{ option.label }}
            </option>
        </select>
    </s-form-wrapper>
    <select v-else v-bind="$attrs" :id="id" :style="this.style" class="form-select" :size="length" :value="modelValue" @change="onChange"
        :class="[
            {[`form-select-${size}`]: size},
            {'is-invalid': invalid},
            {'is-valid': valid}
        ]"
    >
        <option v-for="option in options" :value="option.value" :disabled="option.disabled">
            {{ option.label }}
        </option>
    </select>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
import SFormWrapper from './SFormWrapper.vue'

export default {
    name: "SFormSelect",
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
        label: String,
        valid: Boolean,
        invalid: Boolean,
        modelValue: String,
        /**
         * Список опций для выпадающего списка.
         * Передаются объекты с полями label, value, (необязательное поле: disabled)
         * Пример:
         *  :options="[{ label: 'Один', value: 'А' }, { label: 'Два', value: 'Б', disabled: true }]"
         */
        options: {
            type: Array,
            default: undefined,
            required: false,
        },
        length: Number,
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
            const selected = Array.from(event.target.options)
                .filter((option) => option.selected)
                .map((option) => option.value)

            const value = event.target.multiple ? selected : selected[0]

            this.$emit('change');
            this.$emit('update:modelValue', value)
        }
    }
};
</script>

<style scoped>

</style>