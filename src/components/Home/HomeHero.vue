<template>
    <div>
        
    </div>
</template>
<!-- <script>
import Titles from "../global/Titles.vue";
import Paragraph from "../global/Paragraph.vue";
import ButtonSmall from "@/components/global/ButtonSmall.vue";

export default {
    components: {
        Titles,
        Paragraph,
        ButtonSmall,
    },
    data() {
        return {
            HeroTitleStyle: {
                color: "#FFFFFF",
            },
            HeroTitle: "Hi! I'm Lien Sanchez",
            SubHeroTitle: "Full Stack Developer",
            HeroText:
                "I am a skilled full stack developer who is proactive, creative, and always eager to learn. I am proficient in English at the C2 level, which enables me to communicate effectively with clients and colleagues from different backgrounds. If you are looking for a talented and passionate developer, I am the right candidate for you.",
            HeroButton: "Contact me",
            HeroButtonStyle: {
                borderColor: "#FFCA42",
                backgroundColor: "#FFCA42",
            },
        };
    },
};
</script>

<template>
    <div class="home-hero-container">
        <div class="custom-container">
            <div class="home-hero-content">
                <div class="home-hero-info">
                    <Titles
                        :titleOne="this.HeroTitle"
                        :style="HeroTitleStyle"
                    />
                    <Titles
                        :titleTwo="this.SubHeroTitle"
                        :style="HeroTitleStyle"
                    />
                    <Paragraph :text="this.HeroText" />

                    <a href="/#contact">
                        <ButtonSmall
                            :buttonText="HeroButton"
                            :style="HeroButtonStyle"
                        />
                    </a>
                </div>

                <img src="@/assets/Lien.png" class="profile-image" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.home-hero-container {
    padding: 55px 0;
    background-color: #1b3764;
    display: flex;
    justify-content: center;

    .home-hero-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 70px;

        .loader {
            font-weight: bold;
            font-family: sans-serif;
            font-size: 30px;
            animation: l1 1s linear infinite alternate;
        }
        .loader:before {
            content: "Loading...";
        }
        @keyframes l1 {
            to {
                opacity: 0;
            }
        }

        .profile-image {
            height: auto;
            max-width: 40%;
        }

        .home-hero-info {
            display: flex;
            flex-direction: column;
            gap: 40px;

            a {
                max-width: 230px;
            }

            .mobile-book {
                display: none;
            }
        }

        .home-hero-count {
            display: flex;
            align-items: center;
            gap: 5px;

            span {
                font-family: "Cardo", serif;
                font-size: 24px;
                color: #ffffff;
            }

            p {
                font-family: "Inter", sans-serif;
                font-size: 24px;
                color: #b4c7e7;
            }
        }
    }

    @media (max-width: 1200px) {
        padding: 0 0 25px;

        .home-hero-content {
            flex-direction: column-reverse;
            gap: 20px;

            .profile-image {
                margin-top: -55px;
            }

            .home-hero-info {
                text-align: center;
                align-items: center;
                gap: 10px;

                .mobile-book {
                    display: flex;
                    max-width: 90%;
                }
            }

            .home-hero-count {
                span,
                p {
                    font-size: 20px;
                }
            }

            .desktop-book {
                display: none;
            }
        }
    }
}
</style>
 -->