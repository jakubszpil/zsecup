<template>
  <section>
    <Container>
      <article>
        <nuxt-content :document="article" />
      </article>
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

<style lang="scss">
article {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: $padding / 2 0;
  }

  p {
    margin-bottom: $padding / 2;
  }
  p + p {
    margin-bottom: $padding;
  }
}
</style>
