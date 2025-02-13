<template>
    <button @mouseover="setRandomColor" @mouseleave="resetColor" @click="react" :style="{ color: currentColor }">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    route: {
        type: String,
        required: false,
    },
    executable: {
        type: Function,
        required: false,
    }
});

const router = useRouter();
const currentColor = ref('');

const colorPool = ["#CC241D", "#98971A", "#D79921", "#458588", "#B16286", "#689D6A"];

const getRandomColor = () => {
    return colorPool[Math.floor(Math.random() * colorPool.length)];
};

const setRandomColor = () => {
    currentColor.value = getRandomColor();
};

const resetColor = () => {
    currentColor.value = '';
};

const react = () => {
    if (props.route != undefined) {
        router.push(props.route);
    }

    if (props.executable !== undefined){
        props.executable();
    }
  };
</script>

<style scoped>
button {
    background-color: transparent;
    color: #282828;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    font-family: 'IBM Plex Mono', monospace;
}
</style>