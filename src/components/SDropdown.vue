<template>
    <div :class="[
        [ variant === 'nav-item' ? 'nav-item dropdown' : variant],
        [ direction ]
    ]">
        <slot/>
    </div>
</template>

<script>
import {computed} from 'vue';
import {Placement} from '../types.js'
import {createPopper} from '@popperjs/core'

export default {
    name: 'SDropdown',
    props: {
        variant: {
            type: String,
            default: 'btn-group',
            required: false,
            validator: (x) => {
                return [
                    'btn-group',
                    'dropdown',
                    'input-group',
                    'nav-item'
                ].includes(x)
            },
        },
        direction: {
            type: String,
            default: undefined,
            required: false,
            validator: (x) => {
                return [
                    'dropup',
                    'dropend',
                    'dropstart'
                ].includes(x)
            },
        },
        placement: Placement,
        visible: {
            type: Boolean,
            default: false,
            required: false,
        }
    },
    provide() {
        return {
            'toggleMenu': this.toggleMenu,
            'visible': computed(() => this.dropdownMenuShow),
            'setDropdownButton': this.setDropdownButton,
            'setDropdownMenu': this.setDropdownMenu,
            'dropdownVariant': this.variant
        }
    },
    emits: [
        'hide',
        'show',
    ],
    data() {
        return {
            dropdownMenuShow: this.visible,
            dropdownMenuPlacement: this.placement,
            dropdownButtonRef: undefined,
            dropdownMenuRef: undefined,
            popper: undefined
        }
    },
    watch: {
        visible: function (value) {
            this.dropdownMenuShow = value;
        }
    },
    methods: {
        setDropdownButton(dropdownButtonRef) {
            this.dropdownButtonRef = dropdownButtonRef;
        },
        setDropdownMenu(dropdownMenuRef) {
            this.dropdownMenuRef = dropdownMenuRef;
        },
        constructPopper() {
            console.debug(this.dropdownMenuPlacement);
            if(!this.popper && this.dropdownButtonRef && this.dropdownMenuRef) {
                this.popper = createPopper(this.dropdownButtonRef, this.dropdownMenuRef, {
                    placement: this.dropdownMenuPlacement,
                });
            }
        },
        destructPopper() {
            if (this.popper) {
                this.popper.destroy();
                this.popper = undefined;
            }
        },
        toggleMenu() {
            if(this.dropdownMenuShow)
                this.onHide();
            else
                this.onShow();
        },
        onShow() {
            this.dropdownMenuShow = true;
            this.$emit('show');
            this.constructPopper();
        },
        onHide() {
            this.dropdownMenuShow = false;
            this.$emit('hide');
            this.destructPopper();
        },
        onEvent(event) {
            if(this.dropdownButtonRef && !this.dropdownButtonRef.contains(event.target))
                this.onHide();
        }
    },
    mounted() {
        window.addEventListener('click', this.onEvent);
        window.addEventListener('keyup', this.onEvent);

        if (this.direction === 'dropup') {
            this.dropdownMenuPlacement = 'top-start';
        }
        if (this.direction === 'dropend') {
            this.dropdownMenuPlacement = 'right-start';
        }
        if (this.direction === 'dropstart') {
            this.dropdownMenuPlacement = 'left-start';
        }
    },
    unmounted() {
        window.removeEventListener('click', this.onEvent);
        window.removeEventListener('keyup', this.onEvent);
        this.destructPopper();
    }
}
</script>

<style scoped>

</style>