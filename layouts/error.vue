<template>
  <section>
    <Container>
      <h1 v-if="error.statusCode === 404">Błąd 404: Nie znaleziono strony :(</h1>
      <h1 v-else>Wystąpił niespodziewany błąd :/</h1>
      <nuxt-link to="/">Powrót do strony głównej</nuxt-link>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    error: Object,
  },
  layout: 'default',
}
</script>

<style></style>
