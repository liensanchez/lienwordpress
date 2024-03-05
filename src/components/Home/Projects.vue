<script>
import axios from "axios";
import Titles from "../global/Titles.vue";
import Paragraph from "../global/Paragraph.vue";
import ButtonSmall from "@/components/global/ButtonSmall.vue";
import ProjectCard from "@/components/Home/ProjectCard.vue";

export default {
    components: {
        Titles,
        Paragraph,
        ButtonSmall,
        ProjectCard,
    },
    data() {
        return {
            posts: [],
            isLoading: true,
            imageUrls: {}, // Keep track of fetched image URLs
            ProjectTitle: "Projects",
            ProjectTitleStyle: {
                color: "#1b3764",
            },
            ProjectButtonStyle: {
                borderColor: "#FFCA42",
                backgroundColor: "#FFCA42",
            },
        };
    },
    methods: {
        async getPosts() {
            this.isLoading = false;
            try {
                const response = await axios.get(
                    "https://liendev.000webhostapp.com/wp-json/wp/v2/posts?_embed&acf_format=standard"
                );
                this.posts = response.data;
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                this.isLoading = false;
            }
        },
    },
    mounted() {
        this.getPosts();
    },
};
</script>

<template>
    <div class="projects-container">
        <div class="custom-container">
            <Titles
                :titleTwo="this.ProjectTitle"
                :style="this.ProjectTitleStyle"
            />

            <div class="projects-content">
                <div class="projects-list" v-if="this.posts">
                    <ProjectCard
                        :project="project"
                        v-for="project in this.posts"
                        :key="project.id"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.projects-container {
    display: flex;
    justify-content: center;

    .projects-content {
        .projects-list {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
            grid-gap: 20px;
        }
    }
}
</style>
