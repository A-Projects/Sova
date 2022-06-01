const animations = [
    'glow',
    'wave'
]

const sizes = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs'
]

export const SPlaceholder = {
    name: 's-placeholder',
    mounted(el, binding) {
        const value = binding.value

        if(animations.includes(value.animation))
            el.classList.add(`placeholder-${value.animation}`)
        else
            el.classList.add('placeholder')

        if(sizes.includes(value.size))
            el.classList.add(`placeholder-${value.size}`)

        if(value.col && typeof value.col === 'number')
            el.classList.add(`col-${value.col}`)
    }
}