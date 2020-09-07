<template>
  <footer class="footer">
    <Container>
      <p>{{ new Date().getFullYear() }} &copy; Wszelkie prawa zastrzeżone | <span class="footer-title">ZSE4CUP</span></p>
      <br />
      <p>
        Autorzy strony: <br />
        Kapcer Grela && Jakub Szpil
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
  text-align: center;
  font-weight: 700;
  background-color: $yellow;
  &-title {
    font-family: $font--header;
  }
}
</style>
