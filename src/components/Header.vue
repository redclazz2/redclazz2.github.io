<template>
    <div class="general_container">
      <p class="date">{{ formattedDate }}</p>
      <p>Welcome to</p>
      <h1>Redclazz's Website</h1>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const formattedDate = ref(getFormattedDate());
  
  function getFormattedDate() {
    const date = new Date();
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
      .format(date)
      .toUpperCase();
  }
  </script>
  
  <style scoped>
  .general_container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .date{
    font-size: 1rem;
  }

  h1 {
    margin-top: 0;
    font-size: 2rem;
    font-weight: bold;
  }
  
  p {
    font-size: 1.2rem;
    margin: 5px 0;
  }
  </style>
  