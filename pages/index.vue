<template>
  <div>
    <Hero />
    <Section id="about" heading="O turnieju">
      <nuxt-link class="secion__link" to="/turniej">Dowiedz się więcej...</nuxt-link>
    </Section>
    <Section id="news" heading="Aktualności">
      <Posts :posts="articles" />
      <nuxt-link class="secion__link" to="/aktualnosci">Zobacz wszystkie aktualności</nuxt-link>
    </Section>
    <Section id="info" heading="Informacje">
      <nuxt-link class="secion__link" to="/informacje">Więcej informacji...</nuxt-link>
    </Section>
    <Section id="contact" heading="Kontakt">
      <ContactForm :shortVariant="true" />
    </Section>
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
