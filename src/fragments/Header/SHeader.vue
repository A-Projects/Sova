<template>
    <header class="header" :class="{[`header-${position}`]: position}">
        <slot/>
    </header>
</template>

<script>
export default {
    name: 'SHeader',
    props: {
        position: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'fixed',
                    'sticky'
                ].includes(x)
            },
        },
    },
};
</script>

<style scoped>
.header {
    align-items: center;
    justify-content: center;
}

.header-fixed {
    position: fixed;
}

.header-sticky {
    position: sticky;
}
</style>