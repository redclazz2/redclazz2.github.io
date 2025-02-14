<template>
    <div class="two-column-container">
        <div class="column left">
            <slot name="left">
                <div class="general_container inside_container">
                    <h3>What's the web about?</h3>
                    <p>Welcome to my brand-new website! I put a lot of effort into designing and programming the Gruvbox theme (I'm no frontend dev). Hope you like it! Here, I'll share my favorite media and programming projects that didn't end up in the bin. Thanks for stopping by!</p>
                </div>

                <div class="general_container inside_container">
                    <h3>Who is Redclazz?</h3>
                    <p>I'm a 21-year-old programmer from Colombia! I completed my studies in software and systems engineering in 2025. I'm passionate about all things tech-related! Some of my other hobbies include playing video games (mostly Nintendo and Splatoon), reading, and listening to '80s-'90s music.</p>
                    <img src="@/assets/me.jpeg" alt="Redclazz's Picture" />
                </div>
            </slot>
        </div>

        <div class="column right">
            <slot name="right">
                <FeaturedContent></FeaturedContent>
                <Lessons></Lessons>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import FeaturedContent from "./FeaturedContent.vue";
import Lessons from "./Lessons.vue";
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
</style>