<template>
    <s-form-wrapper v-if="label"
        :for-id="id"
        :label="label"
        :label-first="true"
        :w-class="this.class"
        :w-style="this.style"
    >
        <input v-bind="$attrs"  :id="id" type="range" class="form-range" :min="min" :max="max" :step="step" :value="modelValue" @change="onChange"/>
    </s-form-wrapper>
    <input v-else v-bind="$attrs" :id="id" :style="this.style" type="range" class="form-range" :min="min" :max="max" :step="step" :value="modelValue" @change="onChange"
        :class="this.class"
    />
</template>

<script>
import {v4 as uuidv4} from 'uuid'
import SFormWrapper from './SFormWrapper.vue'

export default {
    name: "SFormRange",
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
        max: Number,
        min: Number,
        modelValue: Number,
        step: Number,
        label: String,
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
            this.$emit('update:modelValue', event.target.value)
        },
    }
};
</script>

<style scoped>

</style>