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
                    delay: 7500,
                    disableOnInteraction: false,
                }"
            >
                <swiper-slide>
                    <div class="single-testimonial">
                        <img src="@/assets/juli.jpeg" alt="" />
                        <h2>I highly recommend Lien Silvio Sanchez for his commitment, passion and exceptional skills. We worked together on the development of a blockchain in Hyperledger Fabric. Lien always strives to achieve project objectives, showing an admirable and contagious dedication. He stands out for his ability to learn quickly, mastering new concepts and technologies. In addition, he is a creative and proactive thinker, constantly providing innovative ideas and solutions to improve the project. Do not hesitate to contact me for more details about our experience developing together.</h2>
                        <p>Julián María Castro</p>
                        <span>Middleware Dev</span>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="single-testimonial">
                        <img src="@/assets/caro.jpeg" alt="" />
                        <h2>Meeting Lien was a continuous learning of kindness, attention, responsibility and organization. During our time together at Henry, he always demonstrated a strong commitment to his work and an exceptional ability to stay on top of details and meet deadlines. His proactive approach and willingness to help others were a differential. I feel fortunate to have had the opportunity to work with Lien and know she would be a valuable addition to any organization.</h2>
                        <p>Carolina Ramirez</p>
                        <span>Front End Dev</span>
                    </div>
                </swiper-slide>
<!--                 <swiper-slide>
                    <div class="single-testimonial">
                        <img src="@/assets/Lien.png" alt="" />
                        <h2>Testimonial3</h2>
                        <p>Name3</p>
                        <span>Title3</span>
                    </div>
                </swiper-slide> -->
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
        background: var(--color-light-alt);

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

            h2 {
                margin: 25px 0;
                text-align: center;
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
