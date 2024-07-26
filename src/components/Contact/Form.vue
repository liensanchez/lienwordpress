<script>
import axios from "axios";

export default {
  data() {
    return {
      formName: "",
      formEmail: "",
      formMessage: "",
      emailSent: false,
    };
  },
  computed: {
    isButtonDisabled() {
      return (
        this.formName.trim() === "" ||
        this.formEmail.trim() === "" ||
        this.formMessage.trim() === ""
      );
    }
  },
  methods: {
    async submitForm() {
      if (this.isButtonDisabled) return;

      try {
        const response = await axios.post(
          "https://formspree.io/f/xyyadolg",
          {
            name: this.formName,
            email: this.formEmail,
            message: this.formMessage,
          }
        );

        console.log("Form submitted successfully", response.data);
        this.emailSent = true;
      } catch (error) {
        console.error("Error submitting form", error);
      }
    }
  }
};
</script>

<template>
    <section class="contact-page custom-container">
        <article class="info-contact">
            <h1>Let's Talk</h1>
        </article>
        <article class="contact-form">
            <input type="text" placeholder="Your Name" v-model="formName" />
            <input type="email" placeholder="Your Email" v-model="formEmail" />
            <textarea
                name="message"
                placeholder="Your message"
                v-model="formMessage"
                id=""
            ></textarea>
            <button
                v-if="!emailSent"
                class="send"
                @click="submitForm"
                :disabled="isButtonDisabled"
            >
                Submit
            </button>
            <h2 v-if="emailSent">Thanks, we'll be in touch!</h2>
            <a class="go-back" href="/" v-if="emailSent">Home</a>
        </article>
    </section>
</template>

<style scoped lang="scss">
@import "@/assets/styles.scss";

.contact-page {
    margin: 150px auto;
    display: flex;
    justify-content: space-between;

    .info-contact {
        h1 {
            font-size: 64px;
        }
    }

    .contact-form {
        border-radius: 20px;
        background: var(--color-light-alt);
        padding: 45px;
        width: 100%;
        max-width: 50%;
        display: flex;
        flex-direction: column;
        gap: 50px;

        input,
        textarea {
            font-family: "DM Sans", sans-serif;
            padding: 10px;
            background: none;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            border-bottom: 1px solid var(--color-dark);

            &:focus {
                border-top: 0;
                border-left: 0;
                border-right: 0;
                border-bottom: 1px solid var(--color-dark);
                outline: none;
            }
        }
        .send,
        .go-back {
            @include basic-btn(var(--color-dark), 5px 15px, var(--color-light));
            margin: 0 auto;
        }
        
    }

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 50px auto;

        .contact-form {
            width: auto;
            max-width: 90%;
        }
    }
}
</style>
