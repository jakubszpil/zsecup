<template>
  <div>
    <Hero />
    <section>
      <Container>
        <h2>O turnieju</h2>
        <nuxt-link class="secion__link" to="/turniej">Dowiedz się więcej...</nuxt-link>
      </Container>
    </section>
    <section>
      <Container>
        <h2>Aktualności</h2>
        <ul class="shortcuts">
          <li class="shortcuts-item" v-for="(article, key) in articles" :key="key">
            <nuxt-link class="link shortcuts-item" :to="'/aktualnosci/' + article.slug">
              <div class="shortcuts-item-content">
                <img :src="`/img/${article.slug}.jpg`" class="shortcuts-item-content__image" :alt="article.slug" />
                <h3 class="shortcuts-item-content__title">{{ article.title }}</h3>
                <p class="shortcuts-item-content__description">{{ article.description }}</p>
              </div>
            </nuxt-link>
          </li>
        </ul>
        <nuxt-link class="secion__link" to="/aktualnosci">Zobacz wszystkie aktualności</nuxt-link>
      </Container>
    </section>
    <section>
      <Container>
        <h2>Informacje</h2>
        <nuxt-link class="secion__link" to="/informacje">Więcej informacji...</nuxt-link>
      </Container>
    </section>
    <ContactForm :shortVariant="true" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('posts').fetch()
    return { articles }
  },
}
</script>

<style lang="scss">
.shortcuts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($padding * 8, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-gap: $padding;

  &-item {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    width: 100%;
    &-content {
      width: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: flex-end;
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
</style>
