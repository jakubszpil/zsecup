<template>
  <section>
    <Container>
      <h2>{{ article.title }}</h2>
      <nuxt-content :document="article" />
    </Container>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('posts', params.slug).fetch()
    return { article }
  },
}
</script>

<style></style>
