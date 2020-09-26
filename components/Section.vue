<template>
  <section :id="id">
    <Container>
      <header>
        <nuxt-link v-if="back" class="back-btn" to="/" title="Powrót do strony głównej">
          <div class="back-btn__inner">
            <span class="back-btn__bar"></span>
          </div>
        </nuxt-link>
        <h2>
          <nuxt-link class="link" :to="`${route}#${id}`">{{ heading }}</nuxt-link>
        </h2>
      </header>
      <slot />
    </Container>
  </section>
</template>

<script>
export default {
  props: ['id', 'heading', 'back'],
  data() {
    return {
      route: this.$route.path,
    }
  },
}
</script>

<style>
</style>