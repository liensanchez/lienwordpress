<script>
import ButtonSmall from "./ButtonSmall.vue";
export default {
    data() {
        return {
            style: {
                borderColor: "#FFCA42",
                backgroundColor: "#FFCA42",
            },
            menuDropdown: false,
            menuMobile: false,
        };
    },
    components: {
        ButtonSmall,
    },
    methods: {
        toggleMenu() {
            this.menuDropdown = !this.menuDropdown;
        },
        toggleMobile() {
            this.menuMobile = !this.menuMobile;
        },
    },
};
</script>

<template>
    <div class="navbar-container">
        <div class="mobile-menu" v-if="this.menuMobile">
            <div class="close-container">
                <button @click="toggleMobile" class="close-burger">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M4 4L20 20M20 4L4 20"
                                stroke="#000000"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>

            <a href="/#about" class="option-button">About Me</a>
            <a href="/#technologies" class="option-button">Technologies</a>
            <a href="/#projects" class="option-button">Projects</a>
            <a href="/#contact"  class="option-button">
                <ButtonSmall :buttonText="'Contact'" :style="style" />
            </a>
        </div>
        <div class="custom-container">
            <div class="navbar-left">
                <a href="/" class="navbar-logo">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.49997 12.4L5 17.7999"
                            stroke="#FFCA42"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.49997 12.4L5 7"
                            stroke="#FFCA42"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <line
                            x1="18"
                            y1="18"
                            x2="10"
                            y2="18"
                            stroke="#FFCA42"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <h1 class="navbar-title">Liendev</h1>
                </a>
            </div>

            <button class="option-burger" @click="toggleMobile">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M4 6H20M4 12H20M4 18H20"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </g>
                </svg>
            </button>

            <div class="navbar-options">
                <a href="/#about" class="option-button">About Me</a>
                <a href="/#projects" class="option-button">Projects</a>
                <a href="/#technologies" class="option-button">Technologies</a>
                <a href="/#contact" class="option-button">
                    <ButtonSmall :buttonText="'Contact'" :style="style" />
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.navbar-container {
    padding: 35px 0;
    background-color: #1b3764;
    width: 100%;
    display: flex;
    justify-content: center;

    .mobile-menu {
        display: none;
    }

    .custom-container {
        display: flex;
        justify-content: space-between;

        .navbar-left {
            width: 350px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .navbar-logo {
                text-decoration: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 5px;

                .navbar-title {
                    font-family: "Inter", sans-serif;
                    font-size: 28px;
                    color: #ffffff;
                    font-weight: 700;
                }
            }

            .navbar-social {
                display: flex;
                gap: 10px;

                .social-button {
                    cursor: pointer;
                    width: 45px;
                    height: 45px;
                    background: #ffffff;
                    border: none;
                    transition: fill 0.3s ease;

                    svg {
                        fill: #1b3764;
                        transition: fill 0.3s ease;
                    }

                    &:hover {
                        border: solid 1px #ffca42;
                        background: #1b3764;

                        svg {
                            fill: #ffffff;
                        }
                    }
                }
            }
        }

        .option-burger {
            display: none;
        }

        .navbar-options {
            display: flex;
            gap: 20px;
            height: 50px;

            .option-button {
                display: flex;
                align-items: center;
                gap: 5px;
                cursor: pointer;
                font-family: "Inter", sans-serif;
                font-size: 17px;
                color: #ffffff;
                font-weight: 500;
                text-decoration: none;
                border: none;
                background: none;
                background-color: transparent;

                &:hover {
                    text-decoration: underline;
                }

                span {
                    display: flex;
                    align-items: center;
                }
            }

            .dropdown-option {
                width: 70px;
                display: flex;
                align-content: center;
                position: relative;
                z-index: 2;

                .dropdown-buttons {
                    margin-left: -75px;
                    margin-top: 50px;
                    display: flex;
                    flex-direction: column;
                    opacity: 0;
                    transition: opacity 0.3s ease;

                    .option-button {
                        text-decoration: none;
                        background: #1b3764;
                        padding: 5px;
                    }

                    &.visible {
                        opacity: 1;
                    }
                }
            }
        }
    }

    @media (max-width: 1200px) {
        padding: 35px 0;
        .mobile-menu {
            margin-top: -35px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            position: fixed;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.7);
            width: 100%;
            height: 100%;

            .close-container {
                width: 90%;
                display: flex;
                justify-content: flex-end;
                padding: 35px;

                .close-burger {
                    width: 50px;
                    background: #ffca42;
                    border: none;
                }
            }

            .option-button {
                display: flex;
                align-items: center;
                gap: 15px;
                cursor: pointer;
                font-family: "Inter", sans-serif;
                font-size: 25px;
                color: #ffffff;
                font-weight: 500;
                border: none;
                background: none;
                background-color: transparent;

                &:hover {
                    text-decoration: underline;
                }

                span {
                    display: flex;
                    align-items: center;
                }
            }
        }

        .custom-container {
            .navbar-left {
                .navbar-social {
                    display: none;
                }
            }

            .option-burger {
                display: flex;
                justify-content: center;
                width: 50px;
                background: #ffca42;
                border: none;
            }

            .navbar-options {
                display: none;
            }
        }
    }
}
</style>
