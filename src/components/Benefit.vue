<template>
    <div class="each-benefit">
        <div class="icon-wrapper">
            <div class="inner">
                <benefit-icon class="benefit-icon" />
            </div>
        </div>
        <div class="details-wrapper">
            <div class="inner">
                <p>{{ detail }}</p>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import BenefitIcon from '../assets/icons/benefit-icon.vue'
defineProps<{ detail: string }>()

</script>

<style scoped></style>