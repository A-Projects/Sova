<template>
    <div
        :class="[
            {'form-floating': floating},
            {'form-check-inline': inline},
            wClass
        ]"
        :style="wStyle"
    >
        <s-form-label v-if="label && labelFirst" :for="forId">{{ label }}</s-form-label>
        <slot/>
        <s-form-label v-if="label && !labelFirst" :for="forId">{{ label }}</s-form-label>
        <s-form-feedback v-if="feedback && (invalid || valid)" :invalid="invalid" :valid="valid" >
            {{ feedback }}
        </s-form-feedback>
    </div>
</template>

<script>
import SFormLabel from './SFormLabel.vue'
import SFormFeedback from './SFormFeedback.vue'

export default {
    name: "SFormWrapper",
    components: {SFormLabel, SFormFeedback},
    props: {
        forId: String,
        feedback: String,
        floating: Boolean,
        inline: Boolean,
        label: String,
        labelFirst: Boolean,
        invalid: Boolean,
        valid: Boolean,
        wClass: String,
        wStyle: String
    }
};
</script>
