<template>
    <img :class="[
        { [`float-${align}`]: align && (align === 'start' || align === 'end') },
        { 'd-block mx-auto': align && align === 'center' },
        { 'img-fluid': fluid },
        { rounded: rounded },
        { 'img-thumbnail': thumbnail }
    ]"/>
</template>

<script>
export default {
    name: "SImg",
    props: {
        align: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'start',
                    'center',
                    'end'
                ].includes(x)
            },
        },
        fluid: {
            type: Boolean,
            required: false,
        },
        rounded: {
            type: Boolean,
            required: false,
        },
        thumbnail: {
            type: Boolean,
            required: false,
        }
    },
};
</script>

<style scoped>

</style>