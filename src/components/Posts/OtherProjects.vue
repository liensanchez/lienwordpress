<script>
import axios from "axios";

export default {
    data() {
        return {
            posts: [],
            isLoading: true,
            imageUrls: {}, // Keep track of fetched image URLs
        };
    },
    methods: {
        async getPosts() {
            this.isLoading = false;
            try {
                const response = await axios.get(process.env.VUE_APP_PROJECTS);
                this.posts = response.data;
                console.log(response);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                this.isLoading = false;
            }
        },
    },
    computed: {
        limitedPosts() {
            return this.posts.slice(0, 4);
        },
    },
    mounted() {
        this.getPosts();
    },
};
</script>

<template>
    <section class="recent-posts custom-container">
        <h2>Recent Projects</h2>
        <div class="recent-posts-cards">
            <a
                class="recent-post-card"
                :href="`/project/${project.slug}/${project.id}`"
                v-for="(project, index) in limitedPosts"
                :key="project.id"
            >
                <svg
                    class="arrow"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="25" cy="25" r="25" fill="#0C0C0C" />
                    <path
                        d="M15 35L25 25L35 15M35 15H27.5M35 15V22.5"
                        stroke="#FBFBFB"
                        stroke-width="1.875"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <div
                    class="showcase-card-img"
                    :style="{
                        backgroundImage: `url(${project.acf.carousel_images[0]})`,
                    }"
                ></div>
                <h3>{{ project.title.rendered }}</h3>
                <p>{{ project.acf.project_type }}</p>
                <div class="dark-bg"></div>
            </a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.recent-posts {
    .recent-posts-cards {
        margin: 25px 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));


        .recent-post-card {
            /* flex: 0 1 300px;  */
            /* background: var(--color-light-alt); */
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            position: relative;
            transition: transform 0.3s, filter 0.3s;
            overflow: hidden;
            border-radius: 10px;
            height: auto;
            aspect-ratio: 1/1;

            &:hover {
                transform: scale(1.05);

                .arrow,
                .dark-bg {
                    opacity: 1;
                }
            }

            .arrow {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: 3;
                opacity: 0;
                transition: opacity 0.3s;
            }

            .showcase-card-img {
                background-size: 105%;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 10px;
                overflow: hidden;
                height: 340px;
                width: 100%;
            }

            h3,
            p {
                color: var(--color-dark);
            }

            .dark-bg {
                border-radius: 20px;
                margin: -20px;
                position: absolute;
                z-index: 2;
                height: 100%;
                width: 100%;
                opacity: 0;
                background-color: rgb(0, 0, 0, 0.25);
                backdrop-filter: blur(1px);
            }
        }
    }
}
</style>
