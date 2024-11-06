<script>
import NavBar from "@/components/global/NavBar.vue";
import GenericHero from "@/components/global/GenericHero.vue";
import GetInTouch from "@/components/global/GetInTouch.vue";
import Footer from "@/components/global/Footer.vue";

export default {
    components: {
        NavBar,
        GenericHero,
        GetInTouch,
        Footer,
    },
};
</script>

<template>
    <NavBar />
    <GenericHero :hero_title="'About Me'" />
    <section class="aboutme-conainer custom-container">
        <div class="first-paragraph">
            <img class="aboutme-img" src="@/assets/LienAbout.jpeg" alt="Lien" />
            <div>
                <h2>Lien Sanchez</h2>
                <img class="aboutme-img-mobile" src="@/assets/LienAbout.jpeg" alt="Lien" />
                <br>
                <p>
                    I am a dedicated Full Stack Developer with a passion for
                    constant growth and learning. At 24, my curiosity fuels my
                    drive to explore new technologies and challenge myself
                    daily, aiming to expand my skills and expertise. My unique
                    background includes working as a clown, which, beyond the
                    entertainment, taught me invaluable teamwork, adaptability,
                    and resilience—qualities I bring to every project.
                    <br />
                </p>
                <p>
                    With a deep interest in history and a natural sociability, I
                    thrive in collaborative environments, where I contribute
                    positively and work diligently alongside others to achieve
                    shared goals. Known for my friendly nature, strong work
                    ethic, and eagerness to learn, I am always ready to take on
                    new challenges and make meaningful contributions to any
                    team.
                </p>
            </div>
        </div>
        <!-- <div>
          <h2>Skills</h2>
        </div> -->
        <div class="experience-container">
          <h2>Work Experience</h2>
          <div class="experience-card">
            <img src="@/assets/company-icons/alpha_efficiency_logo.jpeg" alt="AlphaEfficiency">
            <div class="experience-text">
              <h3 class="job-title">Full Stack Developer</h3>
              <p class="job-type">Alpha Efficiency · Jornada completa</p>
              <p class="job-time">ago. 2023 - actualidad · 1 año 4 meses</p>
              <ul>
                <li>Developed and deployed web applications and e-commerce platforms using PHP, Laravel, and Vue.js.</li>
                <li>Built and maintained scalable applications with Node.js, Express, MongoDB, and SQL databases.</li>
                <li>Experienced in AWS EC2 and Lightsail for deploying and managing applications in a cloud environment.</li>
                <li>Led client meetings to gather project requirements, provide updates, and ensure alignment with goals.</li>
                <li>Worked in an international environment with partners from Serbia, Colombia, Argentina, and the USA, fostering effective cross-cultural collaboration.</li>
                <li>Collaborated closely with UI/UX designers to create intuitive, user-centered designs.</li>
                <li>Managed deployment processes for seamless integration of new features and updates.</li>
                <li>Trained and mentored new developers, supporting their integration into the team and guiding their professional growth.</li>
              </ul>
            </div>
          </div>
        </div>
    </section>
    <GetInTouch />
    <Footer />
</template>

<style lang="scss" scoped>
.aboutme-conainer {
    padding: 75px 0;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .first-paragraph {
        display: flex;
        justify-content: space-between;
        gap: 25px;

        .aboutme-img {
            border-radius: 20px;
            max-width: 30%;
            aspect-ratio: 4/3;
            height: auto;
        }
        
        .aboutme-img-mobile {
          display: none
        }
    }

    .experience-container {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .experience-card {
        display: flex;
        gap: 15px;

        img {
          width: 64px;
          height: 64px;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 25px 0;

      .first-paragraph {
        flex-direction: column-reverse;

        .aboutme-img {
          display: none;
        }

        .aboutme-img-mobile {
          margin-top: 15px;
          display: flex;
          border-radius: 20px;
          max-width: 100%;
            aspect-ratio: 4/3;
            height: auto;
        }
      }
    }
}
</style>
