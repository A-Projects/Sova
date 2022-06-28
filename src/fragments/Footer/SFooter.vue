<template>
    <footer class="footer"
        :class="{[`footer-${position}`]: position}"
    >
        <slot/>
    </footer>
</template>

<script>
export default {
    name: 'SFooter',
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
.footer {
    align-items: center;
    justify-content: center;
}

.footer-fixed {
    position: fixed;
}

.footer-sticky {
    position: sticky;
}
</style>