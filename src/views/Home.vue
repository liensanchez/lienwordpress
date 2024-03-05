<script>
import NavBar from '@/components/global/NavBar.vue';
import HomeHero from '@/components/Home/HomeHero.vue'
import Projects from '@/components/Home/Projects.vue'

import Footer from '@/components/global/Footer.vue'

export default {
    components: {
        NavBar,
        HomeHero,
        Projects,
        Footer
    }
}
</script>


<template>
    <div>
        <NavBar />
        <HomeHero />
        <Projects />
        <Footer />
    </div>
</template>