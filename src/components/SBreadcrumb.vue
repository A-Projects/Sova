<template>
    <nav :style="{'--bs-breadcrumb-divider': divider ? '\'' + divider + '\'' : undefined}">
        <ol class="breadcrumb">
            <slot/>
        </ol>
    </nav>
</template>

<script>
export default {
    name: 'SBreadcrumb',
    props: {
        divider: {
            type: String,
            default: undefined,
            required: false,
        }
    }
}
</script>

<style scoped>

</style>