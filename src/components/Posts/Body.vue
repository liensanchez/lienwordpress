<script>
export default {
    props: {
        post_content: {
            type: Object,
            default: () => ({
                content: { rendered: "" },
                title: { rendered: "" },
            }),
        },
    },
    computed: {
        renderedContent() {
            return this.post_content?.content?.rendered || "";
        },
    },
};
</script>

<template>
    <section class="body-post custom-container">
        <h1>{{ post_content?.title?.rendered || "Loading..." }}</h1>
        <div
            class="post-content"
            v-if="post_content"
            v-html="renderedContent"
        ></div>
        <div v-else>Loading content...</div>
    </section>
</template>

<style lang="scss" scoped>
.body-post {
    padding: 40px 10px;

    h1 {
        font-size: 64px;
        margin-bottom: 30px;
    }

    .post-content {
        max-width: 100%; // Ensure the post content doesn't exceed the container width
        //overflow: hidden; // Prevent overflow
        margin: 0 auto; // Center the content

        p {
            max-width: 100%;
            height: auto; // Maintain aspect ratio
            display: block; // Remove any inline space below images
            
            img {
                max-width: 100%; // Ensure images are responsive
                height: auto; // Maintain aspect ratio
                display: block; // Remove any inline space below images
            }
        }
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 32px;
        }
    }
}
</style>