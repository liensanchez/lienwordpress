<script setup>
import { ref, defineProps, onMounted } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const props = defineProps(["images"]);

onMounted(() => {
    console.log(props.images);
});

const thumbsSwiper = ref();

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = ref([FreeMode, Navigation, Thumbs]);
</script>

<template>
    <div class="thumbscarousel-container">
        <swiper
            :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="mySwiperBig"
        >
            <swiper-slide v-for="image in props.images" :key="image">
                <img :src="image" />
            </swiper-slide>
        </swiper>
        <swiper
            @swiper="setThumbsSwiper"
            :spaceBetween="10"
            :slidesPerView="4"
            :watchSlidesProgress="true"
            :grabCursor="true"
            :modules="modules"
            class="mySwiperSmall"
        >
            <swiper-slide
                v-for="image in props.images"
                :key="image"
            >
                <img :src="image" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss">
.thumbscarousel-container {
    width: 40%;

    .mySwiperBig {
        img {
            width: 100%;
            height: auto;
        }

        .swiper-button-prev,
        .swiper-button-next {
            width: 48px;
            height: 48px;
            border-radius: 48px;
            background-color: #1b3764;
            color: #FFCA42;
            font-size: 32px;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
            font-size: 24px;
        }        
    }

    .mySwiperSmall {
        width: 100%;
        height: 100px;

        img {
            width: 100%;
        }
    }

    @media (max-width: 1200px) {
        width: 100%;
    }
}
</style>
