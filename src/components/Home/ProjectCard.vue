<template>
    <div>
        
    </div>
</template>
<!-- <script>
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
            <a :href="`/project/${this.project.id}`">
                <h1>
                    {{ this.project.title.rendered }}
                </h1>
            </a>
        </div>

        <div class="project-card-links">
            <a :href="this.project.acf.live_link" target="blank">
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
            </a>

            <a :href="this.project.acf.live_link" target="blank">
                <button>
                    <img
                        v-if="this.project.acf.live_ico"
                        :src="this.project.acf.live_ico"
                        alt=""
                        srcset=""
                    />
                    <svg
                        v-if="!this.project.acf.live_ico"
                        width="50px"
                        height="50px"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
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
                                    class="st0"
                                    d="M255.994,0.006C114.607,0.013,0.012,114.612,0,256c0.012,141.387,114.607,255.986,255.994,255.994 C397.393,511.986,511.992,397.387,512,256C511.992,114.612,397.393,0.013,255.994,0.006z M97.607,97.612 c23.34-23.328,51.761-41.475,83.455-52.725c-15.183,18.375-27.84,41.906-37.757,69.116H82.772 C87.452,108.308,92.396,102.824,97.607,97.612z M65.612,138.003h69.986c-9.008,31.929-14.41,67.834-15.363,105.997H32.327 C34.374,205.196,46.3,169.088,65.612,138.003z M65.612,373.997C46.3,342.912,34.374,306.804,32.327,268h87.991 c0.961,38.124,6.21,74.092,15.206,105.998H65.612z M97.607,414.386c-5.211-5.211-10.156-10.695-14.836-16.39h60.573 c4.28,11.774,9.019,22.944,14.312,33.21c6.954,13.438,14.758,25.468,23.348,35.89C149.332,455.846,120.931,437.699,97.607,414.386z M243.998,479.667c-3.746-0.196-7.469-0.477-11.164-0.86c-5.89-2.64-11.722-6.25-17.5-10.961 c-17.632-14.359-33.976-38.671-46.398-69.85h75.061V479.667z M243.998,373.997h-83.436c-9.477-31.171-15.316-67.311-16.328-105.998 h99.763V373.997z M243.998,244H144.31c1.008-38.71,6.875-74.819,16.359-105.997h83.33V244z M243.998,114.003h-74.951 c3.109-7.79,6.367-15.312,9.934-22.195c10.64-20.625,23.17-36.89,36.354-47.656c5.777-4.71,11.609-8.32,17.5-10.96 c3.695-0.382,7.417-0.664,11.164-0.859V114.003z M446.392,138.003c19.312,31.085,31.234,67.194,33.281,105.997h-87.991 c-0.961-38.124-6.21-74.092-15.21-105.997H446.392z M414.393,97.612c5.211,5.211,10.156,10.696,14.836,16.391h-60.577 c-4.281-11.773-9.023-22.945-14.312-33.21c-6.953-13.437-14.758-25.468-23.347-35.89C362.668,56.16,391.065,74.301,414.393,97.612z M267.998,32.333c3.746,0.195,7.469,0.484,11.16,0.859c5.89,2.649,11.723,6.25,17.504,10.96 c17.636,14.359,33.976,38.671,46.397,69.85h-75.061V32.333z M267.998,138.003h83.436c9.476,31.171,15.32,67.31,16.328,105.997 h-99.764V138.003z M267.998,268h99.685c-1.007,38.71-6.874,74.818-16.359,105.998h-83.326V268z M296.661,467.846 c-5.781,4.711-11.614,8.313-17.504,10.961c-3.691,0.375-7.414,0.664-11.16,0.86v-81.67h74.951 c-3.109,7.789-6.367,15.312-9.933,22.195C322.376,440.816,309.845,457.081,296.661,467.846z M414.393,414.386 c-23.336,23.328-51.764,41.476-83.459,52.725c15.187-18.375,27.835-41.905,37.757-69.115h60.538 C424.548,403.692,419.604,409.176,414.393,414.386z M446.392,373.997h-69.998c9.008-31.929,14.414-67.842,15.367-105.998h87.912 C477.626,306.804,465.704,342.912,446.392,373.997z"
                                ></path>
                            </g>
                        </g>
                    </svg>

                    Live
                </button>
            </a>

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
        a {
            color: none;
        }
        margin-top: 15px;
        transition: transform 0.5s ease;

        &:hover {
            text-decoration: underline;
            transform: scale(1.05);
        }
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

    @media (max-width: 1200px) {
        width: 100%;

        .mySwiper {
            img {
                height: auto;
                width: 100%;
            }
        }
    }
}
</style>
 -->