<template>
    <div :class="[calcClass.length ? calcClass : 'container']">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'SContainer',
    props: {
        xs: Boolean,
        sm: Boolean,
        md: Boolean,
        lg: Boolean,
        xl: Boolean,
        xxl: Boolean,
        fluid: Boolean
    },
    data() {
        return {
            calcClass: []
        }
    },
    created() {
        const breakpoints = [
            'xxl',
            'xl',
            'lg',
            'md',
            'sm',
            'xs',
            'fluid'
        ]

        breakpoints.forEach(breakpoint => {
            if(this.$props[breakpoint]) {
                let postfix = (breakpoint === 'xs' ? '' : `-${breakpoint}`)
                this.calcClass.push(`container${postfix}`)
            }
        })
    }
};
</script>