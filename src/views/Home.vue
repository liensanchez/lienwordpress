<script>
import NavBar from "@/components/global/NavBar.vue";
import HomeHero from "@/components/Home/HomeHero.vue";
import Projects from "@/components/Home/Projects.vue";
import Testimonials from "@/components/Home/Testimonials.vue";
import Contact from "@/components/Home/Contact.vue";
import Footer from "@/components/global/Footer.vue";

export default {
    components: {
        NavBar,
        HomeHero,
        Projects,
        Testimonials,
        Contact,
        Footer,
    },
};
</script>

<template>
    <NavBar />
    <HomeHero id="about" />
    <Projects id="projects"/>
    <Testimonials />
    <!--     <Projects id="projects"/>
        <Technologies id="technologies"/> 
        <Contact id="contact"/> -->
    <Footer />
</template>
