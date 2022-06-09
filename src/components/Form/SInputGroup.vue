<template>
    <div class="input-group" :class="{[`input-group-${size}`]: size}">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'SInputGroup',
    props: {
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'sm',
                    'lg'
                ].includes(x)
            },
        },
    },
};
</script>

<style scoped>

</style>