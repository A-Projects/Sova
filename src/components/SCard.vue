<template>
    <div
        class="card"
        :class="[
            { ['bg-' + color]: color },
            { ['text-' + textColor]: textColor } ]"
    >
        <slot/>
    </div>
</template>

<script>
import {Color, TextColor} from '../types.js';

export default {
    name: "SCard",
    props: {
        color: Color,
        textColor: TextColor,
    },
};
</script>

<style scoped>

</style>