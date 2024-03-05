<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<template>
    <p class="paragraph" v-html="text"></p>
</template>

<style lang="scss">
.paragraph {
    font-family: "Inter", sans-serif;
    font-size: 19px;
    color: #969aa0;
    font-weight: 400px;

    ul{
        font-size: 19px;
        margin-left: 20px;
    }
}

@media (max-width: 768px) {
    .paragraph {
        font-size: 16px;
    }
}
</style>
