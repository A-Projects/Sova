<template>
    <component
        ref="dropdownButtonRef"
        :is="tag"
        :type="tag == 'button' || tag == 'input' ? type : undefined"
        class="btn dropdown-toggle"
        :class="[
            [ shape ],
            { 'dropdown-toggle-split': split },
            [ outline ? 'btn-outline-' + color : 'btn-' + color ],
            { ['btn-' + size]: size },
            { 'text-nowrap': nowrap },
            { 'show': visible },
            { 'active': active },
            { 'disabled': disabled } ]"
        @click="toggleMenu"
    >
        <slot/>
    </component>
</template>

<script>
import {Color, Shape} from "../types.js";

export default {
    name: 'SDropdownToggle',
    inject: ['visible', 'toggleMenu', 'setDropdownButton'],
    props: {
        tag: {
            type: String,
            default: 'button',
            required: false,
        },
        type: {
            type: String,
            default: 'button',
            require: false,
        },
        outline: {
            type: Boolean,
            default: false,
            required: false,
        },
        nowrap: {
            type: Boolean,
            default: false,
            required: false,
        },
        split: {
            type: Boolean,
            required: false,
        },
        size: {
            type: String,
            default: undefined,
            validator: (x) => {
                return [
                    'sm',
                    'lg',
                ].includes(x)
            }
        },
        color: Color,
        shape: Shape,
        active: {
            type: Boolean,
            default: false,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
    },
    mounted() {
        this.setDropdownButton(this.$refs.dropdownButtonRef);
    }
}
</script>

<style scoped>

</style>