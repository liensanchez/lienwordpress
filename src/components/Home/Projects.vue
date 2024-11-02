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
    <section class="showcase custom-container">
        <h2>Recent Showcase</h2>
        <div class="showcase-projects-list" v-if="!this.isLoading">
            <a
                :href="`/project/${project.id}`"
                class="showcase-project-card"
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

        <a :href="`/portfolio`" class="showcase-see-more">See more projects</a>
    </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles.scss";
.showcase {
    padding: 85px 0;
    display: flex;
    flex-direction: column;
    gap: 75px;

    h2 {
        text-align: center;
        color: var(--color-dark);
        font-size: 44px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .showcase-projects-list {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px; /* Adjust the gap as needed */

        .showcase-project-card {
            /* background: var(--color-light-alt); */
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            position: relative;
            transition: transform 0.3s, filter 0.3s;
            overflow: hidden;
            border-radius: 10px;
            height: 300px;
            flex: 1 1 40%; /* Allow cards to wrap and take up 45% of the container */

            &:nth-child(odd) {
                margin-top: 0px;
            }

            &:nth-child(even) {
                margin-top: 150px;
                margin-bottom: -140px;
            }

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

    .showcase-see-more {
        margin: 120px auto 0;

        @include basic-btn(var(--color-dark), 5px 25px, var(--color-light));
    }

    @media (max-width: 768px) {
        padding: 45px 0;

        h2 {
            font-size: 32px;
        }

        .showcase-projects-list {
            display: flex;
            flex-direction: column;

            .showcase-project-card {
                /* padding: 10px; */
                gap: 5px;

                .showcase-card-img {
                    background-size: cover;
                    height: 240px;
                }

                &:nth-child(odd) {
                    margin-top: 0px;
                }

                &:nth-child(even) {
                    margin-top: 0px;
                    margin-bottom: 0px;
                }

                &:hover {
                    transform: scale(1.05);

                    .arrow,
                    .dark-bg {
                        opacity: 1;
                    }
                }
            }
        }

        .showcase-see-more {
            margin: 0 auto;
        }
    }
}
</style>
