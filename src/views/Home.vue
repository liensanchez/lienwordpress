<script>
import NavBar from "@/components/global/NavBar.vue";
import HomeHero from "@/components/Home/HomeHero.vue";
import Projects from "@/components/Home/Projects.vue";
import Testimonials from "@/components/Home/Testimonials.vue";
import GetInTouch from "@/components/global/GetInTouch.vue";
import Footer from "@/components/global/Footer.vue";

export default {
    components: {
        NavBar,
        HomeHero,
        Projects,
        Testimonials,
        GetInTouch,
        Footer,
    },
};
</script>

<template>
    <NavBar />
    <HomeHero id="about" />
    <Projects id="projects" />
    <Testimonials />
    <GetInTouch />
    <Footer />
</template>
