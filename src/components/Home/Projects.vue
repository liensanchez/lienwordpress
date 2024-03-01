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
            post: [],
            isLoading: false,
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
        getPosts() {
            this.isLoading = true;
/*             fetch("http://localhost/liendev/wp-json/wp/v2/posts")
                .then((response) => response.json())
                .then((data) => {
                    this.post = data;
                    this.isLoading = false;
                    console.log(data);
                }); */
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
                <div class="projects-list">
<!--                     <div class="project-card" v-for="project in this.post">
                        <Titles
                            :titleFive="project.title.rendered"
                            :style="this.ProjectTitleStyle"
                        />
                        <Paragraph :text="project.slug" />
                        <a href="#">
                            <ButtonSmall
                                :buttonText="'Link'"
                                :style="ProjectButtonStyle"
                            />
                        </a>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.projects-container {
    display: flex;
    justify-content: center;
}
</style>
