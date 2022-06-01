import {createPopper} from '@popperjs/core'
import {v4 as uuidv4} from 'uuid'

function constructTooltip(tooltip, el, options) {
    document.body.appendChild(tooltip)
    createPopper(el, tooltip, options)
    setTimeout(() => {
        tooltip.classList.add('show')
    }, 5)
}

function destructTooltip(tooltip) {
    tooltip.classList.remove('show')
    setTimeout(() => {
        document.body.removeChild(tooltip)
    }, 500)
}

export const STooltip = {
    name: 's-tooltip',
    mounted(el, binding) {
        const value = binding.value
        const content = typeof value === 'string' ? value : value.content ? value.content : ''
        const placement = value.placement ? value.placement : 'top'
        const offset = value.offset ? value.offset : [0, 0]
        const trigger = value.trigger ? value.trigger : 'hover'

        const options = {
            placement: placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: offset,
                    }
                }
            ]
        }

        binding.uuid = uuidv4()

        const tooltip = document.createElement('div')
        tooltip.id = binding.uuid
        tooltip.classList.add('tooltip', 'bs-tooltip-auto',  'fade')
        tooltip.innerHTML = `<div class="tooltip-arrow" data-popper-arrow></div>
                             <div class="tooltip-inner">${content}</div>`

        if(trigger.includes('click')) {
            el.addEventListener('click', () => {
                const popper = document.getElementById(tooltip.id)
                if (popper) {
                    destructTooltip(tooltip)
                } else {
                    constructTooltip(tooltip, el, options)
                }
            })
        }

        if (trigger.includes('hover')) {
            el.addEventListener('mouseenter', () => {
                constructTooltip(tooltip, el, options)
            })
            el.addEventListener('mouseleave', () => {
                destructTooltip(tooltip)
            })
        }

        if (trigger.includes('focus')) {
            el.addEventListener('focus', () => {
                constructTooltip(tooltip, el, options)
            })
            el.addEventListener('blur', () => {
                destructTooltip(tooltip)
            })
        }
    },
    beforeUnmount(binding) {
        if(binding.uuid) {
            document.getElementById(binding.uuid)?.remove()
        }
    },
}

