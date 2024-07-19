<template>
    <section class="hero">
        <div class="hero-content custom-container">
            <div class="left-hero">
                <h1>Lien Sanchez</h1>
                <div class="dev-roles">
                    <div class="text-container">
                        <h2 class="frontend">Front End</h2>
                        <h2 class="backend">Back end</h2>
                        <h2 class="full">Full Stack</h2>
                    </div>
                    <h2 class="text-static">Developer</h2>
                </div>

                <p>
                    I am a skilled full stack developer who is proactive,
                    creative, and always eager to learn. I am proficient in
                    English at the C2 level, which enables me to communicate
                    effectively with clients and colleagues from different
                    backgrounds. If you are looking for a talented and
                    passionate developer, I am the right candidate for you.
                </p>
                <button>
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
                    Download CV
                </button>
            </div>
            <div class="hero-right">
                <div class="ring-third">
                    <div class="ring-two">
                        <div class="ring-one">
                            <div class="img-holder">
                                <img src="@/assets/Lien.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles.scss";

.hero {
    padding: 50px 0;
    background-color: var(--color-dark);

    .hero-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-hero {
            max-width: 55%;

            h1 {
                color: var(--color-light);
                font-size: 72px;
            }

            .dev-roles {
                display: flex;
                gap: 15px;

                .text-container {
                    height: 64px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;

                    h2 {
                        color: var(--color-light-blue);
                        font-size: 64px;
                    }

                    .frontend {
                        margin-top: 0; // Start from the default position
                        animation: moveUp 8s infinite; // Apply the animation and make it infinite

                        // Keyframes for the animation
                        @keyframes moveUp {
                            0%,
                            20% {
                                margin-top: 0; // Start with the first title and stay for 2 seconds (20% of 6s = 1.2s)
                            }
                            33%,
                            53% {
                                margin-top: -90px; // Show the second title and stay for 2 seconds
                            }
                            66%,
                            86% {
                                margin-top: -180px; // Show the third title and stay for 2 seconds
                            }
                            100% {
                                margin-top: 0; // Loop back to the first title
                            }
                        }
                    }
                }

                .text-static {
                    color: var(--color-light-blue);
                    font-size: 64px;
                }
            }

            p {
                display: none;
                color: var(--color-light);
                font-size: 24px;
            }

            button {
                @include animation-btn(
                    var(--color-light),
                    10px 20px,
                    var(--color-light-blue)
                );
            }
        }

        .hero-right {
            .ring-third {
                padding: 25px;
                border: solid 1px rgb(244, 244, 244, 0.1);
                border-radius: 100%;
                .ring-two {
                    padding: 25px;
                    border: solid 1px rgb(244, 244, 244, 0.2);
                    border-radius: 100%;

                    .ring-one {
                        padding: 25px;
                        border: solid 1px rgb(100, 204, 197, 0.6);
                        border-radius: 100%;

                        .img-holder {
                            overflow: hidden;
                            height: 450px;
                            width: auto;
                            border-radius: 100%;
                            background-color: rgb(100, 204, 197, 0.8);

                            img {
                                margin-left: -25px;
                                margin-top: -30px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
