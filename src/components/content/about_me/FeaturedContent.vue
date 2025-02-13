<template>
    <div class="general_container inside_container">
        <h3>Featured Content</h3>
        <p> Check out some media I enjoy:</p>

        <Navbar :navItems="navItems" />

        <div class="featured_content_container">
            <ul id="feat_list" class="featured_list">
                <li 
                    v-for="(item, index) in featuredContent" 
                    :key="item.title"
                    :class="{ flash: flashEffect }"
                    :style="{ color: colors[index] }"
                >
                    {{ item.title }} - {{ item.author }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Navbar from '../../general/Navbar.vue';
import FeaturedData from "@/assets/FeaturedContent.json";

const featuredContent = ref<{ title: string; author: string }[]>([]);
featuredContent.value = FeaturedData.movies.entry;

const navItems = ref([
    {
        label: "MUSIC", executable: () => {
            featuredContent.value = FeaturedData.music.entry;
        }
    },
    {
        label: "FILMS & SERIES", executable: () => {
            featuredContent.value = FeaturedData.movies.entry;
        }
    },
    {
        label: "BOOKS", executable: () => {
            featuredContent.value = FeaturedData.books.entry;
        }
    },
]);

const flashEffect = ref(false);
const colors = ref<string[]>([]);

const getRandomColor = () => {
    const colorPool = ["#CC241D", "#98971A", "#D79921", "#458588", "#B16286", "#689D6A"];
    return colorPool[Math.floor(Math.random() * colorPool.length)];
};

// Watch for changes in featuredContent
watch(featuredContent, (newList) => {
    flashEffect.value = true;
    colors.value = newList.map(() => getRandomColor());

    setTimeout(() => {
        colors.value = newList.map(() => "#282828"); // Fades to default color
    }, 500); // Keep flash for 500ms

    setTimeout(() => {
        flashEffect.value = false;
    }, 1000); // Allow time for fade-out transition
});
</script>

<style scoped>
.featured_content_container {
    border-style: solid;
    border-top: 0;
    border-width: 2px;
    border-color: #282828;
    margin: 10px;
    margin-top: 0;
}

.featured_list {
    margin-top: 0;
    margin-left: 20px;
    padding: 10px;
}

.flash {
    transition: color 0.5s ease-in-out;
}
</style>
