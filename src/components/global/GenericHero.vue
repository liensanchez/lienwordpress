<script>
export default {
    props: {
        hero_title: {
            type: String,
            required: true,
        },
    },
};
</script>

<template>
    <section class="generic-hero-container custom-container">
        <div class="generic-hero">
            <h1>{{ hero_title }}</h1>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.generic-hero-container {
    .generic-hero {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300px;
        border-radius: 20px;
        background-color: var(--color-dark);

        h1 {
            color: var(--color-light);
            text-align: center;
            font-size: 64px;
            font-style: normal;
            font-weight: 700;
        }
    }

    @media (max-width: 768px) {
        margin-top: 48px;

        .generic-hero {
            height: 200px;

            h1 {
                font-size: 48px;
            }
        }
    }
}
</style>
