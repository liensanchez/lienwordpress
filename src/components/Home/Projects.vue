<script>
import axios from "axios";
import Titles from "../global/Titles.vue";
import Paragraph from "../global/Paragraph.vue";
import ButtonSmall from "@/components/global/ButtonSmall.vue";

export default {
    components: {
        Titles,
        Paragraph,
        ButtonSmall,
    },
    data() {
        return {
            posts: [],
            isLoading: false,
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
            this.isLoading = true;
            try {
                const response = await axios.get(
                    "https://liendev.000webhostapp.com/wp-json/wp/v2/posts?_embed&acf_format=standard"
                );
                this.posts = response.data;
                // Fetch image URLs for each post
                console.log(
                    this.posts
                );
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
                    <div
                        class="project-card"
                        v-for="project in this.posts"
                        :key="project.id"
                    >
                        <Titles
                            :titleFive="project.title.rendered"
                            :style="this.ProjectTitleStyle"
                        />
                        <Paragraph :text="project.slug" />
                        <img
                            :src="
                                project._embedded['wp:featuredmedia']['0']
                                    .source_url
                            "
                            alt=""
                        />
                        <a href="#">
                            <ButtonSmall
                                :buttonText="'Link'"
                                :style="ProjectButtonStyle"
                            />
                        </a>
                    </div>
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
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-gap: 20px;
        }
    }
}
</style>
