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
        <div v-if="post_content" v-html="renderedContent"></div>
        <div v-else>Loading content...</div>
    </section>
</template>

<style lang="scss" scoped>
.body-post {
    padding: 40px 10px;
    h1 {
        text-align: center;
        font-size: 64px;
        margin-bottom: 30px;
    }
}

</style>
