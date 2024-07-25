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
    data() {
        return {
            modules: [Autoplay, Pagination, Navigation],
            navigation: {
                prevEl: ".cards-button-prev",
                nextEl: ".cards-button-next",
            },
        };
    },
};
</script>

<template>
    <section class="testimonial custom-container">
        <div class="testimonial-cards">
            <swiper
                :slidesPerView="1"
                :loop="true"
                :modules="modules"
                :navigation="navigation"
                :autoplay="{
                    delay: 4500,
                    disableOnInteraction: false,
                }"
            >
                <swiper-slide>
                    <div class="single-testimonial">
                        <img src="@/assets/Lien.png" alt="" />
                        <h2>Testimonial</h2>
                        <p>Name</p>
                        <span>Title</span>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="single-testimonial">
                        <img src="@/assets/Lien.png" alt="" />
                        <h2>Testimonial2</h2>
                        <p>Name2</p>
                        <span>Title2</span>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="single-testimonial">
                        <img src="@/assets/Lien.png" alt="" />
                        <h2>Testimonial3</h2>
                        <p>Name3</p>
                        <span>Title3</span>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="cards-control">
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
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles.scss";
.testimonial {
    .testimonial-cards {
        padding: 20px;
        height: auto;
        border-radius: 20px;
        background: var(--color-light-blue);

        .single-testimonial {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            img {
                width: 150px;
                height: 150px;
                border-radius: 150px;
                object-fit: cover;
            }
        }
    }

    .cards-control {
        margin-top: 25px;
        display: flex;
        justify-content: center;
        gap: 10px;

        .cards-button-prev,
        .cards-button-next {
            @include animation-btn(var(--color-dark), 5px, var(--color-light));
            display: flex;
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
    }
}
</style>
