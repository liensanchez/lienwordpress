<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default {
    props: {
        project: {
            type: Object,
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<template>
    <div class="project-card-container" v-if="this.project">
        <swiper
            :pagination="true"
            :navigation="true"
            :loop="true"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide v-for="image in this.project.acf.carousel_images">
                <img :src="image" alt="" />
            </swiper-slide>
        </swiper>

        <div class="project-card-title">
            <h1>{{ this.project.title.rendered }}</h1>
        </div>

        <div class="project-card-links">
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
                        <rect width="24" height="24" fill="none"></rect>
                        <path
                            d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"
                        ></path>
                    </g>
                </svg>
                Github
            </button>

            <button>
                <img :src="this.project.acf.live_ico" alt="" srcset="" />
                Live
            </button>

            <a :href="`/project/${this.project.id}`">
                <button>
                    <svg
                        width="50px"
                        height="50px"
                        viewBox="0 -2 20 20"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <title>align_text_left [#910]</title>
                            <desc>Created with Sketch.</desc>
                            <defs></defs>
                            <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <g
                                    id="Dribbble-Light-Preview"
                                    transform="translate(-60.000000, -4201.000000)"
                                    fill="#000000"
                                >
                                    <g
                                        id="icons"
                                        transform="translate(56.000000, 160.000000)"
                                    >
                                        <path
                                            d="M4,4057 L24,4057 L24,4055 L4,4055 L4,4057 Z M4,4043 L24,4043 L24,4041 L4,4041 L4,4043 Z M4,4050 L18,4050 L18,4048 L4,4048 L4,4050 Z"
                                            id="align_text_left-[#910]"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    Read More
                </button>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.project-card-container {
    width: 450px;

    .mySwiper {
        height: 250px;
        img {
            height: 100%;
            width: 100%;
        }
    }

    .project-card-title {
        margin-top: 15px;
    }

    .project-card-links {
        margin-top: 15px;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        gap: 50px;

        button {
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
