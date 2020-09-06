<template>
  <div>
    <Hero />
    <section class="d">
      <Container>
        <h2>About</h2>

        <article v-for="(item, key) in [1,2,3,4,5]" :key="key">
          <h2>article title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro pariatur consectetur cum excepturi eveniet perferendis dolore. Natus molestias blanditiis neque impedit aspernatur recusandae quisquam officia reprehenderit adipisci, numquam quasi minus assumenda libero autem tempora asperiores nam quidem! Fugit, ratione magnam.</p>
        </article>
      </Container>
    </section>
    <ContactForm :shortVariant="true" />
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
