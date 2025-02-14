<template>
    <div class="two-column-container">
        <div class="column left">
            <slot name="left">
                <div class = "general_container inside_container">
                    <h3>My projects</h3>
                    <p>The following projects represent some of my favorite work. Please check them out!</p>
                </div>
            </slot>
        </div>

        <div class="column right">
            <slot name="right">
                
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">

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
</style>