<template>
  <section>
    <Container>
      <h2 v-if="shortVariant">Szybki kontakt</h2>
      <h2 v-else>Kontakt</h2>
      <form @submit="handleSubmit" class="form">
        <div class="form-field" v-if="!shortVariant">
          <label for="name" class="form-field__label">Imię</label>
          <input v-model="user.name" type="text" id="name" name="name" class="form-field__input" required placeholder="Imię" />
        </div>
        <div class="form-field" v-if="!shortVariant">
          <label for="surname" class="form-field__label">Nazwisko</label>
          <input v-model="user.surname" type="text" id="surname" name="surname" class="form-field__input" required placeholder="Nazwisko" />
        </div>
        <div class="form-field">
          <label for="email" class="form-field__label">Email</label>
          <input v-model="user.email" type="email" name="email" id="email" class="form-field__input" required placeholder="Email" />
        </div>
        <div class="form-field" v-if="!shortVariant">
          <label for="topic" class="form-field__label">Temat</label>
          <input v-model="user.topic" type="text" name="topic" id="topic" class="form-field__input" required placeholder="Temat wiadomości" />
        </div>
        <div class="form-field">
          <label for="message" class="form-field__label">Wiadomosć</label>
          <textarea v-model="user.message" id="message" name="message" class="form-field__textarea" required placeholder="Treść wiadomości"></textarea>
        </div>
        <button class="button form__button" type="submit">Wyślij</button>
        <p v-if="shortVariant">Jeśli chcesz się o coś zapytać lub chcesz się rozpisać, przejdź do <nuxt-link to="/kontakt">formularzu kontaktowego</nuxt-link></p>
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
    handleSubmit(e) {
      e.preventDefault()
      console.log(this.user)
    },
  },
  data() {
    return {
      user: {
        email: '',
        message: '',
      },
    }
  },
}
</script>

<style lang="scss">
.form {
  padding: $padding / 2 0;
  max-width: $max-width / 5 * 2;
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
    margin: $padding 0;
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
  /* 

  @media screen and (min-width: $mq--desktop){
    max-w
    
  } */
}
</style>
