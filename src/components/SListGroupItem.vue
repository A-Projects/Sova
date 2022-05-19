<template>
    <component
        :is="href || to ? (to ? 'router-link' : 'a') : tag"
        class="list-group-item"
        :class="[
            { ['list-group-item-' + color]: color },
            { 'list-group-item-action': tag === 'a' || tag === 'button' || href || to },
            { 'active': active },
            { 'disabled': disabled } ]"
    >
        <slot/>
    </component>
</template>

<script>
import {Color} from '../types.js';

export default {
    name: "SListGroupItem",
    props: {
        color: Color,
        tag: {
            type: String,
            required: false,
            default: 'li',
        },
        href: {
            type: String,
            default: undefined,
            required: false,
        },
        to: {
            type: String || Object,
            default: undefined,
            required: false,
        },
        active: {
            type: Boolean,
            default: false,
            required: false,
        },
        disabled: {
            type: Boolean,
            default: false,
            required: false,
        }
    }
};
</script>

<style scoped>

</style>