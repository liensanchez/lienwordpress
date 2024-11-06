<template>
    <section class="custom-container">
        <div class="call-to-action">
            <h2>Enough talk, let’s get to work</h2>
            <a href="/contact" class="get-in-touch">Get in touch</a>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles.scss";
.call-to-action {
    margin: 50px 0 75px;
    overflow: hidden;
    border-radius: 20px;
    padding: 20px;
    background-image: url("@/assets/CallToAction-bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    align-items: center;

    h2 {
        color: var(--color-light);
        text-align: center;
        font-size: 45px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .get-in-touch {
        @include basic-btn(var(--color-light), 10px 25px, var(--color-dark));
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 24px;
        }
    }
}
</style>
