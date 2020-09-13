<template>
  <footer class="footer">
    <Container>
      <p>
        {{ new Date().getFullYear() }} &copy; Wszelkie prawa zastrzeżone
        <br />
        <nuxt-link class="footer-title link" to="/">ZSE4CUP</nuxt-link>
      </p>
      <div>
        <nuxt-link to="/regulamin">Regulamin</nuxt-link>
        <nuxt-link to="/polityka-prywatnosci">Polityka Prywatności</nuxt-link>
      </div>
      <br />
      <p>
        Autorzy strony:
        <br />Jakub Szpil && Kacper Grela
      </p>
    </Container>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  padding: $padding 0;
  color: $black;
  text-align: left;
  @media screen and (min-width: $mq--desktop) {
    text-align: center;
  }
  font-weight: 700;
  background-color: $yellow;
  &-title {
    font-family: $font--header;
  }
  a {
    &:hover {
      color: inherit;
    }
  }
}
</style>
