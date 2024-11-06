<script>
import NavBar from "@/components/global/NavBar.vue";
import GenericHero from "@/components/global/GenericHero.vue";
import GetInTouch from "@/components/global/GetInTouch.vue";
import Footer from "@/components/global/Footer.vue";

export default {
    components: {
        NavBar,
        GenericHero,
        GetInTouch,
        Footer,
    },
};
</script>

<template>
  <NavBar />
  <GenericHero :hero_title="'About Me'" />
  <AllProjects />
  <GetInTouch />
  <Footer />
</template>