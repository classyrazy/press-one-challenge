<template>
   <section class="benefit-section">
   <div class="inner">
      <Benefit v-for="(item, idx) in benefits" :key="idx" :detail="item" />
   </div>
   </section>
</template>

<script setup lang="ts">
import Benefit from './Benefit.vue'
import {benefits} from "../composables/usePageData"
</script>

<style scoped>

</style>