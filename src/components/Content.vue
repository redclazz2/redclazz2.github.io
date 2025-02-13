<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Ensure that all content starts with opacity 0 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

/* Fade-out for the old content */
.fade-leave-to {
  opacity: 0;
}

/* Fade-in for the new content */
.fade-enter, .fade-enter-to {
  opacity: 1;
}

.fade-leave {
  opacity: 0;
}
</style>
