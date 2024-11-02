<script>
import axios from "axios";
import NavBar from "@/components/global/NavBar.vue";
import Hero from "@/components/Posts/Hero.vue";
import Body from "@/components/Posts/Body.vue";
import OtherProjects from "@/components/Posts/OtherProjects.vue";
import Footer from "@/components/global/Footer.vue";

export default {
    components: {
        NavBar,
        Hero,
        Body,
        OtherProjects,
        Footer,
    },
    data() {
        return {
            post_content: [],
            isLoading: true,
            imageUrls: [],
            github_link: '',
            live_ico: '',
            live_link: '',
            project_type: ''
        };
    },
    methods: {
        async getPosts(postId) {
            /* this.isLoading = false; */
            try {
                const response = await axios.get(
                    process.env.VUE_APP_SINGLEPROJECT +
                        postId +
                        '?acf_format=standard'
                );
                //this.post_content = response.data.content;
                this.post_content = response.data;
                this.imageUrls = response.data.acf.carousel_images;
                this.github_link = response.data.acf.github_link;
                this.live_ico = response.data.acf.live_ico;
                this.live_link = response.data.acf.live_link;
                this.project_type = response.data.acf.project_type;
                console.log(this.post_content);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                /* this.isLoading = false; */
            }
        },
    },
    mounted() {
        const postId = this.$route.params.id;
        this.getPosts(postId);
    },
};
</script>

<template>
    <NavBar />
    <Hero
        :imageUrls="imageUrls"
        :github_link="github_link"
        :live_ico="live_ico"
        :live_link="live_link"
        :project_type="project_type"
    />
    <Body :post_content="post_content" />
    <!-- <OtherProjects /> -->
    <Footer /> 
</template>
