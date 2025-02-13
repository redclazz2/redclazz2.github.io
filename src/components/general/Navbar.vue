<template>
  <div class="general_container">
    <nav class="navbar">
      <ul class="nav-list">
        <li v-for="(item, index) in navItems" :key="index" class="nav-item">
          <NavButton :label="item.label" :route="item.route" :executable="item.executable" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';
import NavButton from './NavButton.vue';

const props = defineProps<{
  navItems: {
    label: string;
    route?: string;
    executable?: () => void;
  }[];
}>();

const selectedButton = ref<string | null>(null);

const setSelectedButton = (label: string) => {
    selectedButton.value = label;
};
</script>

<style scoped>
.navbar {
  background-color: transparent;
  padding: 10px 0;
  border-bottom: 2px solid #ebdbb2;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 60px;
}

@media (max-width: 768px) {
  .nav-list {
    flex-wrap: wrap;
    gap: 10px;
  }

  .nav-item button {
    padding: 8px 12px;
    font-size: 14px;
  }
}
</style>