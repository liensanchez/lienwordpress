<script>
import axios from "axios";
import { ref } from "vue";
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
            isLoading: true,
            technologies: [],
        };
    },
    methods: {
        async getTechnologies() {
            try {
                const response = await axios.get(
                    "https://liendev3.wpcomstaging.com/wp-json/wp/v2/technologies?_embed&acf_format=standard"
                   /*  "http://localhost/lienwordpress/index.php/wp-json/wp/v2/technologies?_embed&acf_format=standard" */
                );
                this.technologies = response.data;
                console.log(this.technologies);
                this.isLoading = false;
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                this.isLoading = false;
            }
        },
    },
    mounted() {
        this.getTechnologies();
    },
    setup() {
        const progressCircle = ref(null);
        const progressContent = ref(null);
        const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.value.style.setProperty("--progress", 1 - progress);
            progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
        };
        return {
            onAutoplayTimeLeft,
            progressCircle,
            progressContent,
            modules: [Autoplay, Pagination, Navigation],
        };
    },
};
</script>

<template>
    <div class="technologies-container">
        <div class="custom-container" v-if="!this.isLoading">
            <swiper
                :slidesPerView="8"
                :spaceBetween="30"
                :autoplay="{
                    delay: 1500,
                    disableOnInteraction: false,
                }"
                :loop="true"
                :modules="modules"
                @autoplayTimeLeft="onAutoplayTimeLeft"
                class="swiper-technologies"
            >
                <swiper-slide
                    v-for="image in this.technologies[0].acf
                        .technologies_images"
                >
                    <div class="single-technology">
                        <img :src="image" alt="" />
                    </div>
                </swiper-slide>
                <div class="autoplay-progress">
                    <svg viewBox="0 0 48 48" ref="progressCircle">
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref="progressContent"></span>
                </div>
            </swiper>
        </div>
    </div>
</template>

<style lang="scss">
.technologies-container {
    margin: 100px 0;
    display: flex;
    justify-content: center;

    .swiper-technologies {
        height: 150px;

        .single-technology {
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                max-height: 150px;
            }
        }
    }
}
</style>
