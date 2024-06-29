<script>
import axios from "axios";
import NavBar from "@/components/global/NavBar.vue";
import Hero from "@/components/global/Hero.vue";
import Carousel from "@/components/Posts/Carousel.vue";
import Paragraph from "@/components/global/Paragraph.vue";
import Footer from "@/components/global/Footer.vue";

export default {
    components: {
        NavBar,
        Hero,
        Carousel,
        Paragraph,
        Footer,
    },
    data() {
        return {
            isLoading: true,
            post: [],
            heroTitle: "Jules Verne's Books",
            heroText: "The earth does not need new continents, but new men.",
        };
    },
    methods: {
        async getPost(postId) {
            this.isLoading = false;
            try {
                const response = await axios.get(process.env.VUE_APP_HERO);
                this.post = response.data;
                console.log(this.post);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                this.isLoading = false;
            }
        },
    },
    mounted() {
        const postId = this.$route.params.id;
        this.getPost(postId);
    },
};
</script>

<template>
    <div>
        <NavBar />
        <Hero
            v-if="!this.isLoading"
            :heroTitle="this.post.title.rendered"
            :heroText="this.post.excerpt.rendered"
        />
        <div class="project-info-container" v-if="!this.isLoading">
            <div class="custom-container">
                <div class="project-info-content">
                    <Carousel :images="this.post.acf.carousel_images" />
                    <Paragraph :text="this.post.content.rendered" />
                </div>
            </div>
        </div>

        <div class="project-links-container" v-if="!this.isLoading">
            <div class="custom-container">
                <div class="project-links-content">
                    <a :href="this.post.acf.github_link" target="blank">
                        <button>
                            <svg
                                width="50px"
                                height="50px"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>Github</title>
                                    <rect
                                        width="24"
                                        height="24"
                                        fill="none"
                                    ></rect>
                                    <path
                                        d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                                    ></path>
                                </g>
                            </svg>
                            Github
                        </button>
                    </a>
                    <a :href="this.post.acf.live_link" target="blank">
                        <button>
                            <img
                                :src="this.post.acf.live_ico"
                                alt=""
                                srcset=""
                            />
                            Live
                        </button>
                    </a>
                    <a href="/">
                        <button>
                            <svg
                                height="50px"
                                width="50px"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 38.273 38.273"
                                xml:space="preserve"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            style="fill: #010002"
                                            d="M20.621,10.484V5.84c0-0.808-0.458-1.548-1.181-1.909c-0.722-0.359-1.589-0.279-2.236,0.206 l-9.486,7.147c-0.677,0.292-1.117,0.67-1.401,1.058l-5.468,4.119C0.312,16.866-0.003,17.501,0,18.173 c0.002,0.673,0.322,1.305,0.862,1.706l16.355,12.133c0.646,0.48,1.51,0.554,2.23,0.191c0.72-0.362,1.174-1.1,1.174-1.905v-5.517 c0.013,0,0.025,0,0.038,0c3.842,0,10.687,1.089,13.366,8.386c0.311,0.846,1.116,1.397,2.001,1.397c0.079,0,0.157-0.004,0.236-0.013 c0.975-0.108,1.751-0.868,1.88-1.84c0.052-0.394,1.208-9.682-4.461-16.23C30.621,12.948,26.235,10.935,20.621,10.484z M20.659,20.515c-1.443,0-2.379,0.132-2.482,0.146c-1.046,0.154-1.822,1.053-1.822,2.111v3.287l-10.66-7.907l3.555-2.678 c0.136-0.104,0.259-0.222,0.365-0.351c0.155-0.068,0.301-0.152,0.437-0.254l6.303-4.75v2.401c0,1.168,0.939,2.119,2.108,2.134 c5.345,0.063,9.374,1.61,11.975,4.6c1.442,1.658,2.314,3.602,2.835,5.469C28.923,21.038,23.424,20.515,20.659,20.515z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                            Go Back
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<style lang="scss">
.project-info-container {
    margin: 100px 0;
    display: flex;
    justify-content: center;

    .project-info-content {
        display: flex;
        gap: 50px;
    }
}

.project-links-container {
    margin: 50px 0;
    display: flex;
    justify-content: center;

    .project-links-content {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        gap: 50px;

        button {
            heigth: 50px;
            width: 50px;
            cursor: pointer;
            background: none;
            border: none;
            display: flex;
            flex-direction: column;
            transition: transform 0.5s ease;

            img {
                height: 50px;
            }

            &:hover {
                text-decoration: underline;
                transform: scale(1.1);
            }
        }
    }
}
</style>
