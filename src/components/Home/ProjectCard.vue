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
    mounted() {
        console.log(this.project);
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>

<template>
    <div class="project-card-container">
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

        <div>
            <h1>{{ this.project.title.rendered }}</h1>
        </div>

        <div>
            <a :href="this.project.acf.github_link" target="blank">
                <button>github</button>
            </a>
            <a :href="this.project.acf.live_link" target="blank">
                <button>live</button>
            </a>
            
            <button>Read More</button>
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
}
</style>
