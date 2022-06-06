<template>
    <div v-if="label">
        <s-label class="form-label" :for="id">{{ label }}</s-label>
        <input class="form-control form-control-color" :id="id" type="color" v-bind:value="modelValue" @change="onChange" @input="onInput"
            :class="[
                {[`form-control-${size}`]: size}
            ]"
        />
        Значение: {{ modelValue }}
    </div>
    <input v-else class="form-control form-control-color" :id="id" type="color" v-bind:value="modelValue" @change="onChange" @input="onInput"
        :class="[
            {[`form-control-${size}`]: size}
        ]"
    />
</template>

<script>
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
        modelValue: {
            type: String,
            default: undefined,
            require: false,
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
        label: {
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