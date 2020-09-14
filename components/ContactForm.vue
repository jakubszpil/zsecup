<template>
  <section>
    <Container>
      <header>
        <button v-if="$route.path !== '/'" class="back-btn" @click="$router.go(-1)">
          <div class="back-btn__inner">
            <span class="back-btn__bar"></span>
          </div>
        </button>
        <h2 v-if="shortVariant">Szybki kontakt</h2>
        <h2 v-else>Kontakt</h2>
      </header>
      <form @submit="handleSubmit" class="form">
        <div class="form-field" v-if="!shortVariant">
          <label for="name" class="form-field__label">Imię</label>
          <input
            v-model="user.name"
            type="text"
            id="name"
            name="name"
            class="form-field__input"
            required
            placeholder="Imię"
          />
        </div>
        <div class="form-field" v-if="!shortVariant">
          <label for="surname" class="form-field__label">Nazwisko</label>
          <input
            v-model="user.surname"
            type="text"
            id="surname"
            name="surname"
            class="form-field__input"
            required
            placeholder="Nazwisko"
          />
        </div>
        <div class="form-field">
          <label for="email" class="form-field__label">Email</label>
          <input
            v-model="user.email"
            type="email"
            name="email"
            id="email"
            class="form-field__input"
            required
            placeholder="Email"
          />
        </div>
        <div class="form-field" v-if="!shortVariant">
          <label for="subject" class="form-field__label">Temat</label>
          <input
            v-model="user.subject"
            type="text"
            name="subject"
            id="subject"
            class="form-field__input"
            required
            placeholder="Temat wiadomości"
          />
        </div>
        <div class="form-field">
          <label for="message" class="form-field__label">Wiadomość</label>
          <textarea
            v-model="user.message"
            id="message"
            name="message"
            class="form-field__textarea"
            required
            placeholder="Treść wiadomości"
          ></textarea>
        </div>
        <button class="button form__button" name="sendMessage" type="submit">Wyślij</button>
        <p v-if="shortVariant">
          Jeśli chcesz się o coś zapytać lub chcesz się rozpisać, przejdź do
          <nuxt-link to="/kontakt">formularzu kontaktowego</nuxt-link>
        </p>

        <p
          v-if="mailing.response"
          class="notification"
          :class="[mailing.send ? 'notification--success' : 'notification--error']"
        >{{ mailing.send ? "Wiadomość została pomyślnie wysłana :)" : "Ups, coś poszło nie tak :/ Spróbuj jeszcze raz"}}</p>
      </form>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    shortVariant: Boolean,
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      try {
        const { data } = await this.$axios.post('/api/mail.php', { ...this.user })
        this.mailing = data
        if (data.response.status === 200)
          this.user = {
            email: '',
            message: '',
          }
      } catch (e) {
        this.mailing = {
          response: { status: 400 },
          send: false,
          error: 'Error occured',
        }
      }
    },
  },
  data() {
    return {
      user: {
        email: '',
        message: '',
      },
      mailing: {},
    }
  },
}
</script>

<style lang="scss">
.form {
  padding: $padding / 2 0;
  max-width: $mq--mobile - $padding * 2.5;
  margin: 0 auto;

  &,
  &-field {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }
  p {
    margin-top: $padding;
  }
  &-field {
    &__input,
    &__label,
    &__textarea {
      width: 100%;
    }
    &__label {
      margin-bottom: $padding / 3;
      font-size: 18px;
    }
    &__input,
    &__textarea {
      border: 0;
      line-height: $padding / 2;
      padding: $padding / 4;
      background-color: $white;
      margin-bottom: $padding / 2;
      &,
      &::placeholder {
        font-family: $font;
        color: $black;
      }
      &::placeholder {
        opacity: 0.75;
      }
    }
    &__textarea {
      min-height: ($padding / 2) * 6 + $padding / 1.5;
      resize: none;
    }
  }
  &__button {
    width: 100%;
  }

  .notification {
    text-align: left;
    align-self: center;
    width: 100%;
    margin: $padding 0;
    &--success {
      color: #7bed9f;
    }
    &--error {
      color: $red;
    }
  }

  @media screen and (min-width: $mq--desktop) {
    p,
    .notification {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
