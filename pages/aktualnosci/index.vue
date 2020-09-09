<template>
  <section>
    <Container>
      <h2>Najnowsze aktualności</h2>
      <Posts :posts="articles" />
    </Container>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('posts').fetch()
    return { articles }
  },
}
</script>

<style></style>
