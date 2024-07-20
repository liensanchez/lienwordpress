<script>
export default {
    data() {
        return {
            menuDropdown: false,
            menuMobile: false,
        };
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
    <header>
        <div class="header-content custom-container">
            <div class="header-left">
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
            </div>
            <div class="header-center">
                <a class="header-btn-center" href="#">Home</a>
                <a class="header-btn-center" href="#">About</a>
                <a class="header-btn-center" href="#">Portfolio</a>
                <a class="header-btn-right" href="#">Contact</a>
            </div>
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
    }
}
</style>
