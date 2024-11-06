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
                <div class="hero-buttons">
                    <a href="/contact">Contact</a>
                    <a href="/portfolio">Portfolio</a>
                </div>
                
            </div>
            <div class="hero-right">
                <div class="ring-third">
                    <div class="ring-two">
                        <div class="ring-one">
                            <div class="img-holder">
                                <div>
                                    <p>holas</p>
                                </div>
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
    min-height: 90vh;
    /* padding: 50px 0; */
    background-image: url("@/assets/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;

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
                        white-space: nowrap;
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

            .hero-buttons {
                display: flex;
                gap: 25px;
            }

            p {
                display: none;
                color: var(--color-light);
                font-size: 24px;
            }

            a {
                margin: 25px auto;
                @include basic-btn(
                    var(--color-light),
                    10px 25px,
                    var(--color-dark)
                );
                max-width: 70px;
                border-radius: 8px;
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
                            max-height: 400px;
                            max-width: 400px;
                            border-radius: 100%;
                            background-color: rgb(100, 204, 197, 0.8);

                            img {
                                margin-left: -30px;
                                margin-top: -50px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1655px) {
        .hero-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left-hero {
                max-width: 65%;

                h1 {
                    font-size: 72px;
                }

                .dev-roles {
                    gap: 15px;

                    .text-container {
                        height: 64px;
                        gap: 15px;

                        h2 {
                            font-size: 64px;
                        }
                    }

                    .text-static {
                        font-size: 64px;
                    }
                }
            }

            .hero-right {
                .ring-third {
                    padding: 15px;

                    .ring-two {
                        padding: 15px;

                        .ring-one {
                            padding: 15px;

                            .img-holder {
                                height: 300px;
                                width: 300px;

                                img {
                                    width: 300px;
                                    height: 400px;
                                    margin-left: -10px;
                                    margin-top: -45px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1360px) {
        .hero-content {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left-hero {
                h1 {
                    font-size: 72px;
                    text-align: center;
                }

                .dev-roles {
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 15px;

                    .text-container {
                        height: 64px;
                        gap: 15px;

                        h2 {
                            font-size: 64px;
                        }
                    }

                    .text-static {
                        font-size: 64px;
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        .hero-content {
            flex-direction: column-reverse;

            .left-hero {
                max-width: 100%;
                h1 {
                    font-size: 48px;
                }

                .dev-roles {

                    .text-container {
                        height: 36px;

                        h2 {
                            color: var(--color-light-blue);
                            font-size: 36px;
                            white-space: nowrap;
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
                                    margin-top: -55px; // Show the second title and stay for 2 seconds
                                }
                                66%,
                                86% {
                                    margin-top: -115px; // Show the third title and stay for 2 seconds
                                }
                                100% {
                                    margin-top: 0; // Loop back to the first title
                                }
                            }
                        }
                    }

                    .text-static {
                        font-size: 36px;
                    }
                }
            }

            .hero-right {
                .ring-third {
                    .ring-two {
                        .ring-one {
                            .img-holder {
                                height: 250px;
                                width: 250px;

                                img {
                                    width: 250px;
                                    height: 350px;
                                    margin-left: -5px;
                                    margin-top: -45px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
