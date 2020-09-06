<template>
  <section>
    <Container>
      <h2>Najnowsze aktualności</h2>
      <ul class="shortcuts">
        <li class="shortcuts-item" v-for="(article, key) in articles" :key="key">
          <nuxt-link class="link shortcuts-item" :to="'/aktualnosci/' + article.slug">
            <div class="shortcuts-item-content">
              <!-- <img :src="`/img/${article.slug}.jpg`" class="shortcuts-item-content__image" :alt="article.slug" /> -->
              <h3 class="shortcuts-item-content__title">{{ article.title }}</h3>
              <p class="shortcuts-item-content__description">{{ article.description }}</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
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
