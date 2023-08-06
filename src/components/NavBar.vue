<template>
  <header class="nav-container" :class="navOpened? 'open-nav': ''">
    <nav class="nav-wrapper">
      <img src="../assets/logo.png" alt="page logo" />
      <ul class="nav-links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Support</a></li>
      </ul>
      <a href="#" class="btn bordered-btn">Get PressOne</a>
      <button class="nav-toggle-mobile" @click="handleOpenNav"><HamburgerIcon /></button>
    </nav>
   <nav class="mobile-nav">
    <ul class="nav-links-mobile">
      <li><a href="#" class="nav-link">About Us</a></li>
      <li><a href="#" class="nav-link">Pricing</a></li>
      <li><a href="#" class="nav-link">Product</a></li>
      <li><a href="#" class="nav-link">Support</a></li>

    </ul>
        <a href="#" class="btn bordered-btn">Get PressOne</a>
   </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HamburgerIcon from '../assets/icons/hamburger-icon.vue'

const navOpened = ref(false)

const handleOpenNav = () =>{
  navOpened.value = !navOpened.value
}
</script>

<style scoped></style>
