<template>
    <div class="toast-container p-3" style="z-index:100"
         :class="[
            { 'position-fixed': placement },
            { 'top-0': placement && placement.includes('top') },
            { 'top-50 translate-middle-y': placement && placement.includes('middle') },
            { 'bottom-0': placement && placement.includes('bottom') },
            { 'start-0': placement && placement.includes('start') },
            { 'start-50 translate-middle-x': placement && placement.includes('center') },
            { 'end-0': placement && placement.includes('end') },
         ]"
    >
        <slot/>
    </div>
</template>

<script>
export default {
    name: "SToastContainer",
    props: {
        placement: {
            type: String,
            default: undefined,
            require: false,
            validator: (x) => {
                return [
                    'top-start',
                    'top-center',
                    'top-end',
                    'middle-start',
                    'middle-center',
                    'middle-end',
                    'bottom-start',
                    'bottom-center',
                    'bottom-end',
                ].includes(x)
            },
        },
    },
};
</script>

<style scoped>

</style>