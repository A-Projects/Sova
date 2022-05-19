<template>
    <component
        :is="numbered ? 'ol' : tag"
        class="list-group"
        :class="[
            { 'list-group-flush': flush },
            { 'list-group-numbered': numbered },
            { ['list-group-' + layout]: layout } ]"
    >
        <slot/>
    </component>
</template>

<script>
export default {
    name: "SListGroup",
    props: {
        tag: {
            type: String,
            required: false,
            default: 'ul',
        },
        flush: {
            type: Boolean,
            default: false,
            required: false,
        },
        numbered: {
            type: Boolean,
            default: false,
            required: false,
        },
        layout: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'horizontal',
                    'horizontal-sm',
                    'horizontal-md',
                    'horizontal-lg',
                    'horizontal-xl',
                    'horizontal-xxl',
                ].includes(x)
            },
        },
    },
};
</script>

<style scoped>

</style>