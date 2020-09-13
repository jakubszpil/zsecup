<template>
  <section>
    <Container>
      <article>
        <h2 v-if="hasHeading">{{ article.title }}</h2>
        <nuxt-content :document="article" />
      </article>
    </Container>
  </section>
</template>

<script>
export default {
  props: ['article', 'hasHeading'],
}
</script>

<style>
</style>