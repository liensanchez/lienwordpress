<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        imageUrls: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            modules: [Autoplay, Pagination, Navigation],
            navigation: {
                prevEl: ".cards-button-prev",
                nextEl: ".cards-button-next",
            },
        };
    },
    mounted() {
        console.log(this.imageUrls);
    },
};
</script>

<template>
    <section class="hero custom-container">
        <div class="hero-carousel">
            <button class="cards-button-prev">
                <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <rect width="24" height="24" fill="none"></rect>
                        <path
                            d="M14.5 17L9.5 12L14.5 7"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </g>
                </svg>
            </button>

            <swiper
                :slidesPerView="1"
                :loop="true"
                :modules="modules"
                :navigation="navigation"
                :autoplay="{
                    delay: 3500,
                    disableOnInteraction: false,
                }"
            >
                <SwiperSlide v-for="(image, index) in imageUrls" :key="index">
                    <img :src="image" alt="Carousel Image" />
                </SwiperSlide>
            </swiper>

            <button class="cards-button-next">
                <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24.00 24.00"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(-1, 0, 0, 1, 0, 0)"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <rect width="24" height="24" fill="none"></rect>
                        <path
                            d="M14.5 17L9.5 12L14.5 7"
                            stroke="#000000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </g>
                </svg>
            </button>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles.scss";
.hero {
    .hero-carousel {
        display: flex;
        align-items: center;
        padding: 20px;
        height: auto;
        border-radius: 20px;
        background: var(--color-light-alt);

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    .cards-button-prev,
    .cards-button-next {
        @include animation-btn(var(--color-dark), 15px, var(--color-light));
        display: flex;
        font-size: 25px;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        border: solid 1px var(--color-dark);
        overflow: hidden;

        svg {
            path {
                stroke: var(--color-light);
            }
        }

        &:focus {
            border: solid 1px var(--color-dark);
        }
    }

    @media (max-width: 768px) {
        .testimonial-cards {
            .single-testimonial {
                h2 {
                    margin: 5px 0;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>
