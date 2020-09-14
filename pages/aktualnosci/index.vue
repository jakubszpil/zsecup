<template>
  <section>
    <Container>
      <header>
        <button class="back-btn" @click="$router.go(-1)">
          <div class="back-btn__inner">
            <span class="back-btn__bar"></span>
          </div>
        </button>
        <h2>Najnowsze aktualności</h2>
      </header>
      <Posts :posts="articles" />
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
