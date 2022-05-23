<template>
    <nav>
        <ul class="pagination"
            :class="[
                {[`justify-content-${align}`]: align},
                {[`pagination-${size}`]: size}
            ]"
        >
            <slot/>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "SPagination",
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
        size: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'sm',
                    'lg'
                ].includes(value)
            },
        },
    },
};
</script>

<style scoped>

</style>