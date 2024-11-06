<script>
import NavBar from "@/components/global/NavBar.vue";
import Footer from "@/components/global/Footer.vue";

export default {
    name: "NotFound",
    components: {
        NavBar,
        Footer,
    },
};
</script>

<template>
    <NavBar />
    <div class="error-container custom-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
            The page you are looking for doesn't exist. Please try searching for
            some other page, or return to the website's homepage to find what
            you're looking for.
        </p>
        <a href="/">Go back</a>
    </div>
    <Footer />
</template>

<style lang="scss" scoped>
@import "@/assets/styles.scss";
.error-container {
    padding: 175px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    p {
        text-align: center;
    }

    a {
        @include animation-btn(
            var(--color-light-blue),
            10px 25px,
            var(--color-dark)
        );
    }

    @media (max-width: 768px) {
      padding: 75px 0;
    }
}
</style>
