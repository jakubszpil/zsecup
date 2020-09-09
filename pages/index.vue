<template>
  <div>
    <Hero />
    <section id="about">
      <Container>
        <h3>O turnieju</h3>
        <nuxt-link class="secion__link" to="/turniej">Dowiedz się więcej...</nuxt-link>
      </Container>
    </section>
    <section id="news">
      <Container>
        <h3>Aktualności</h3>
        <Posts :posts="articles" />
        <nuxt-link class="secion__link" to="/aktualnosci">Zobacz wszystkie aktualności</nuxt-link>
      </Container>
    </section>
    <section id="info">
      <Container>
        <h3>Informacje</h3>
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
      if (key < 4) return item
    })
    return { articles }
  },
}
</script>

<style lang="scss">
.shortcuts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($padding * 7, 1fr));
  /* grid-template-rows: repeat(auto-fit, 1fr); */
  grid-gap: $padding;

  &-item {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    background-color: $black;
    box-shadow: 0 0 $padding / 2 rgba(0, 0, 0, 0.5);
    border-radius: $padding / 2;
    &-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-end;
      padding: $padding / 3 * 2;
      color: rgba($color: $white, $alpha: 0.8);
      position: relative;
      z-index: 1;
      &__image {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
    }
  }
}

section h3 {
  font-size: 24px;
  margin-bottom: $padding;
}
</style>
