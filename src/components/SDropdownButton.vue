<template>
    <button ref="dropdownButtonRef" type="button" class="btn" :class="[
        { 'dropdown-toggle': !fake },
        { 'dropdown-toggle-split': split && !fake },
        [ outline ? 'btn-outline-' + color : 'btn-' + color ],
        { ['btn-' + size]: size },
        { 'text-nowrap': nowrap },
        { 'show': visible },
        { 'active': active },
        { 'disabled': disabled },
        [ shape ]
      ]" @click="toggleMenu">
        <slot/>
    </button>
</template>

<script>
import {Color, Shape} from "../types.js";

export default {
    name: 'SDropdownButton',
    inject: ['visible', 'toggleMenu', 'setDropdownChild'],
    props: {
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
        fake: {
            type: Boolean,
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
        this.setDropdownChild(this.$refs.dropdownButtonRef);
    }
}
</script>

<style scoped>

</style>