<template>
  <section>
    <Container>
      <article>
        <h1 v-if="hasHeading">{{ article.title }}</h1>
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