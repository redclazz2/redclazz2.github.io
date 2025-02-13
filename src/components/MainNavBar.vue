<template>
  <Navbar :navItems="navItems" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from './general/Navbar.vue';

const navItems = ref([
  { label: "ABOUT ME", route: "/" },
  { label: "PROJECTS", route: "/projects" },
  { label: "CONTACT ME", route: "/contact" },
]);
</script>
