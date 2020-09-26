<template>
  <form @submit="handleSubmit" class="form" @reset="handleReset">
    <FormField v-if="!shortVariant" label="Imię" id="name" name="name" v-model="user.name" type="text" />
    <FormField v-if="!shortVariant" label="Nazwisko" id="surname" name="surname" v-model="user.surname" type="text" />
    <FormField label="Email" id="email" name="email" v-model="user.email" type="email" />
    <FormField v-if="!shortVariant" label="Temat" id="subject" name="subject" v-model="user.subject" type="text" />
    <FormField label="Wiadomość" id="message" name="message" v-model="user.message" type="message" />

    <button class="button form__button" name="sendMessage" type="submit">Wyślij</button>
    <p v-if="shortVariant">
      Jeśli chcesz się o coś zapytać lub chcesz się rozpisać, przejdź do
      <nuxt-link to="/kontakt">formularzu kontaktowego</nuxt-link>
    </p>

    <p v-if="mailing.response" class="notification" :class="[mailing.send ? 'notification--success' : 'notification--error']">
      {{ mailing.send ? 'Wiadomość została pomyślnie wysłana :)' : 'Ups, coś poszło nie tak :/ Spróbuj jeszcze raz' }}
    </p>
  </form>
</template>

<script>
export default {
  props: {
    shortVariant: Boolean,
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      // try {
      //   const { data } = await this.$axios.post('/api/mail.php', {
      //     ...this.user,
      //   })
      //   this.mailing = data
      //   if (data.response.status === 200)
      //     this.user = {
      //       email: '',
      //       message: '',
      //     }
      // } catch (e) {
      //   this.mailing = {
      //     response: { status: 400 },
      //     send: false,
      //     error: 'Error occured',
      //   }
      // }

      this.mailing = {
        response: { status: 200 },
        send: true,
        error: null,
      }
      console.log('haah nie wysłano')
      this.user = {
        email: '',
        message: '',
        name: '',
        surname: '',
        subject: '',
      }
    },
    handleReset(e) {
      e.preventDefault()
      if (!this.shortVariant)
        this.user = {
          email: '',
          message: '',
          name: '',
          surname: '',
          subject: '',
        }
      else
        this.user = {
          email: '',
          message: '',
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
  padding: $padding / 2 0 $padding;
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
    margin-bottom: $padding / 2;
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
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
