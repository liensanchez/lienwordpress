<script>
import NavBar from '@/components/global/NavBar.vue';
import HomeHero from '@/components/Home/HomeHero.vue'
import Projects from '@/components/Home/Projects.vue'
import Technologies from '@/components/Home/Technologies.vue'
import Contact from '@/components/Home/Contact.vue'
import Footer from '@/components/global/Footer.vue'

export default {
    components: {
        NavBar,
        HomeHero,
        Projects,
        Technologies,
        Contact,
        Footer
    }
}
</script>


<template>
    <div>
        <NavBar />
        <HomeHero id="about"/>
        <Projects id="projects"/>
        <Technologies id="technologies"/>
        <Contact id="contact"/>
        <Footer />
    </div>
</template>