<template>
    <div class="row" :class="calcClass">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'SRow',
    props: {
        'cols-xs': Number,
        'cols-sm': Number,
        'cols-md': Number,
        'cols-lg': Number,
        'cols-xl': Number,
        'cols-xxl': Number,
        'gutter-xs': Number,
        'gutter-sm': Number,
        'gutter-md': Number,
        'gutter-lg': Number,
        'gutter-xl': Number,
        'gutter-xxl': Number,
        'gutter-x-xs': Number,
        'gutter-x-sm': Number,
        'gutter-x-md': Number,
        'gutter-x-lg': Number,
        'gutter-x-xl': Number,
        'gutter-x-xxl': Number,
        'gutter-y-xs': Number,
        'gutter-y-sm': Number,
        'gutter-y-md': Number,
        'gutter-y-lg': Number,
        'gutter-y-xl': Number,
        'gutter-y-xxl': Number
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
            'xs'
        ]

        breakpoints.forEach(breakpoint => {
            let value = this.$props[`cols-${breakpoint}`]
            if(value) {
                let postfix = (breakpoint === 'xs' ? '' : `-${breakpoint}`)
                if(typeof value === 'number')
                    this.calcClass.push(`row-cols${postfix}-${value}`)
            }
        })

        breakpoints.forEach(breakpoint => {
            let value = this.$props[`gutter-${breakpoint}`]
            if(value) {
                let postfix = (breakpoint === 'xs' ? '' : `-${breakpoint}`)
                if(typeof value === 'number')
                    this.calcClass.push(`g${postfix}-${value}`)
            }
        })

        breakpoints.forEach(breakpoint => {
            let value = this.$props[`gutter-y-${breakpoint}`]
            if(value) {
                let postfix = (breakpoint === 'xs' ? '' : `-${breakpoint}`)
                if(typeof value === 'number')
                    this.calcClass.push(`gx${postfix}-${value}`)
            }
        })

        breakpoints.forEach(breakpoint => {
            let value = this.$props[`gutter-x-${breakpoint}`]
            if(value) {
                let postfix = (breakpoint === 'xs' ? '' : `-${breakpoint}`)
                if(typeof value === 'number')
                    this.calcClass.push(`gy${postfix}-${value}`)
            }
        })
    }
};
</script>