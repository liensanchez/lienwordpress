<script>
export default {
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isActive = !this.isActive;
        },
    },
};
</script>

<template>
    <header>
        <div class="header-content custom-container">
            <a href="/" class="header-left">
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.49997 12.4L5 17.7999"
                        stroke="#0c0c0c"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M9.49997 12.4L5 7"
                        stroke="#0c0c0c"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <line
                        x1="18"
                        y1="18"
                        x2="10"
                        y2="18"
                        stroke="#0c0c0c"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <h1 class="navbar-title">Liensdev</h1>
            </a>
            <div
                :class="{
                    'header-center': true,
                    'header-center-active': isActive,
                }"
            >
                <a class="header-btn-center" href="/">Home</a>
                <a class="header-btn-center" href="#">About</a>
                <a class="header-btn-center" href="#">Portfolio</a>
                <a class="header-btn-right" href="/contact">Contact</a>
            </div>
            <button class="mobile-menu" v-on:click="toggleMenu">
                <svg
                    v-if="!isActive"
                    fill="#000000"
                    width="48px"
                    height="48px"
                    viewBox="0 0 1920 1920"
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
                            d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z"
                            fill-rule="evenodd"
                        ></path>
                    </g>
                </svg>
                <svg
                    v-else
                    fill="#000000"
                    width="48px"
                    height="48px"
                    viewBox="0 0 1920 1920"
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
                            d="M1827.701 0 960.065 867.636 92.3 0 0 92.168l867.636 867.767L0 1827.57 92.299 1920l867.766-867.766L1827.701 1920l92.168-92.43-867.635-867.635 867.635-867.767z"
                            fill-rule="evenodd"
                        ></path>
                    </g>
                </svg>
            </button>
        </div>
    </header>
</template>

<style scoped lang="scss">
@import "@/assets/styles.scss";

header {
    width: 100%;
    padding: 18px 0;
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header-left {
            display: flex;
            gap: 5px;
            h1 {
                color: var(--color-dark);
            }
        }

        .header-center {
            display: flex;
            gap: 30px;

            .header-btn-center {
                @include basic-btn(var(--color-light), 5px, var(--color-dark));
            }

            .header-btn-right {
                @include basic-btn(
                    var(--color-dark),
                    5px 15px,
                    var(--color-light)
                );
            }
        }

        .mobile-menu {
            display: none;
        }
    }

    @media (max-width: 768px) {
        .header-content {
            .header-left {
                svg {
                    position: relative;
                    z-index: 15;
                }
                h1 {
                    font-size: 28px;
                    position: relative;
                    z-index: 15;
                }
            }
            .header-center {
                position: absolute;
                width: 100vw;
                height: 100vh;
                z-index: 10;
                background-color: var(--color-light);
                left: 0;
                top: -100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                transition: top 0.5s ease;
            }

            .header-center-active {
                top: 0;
            }

            .mobile-menu {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                background: none;
                z-index: 15;
            }
        }
    }
}
</style>
