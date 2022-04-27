<template>
    <li class="breadcrumb-item" :class="{'active': active}">
        <a v-if="active">
            <slot/>
        </a>
        <a v-else :href="href">
            <slot/>
        </a>
    </li>
</template>

<script>
export default {
    name: 'SBreadcrumbItem',
    props: {
        active: {
            type: Boolean,
            required: false,
        },
        href: {
            type: String,
            default: undefined,
            required: false,
        }
    },
}
</script>

<style scoped>

</style>