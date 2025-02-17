<template>
    <div class="two-column-container">
        <div class="column left">
            <slot name="left">
                <div class="general_container inside_container">
                    <h3>My projects</h3>
                    <p>The following projects represent some of my favorite work. Please check them out!</p>

                    <ul id="feat_list" class="featured_list">
                        <li v-for="(item, index) in featuredContent" 
                            :key="item.title" 
                            @click="selectProject(item)"
                            class="project-item"
                            :style="{ color: selectedProject === item ? selectedColor : 'inherit' }">
                            {{ item.title }}
                        </li>
                    </ul>
                </div>
            </slot>
        </div>

        <div class="column right">
            <slot name="right">
                <div class="general_container inside_container" v-if="selectedProject">
                    <h3>{{ selectedProject.title }}</h3>
                    <h4>{{ selectedProject.tech }}</h4>
                    <p>{{ selectedProject.about }}</p>
                    <div class="screenshots">
                        <img v-for="(screenshot, index) in selectedProject.screenshots" 
                             :key="index" 
                             :src="screenshot" 
                             alt="Project Screenshot">
                    </div>
                </div>
                <div v-else class="general_container inside_container">
                    <h3>Select a project</h3>
                    <p>Click on a project from the list to view details.</p>
                </div>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Projects from "@/assets/Projects.json";

const featuredContent = ref<{ title: string; tech: string; about: string; screenshots: string[] }[]>(Projects.projects);

const selectedProject = ref<{ title: string; tech: string; about: string; screenshots: string[] } | null>(null);

const selectedColor = ref<string>("");

const getRandomColor = () => {
    const colorPool = ["#CC241D", "#98971A", "#D79921", "#458588", "#B16286", "#689D6A"];
    return colorPool[Math.floor(Math.random() * colorPool.length)];
};

const selectProject = (project: { title: string; tech: string; about: string; screenshots: string[] }) => {
    selectedProject.value = project;
    selectedColor.value = getRandomColor();
};
</script>

<style scoped>
.two-column-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.column {
    padding: 10px;
}

@media (min-width: 768px) {
    .two-column-container {
        flex-direction: row;
    }

    .left {
        width: 40%;
    }

    .right {
        width: 60%;
    }
}

img {
    width: 10rem;
}

.project-item {
    cursor: pointer;
    padding: 5px;
    transition: color 0.2s;
}

.project-item:hover {
    text-decoration:underline;
}
</style>
