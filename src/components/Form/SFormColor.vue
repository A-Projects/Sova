<template>
    <s-form-wrapper v-if="label"
        :forId="id"
        :label="label"
        :label-first="true"
        :w-class="this.class"
        :w-style="this.style"
    >
        <input v-bind="$attrs" :id="id" type="color" class="form-control form-control-color" :value="modelValue" @change="onChange"
            :class="[
                {[`form-control-${size}`]: size}
            ]"
        />
    </s-form-wrapper>
    <input v-else v-bind="$attrs" :id="id" :style="this.style"  type="color" class="form-control form-control-color" :value="modelValue" @change="onChange"
        :class="[
            {[`form-control-${size}`]: size},
            this.class
        ]"
    />
</template>

<script>
import {v4 as uuidv4} from 'uuid'
import SFormWrapper from './SFormWrapper.vue'

export default {
    name: "SFormColor",
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
        }
    }
};
</script>

<style scoped>

</style>