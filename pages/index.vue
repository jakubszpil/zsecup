<template>
  <div>
    <Hero />
    <section id="about">
      <Container>
        <h2>O turnieju</h2>
        <nuxt-link class="secion__link" to="/turniej">Dowiedz się więcej...</nuxt-link>
      </Container>
    </section>
    <section id="news">
      <Container>
        <h2>Aktualności</h2>
        <Posts :posts="articles" />
        <nuxt-link class="secion__link" to="/aktualnosci">Zobacz wszystkie aktualności</nuxt-link>
      </Container>
    </section>
    <section id="info">
      <Container>
        <h2>Informacje</h2>
        <nuxt-link class="secion__link" to="/informacje">Więcej informacji...</nuxt-link>
      </Container>
    </section>
    <ContactForm id="contact" :shortVariant="true" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    let articles = await $content('posts').fetch()
    articles = articles.filter((item, key) => {
      if (key < 3) return item
    })
    return { articles }
  },
}
</script>

<style lang="scss">
</style>
