<script setup lang="ts">
import FooterSection from './components/FooterSection.vue'
import Plans from './components/Plans.vue'
import WhatYouGetSection from './components/WhatYouGetSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import Hero from './components/Hero.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
<div class="main-wrapper">
<NavBar />
<Hero />
<BenefitsSection />
<WhatYouGetSection />
<Plans />
<FooterSection/>
</div>
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
