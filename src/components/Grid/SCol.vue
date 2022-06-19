<template>
    <div :class="[calcClass.length ? calcClass : 'col']">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'SCol',
    props: {
        xs: [Boolean, Number, String],
        sm: [Boolean, Number, String],
        md: [Boolean, Number, String],
        lg: [Boolean, Number, String],
        xl: [Boolean, Number, String],
        xxl: [Boolean, Number, String],
        'order-xs': [Number, String],
        'order-sm': [Number, String],
        'order-md': [Number, String],
        'order-lg': [Number, String],
        'order-xl': [Number, String],
        'order-xxl': [Number, String],
        'offset-xs': Number,
        'offset-sm': Number,
        'offset-md': Number,
        'offset-lg': Number,
        'offset-xl': Number,
        'offset-xxl': Number
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
            let value = this.$props[breakpoint]
            if(value) {
                let postfix = (breakpoint === 'xs' ? '' : `-${breakpoint}`)
                if(typeof value === 'number' || typeof value === 'string')
                    this.calcClass.push(`col${postfix}-${value}`)

                if(typeof value === 'boolean')
                    this.calcClass.push(`col${postfix}`)
            }
        })

        breakpoints.forEach(breakpoint => {
            let value = this.$props[`order-${breakpoint}`]
            if(value) {
                let postfix = (breakpoint === 'xs' ? '' : `-${breakpoint}`)
                if(typeof value === 'number' || typeof value === 'string')
                    this.calcClass.push(`order${postfix}-${value}`)
            }
        })

        breakpoints.forEach(breakpoint => {
            let value = this.$props[`offset-${breakpoint}`]
            if(value) {
                let postfix = (breakpoint === 'xs' ? '' : `-${breakpoint}`)
                if(typeof value === 'number')
                    this.calcClass.push(`offset${postfix}-${value}`)
            }
        })

    }
};
</script>