<script>
import NavBar from '@/components/global/NavBar.vue';
import Footer from '@/components/global/Footer.vue';

export default {
    components: {
        NavBar,
        Footer
    }
};
</script>

<template>
    <NavBar />
    <section class="styles custom-container">
        <h1>Styles</h1>
        <article class="typography">
            <h2>Typography</h2>
            <div>
                <h3>Heading</h3>
                <p>Font -Family (Roboto serif)</p>
                <p>Font -Weight (600 ,700)</p>
            </div>

            <div>
                <h3>Body Font - family</h3>
                <p>Font -Family (DM Sans)</p>
                <p>Font -Weight (400)</p>
            </div>
        </article>
        <article class="colors">
            <div class="first-color">
                <p>#64CCC5</p>
            </div>
            <div class="second-color">
                <p>#0C0C0C</p>
            </div>
            <div class="third-color">
                <p>#0C0C0CE6</p>
            </div>
            <div class="fourth-color">
                <p>#FBFBFB</p>
            </div>
            <div class="fifth-color">
                <p>#F4F4F4</p>
            </div>
            <div class="sixth-color">
                <p>#DFDFDF</p>
            </div>
        </article>
        <article class="buttons">
            <button class="first-button">LightBlue</button>
            <button class="second-button">White</button>
            <button class="third-button">
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="14" cy="14" r="14" fill="#0C0C0C" />
                    <path
                        d="M12 9L16.6667 13.6667L12 18.3333"
                        stroke="#FBFBFB"
                        stroke-width="1.55439"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                White & Arrow
            </button>
            <button class="fourth">Blue</button>
        </article>
    </section>
    <Footer />
</template>

<style lang="scss">
@import "@/assets/styles.scss";

.styles {
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 50px;

    h1 {
        font-size: 56px;
    }

    .typography {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 0 auto;
    }

    .colors {
        width: 100%;
        margin: 0 auto;
        display: flex;
        gap: 50px;

        .first-color {
            background: var(--color-light-blue);
            width: 100px;
            height: 100px;
            flex-shrink: 0;
        }

        .second-color {
            background: var(--color-dark);
            color: var(--color-light);
            width: 100px;
            height: 100px;
            flex-shrink: 0;
        }

        .third-color {
            background: var(--color-dark-opacity);
            color: var(--color-light);
            width: 100px;
            height: 100px;
            flex-shrink: 0;
        }

        .fourth-color {
            border: 1px solid var(--color-grey);
            background: var(--color-light);
            width: 100px;
            height: 100px;
            flex-shrink: 0;
        }

        .fifth-color {
            background: var(--color-light-alt);
            width: 100px;
            height: 100px;
            flex-shrink: 0;
        }

        .sixth-color {
            background: var(--color-grey);
            width: 100px;
            height: 100px;
            flex-shrink: 0;
        }
    }

    .buttons {
        background-color: #d9d9d9;
        padding: 25px;
        display: flex;
        gap: 15px;

        .first-button {
            @include basic-btn(var(--color-light-blue), 10px, #fff);
        }

        .second-button {
            @include basic-btn(var(--color-light), 10px, var(--color-dark));
        }

        .third-button {
            @include animation-btn(var(--color-light), 10px, var(--color-dark));
        }

        .fourth {
            @include basic-btn(var(--color-dark), 10px 25px, var(--color-light));
        }
    }

    @media (max-width: 768px) {
        .colors,
        .buttons {
            flex-wrap: wrap;
        }
    }
}
</style>
