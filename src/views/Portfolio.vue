<script>
import NavBar from "@/components/global/NavBar.vue";
import GenericHero from "@/components/global/GenericHero.vue";
import AllProjects from "@/components/Portfolio/AllProjects.vue";
import GetInTouch from "@/components/global/GetInTouch.vue";
import Footer from "@/components/global/Footer.vue";

export default {
    components: {
        NavBar,
        GenericHero,
        AllProjects,
        GetInTouch,
        Footer,
    },
};
</script>

<template>
  <NavBar />
  <GenericHero :hero_title="'My Portfolio'" />
  <AllProjects />
  <GetInTouch />
  <Footer />
</template>