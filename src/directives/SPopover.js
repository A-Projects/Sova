import {createPopper} from '@popperjs/core'
import {v4 as uuidv4} from 'uuid'

function constructPopover(popover, el, options) {
    document.body.appendChild(popover)
    createPopper(el, popover, options)
    setTimeout(() => {
        popover.classList.add('show')
    }, 5)
}

function destructPopover(popover) {
    popover.classList.remove('show')
    setTimeout(() => {
        document.body.removeChild(popover)
    }, 500)
}

export const SPopover = {
    name: 's-popover',
    mounted(el, binding) {
        const value = binding.value
        const title = value.title ? value.title : ''
        const content = typeof value === 'string' ? value : value.content ? value.content : ''
        const placement = value.placement ? value.placement : 'top'
        const offset = value.offset ? value.offset : [0, 8]
        const trigger = value.trigger ? value.trigger : 'click'

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

        const popover = document.createElement('div')
        popover.id = binding.uuid
        popover.classList.add('popover', 'bs-popover-auto', 'fade')
        if(title) {
            popover.innerHTML = `<div class="popover-arrow" data-popper-arrow></div>
                             <div class="popover-header">${title}</div>
                             <div class="popover-body">${content}</div>`
        }else {
            popover.innerHTML = `<div class="popover-arrow" data-popper-arrow></div>
                             <div class="popover-body">${content}</div>`
        }

        if(trigger.includes('click')) {
            el.addEventListener('click', () => {
                const popper = document.getElementById(popover.id)
                if (popper) {
                    destructPopover(popover)
                } else {
                    constructPopover(popover, el, options)
                }
            })
        }

        if (trigger.includes('hover')) {
            el.addEventListener('mouseenter', () => {
                constructPopover(popover, el, options)
            })
            el.addEventListener('mouseleave', () => {
                destructPopover(popover)
            })
        }

        if (trigger.includes('focus')) {
            el.addEventListener('focus', () => {
                constructPopover(popover, el, options)
            })
            el.addEventListener('blur', () => {
                destructPopover(popover)
            })
        }
    },
    beforeUnmount(binding) {
        if(binding.uuid) {
            document.getElementById(binding.uuid)?.remove()
        }
    },
}

