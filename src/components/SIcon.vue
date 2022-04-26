<template>
    <svg class="bi" :width="size" :height="size" fill="currentColor"
         :class="[
            { ['text-' + color] : color }
         ]" viewBox="0 0 512 512">
        <use :xlink:href="`${svgSet}#${icon}`"/>
    </svg>
</template>

<script>
import BootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg';
import {Color} from "../types.js";

export default {
    name: 'SIcon',
    props: {
        icon: {
            type: String,
            required: true,
        },
        color: Color,
        size: {
            type: Number,
            default: 24,
            require: true,
        }
    },
    computed: {
        svgSet () {
            return BootstrapIcons;
        },
    }
}
</script>

<style lang="scss">

</style>