<template>
  <section>
    <Container>
      <article>
        <h2>{{ article.title }}</h2>
        <nuxt-content :document="article" />
      </article>
    </Container>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('', 'informacje').fetch()
    return { article }
  },
}
</script>

<style>
</style>