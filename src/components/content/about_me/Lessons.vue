<script setup lang="ts">
import { ref, onMounted } from "vue";

const lessons = ref<string[]>([
  "If you're working on a team project, make sure everyone is familiar with the tech stack.",
  "Game jams aren't about patterns or best practices—just make the game!",
  "In tech, every tool should be evaluated—everything depends on the context!",
  "For long-term projects, design patterns are your best friends!",
  "Turns out, data structures are actually useful!"
]);

const colorPool = ref<string[]>([
  "#CC241D", "#98971A", "#D79921", "#458588", "#B16286", "#689D6A"
]);

const currentLesson = ref("Loading...");
const currentColor = ref("#000");
const isChanging = ref(false);

const updateLesson = () => {
  isChanging.value = true;
  const randomIndex = Math.floor(Math.random() * lessons.value.length);
  currentLesson.value = lessons.value[randomIndex];

  const colorIndex = Math.floor(Math.random() * colorPool.value.length);
  currentColor.value = colorPool.value[colorIndex];

  setTimeout(() => {
    isChanging.value = false;
  }, 1000);
};

onMounted(() => {
  updateLesson();
  setInterval(updateLesson, 5000);
});
</script>

<template>
  <div class="general_container inside_container">
    <h3>Some of my lessons</h3>
    <p :style="{ color: isChanging ? currentColor : '#000' }">{{ currentLesson }}</p>
  </div>
</template>

<style scoped>
.general_container {
  padding: 20px;
}

p {
  transition: color 0.6s ease-in-out;
}
</style>
