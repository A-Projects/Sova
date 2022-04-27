<template>
    <div :class="[
        { 'btn-group': dropdown },
        { 'dropdown': dropdown },
        { direction }
    ]">
        <slot/>
    </div>
</template>

<script>
import {computed, reactive, ref} from 'vue';

export default {
    name: 'SDropdown',
    props: {
        dropdown: {
            type: Boolean,
            default: false,
            required: false,
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
        placement: {
            type: String,
            default: 'bottom-start',
            required: false,
        },
        visible: {
            type: Boolean,
            default: false,
            required: false,
        }
    },
    provide() {
        return {
            'toggleMenu': this.toggleMenu,
            'visible': computed(() => this.show),
            'setDropdownChild': this.setDropdownChild
        }
    },
    emits: [
        'hide',
        'show',
    ],
    data() {
        return {
            show: this.visible,
            dropdownRef: ref()
        }
    },
    watch: {
        visible: function (value) {
            this.show = value
        }
    },
    methods: {
        setDropdownChild(r) {
            this.dropdownRef = r
        },
        toggleMenu() {
            if(this.show)
                this.onHide()
            else
                this.onShow()
        },
        onShow() {
            this.show = true
            this.$emit('show')
            console.log("show")
        },
        onHide() {
            this.show = false
            this.$emit('hide')
            console.log("hide")
        },
        onEvent(event) {
            console.log(this.dropdownRef);
            if(this.dropdownRef && !this.dropdownRef.contains(event.target))
                this.onHide();
        }
    },
    mounted() {
        window.addEventListener('click', this.onEvent);
        window.addEventListener('keyup', this.onEvent);
    },
    unmounted() {
        window.removeEventListener('click', this.onEvent)
        window.removeEventListener('keyup', this.onEvent)
    }
}
</script>

<style scoped>

</style>