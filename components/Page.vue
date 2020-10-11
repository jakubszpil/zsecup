<template>
  <Section
    :id="
      article
        ? article.title
            .split(/\s/)
            .map((item) => item.split(/(!|\?)/)[0])
            .join('-')
            .toLowerCase()
        : id
    "
    :heading="article ? article.title : heading"
    :back="back || true"
  >
    <nuxt-content v-if="article" :document="article" class="nuxt-article" />
    <slot />
  </Section>
</template>

<script>
export default {
  props: ['article', 'heading', 'id', 'back'],
}
</script>

<style lang="scss">
section header,
article header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: $padding / 2;
  h2,
  h3 {
    margin: 0;
  }
}
.back-btn {
  border: 0;
  background: transparent;
  cursor: pointer;
  &,
  &__inner {
    width: $padding;
    height: $padding;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  &:hover {
    .back-btn__bar {
      &,
      &::before,
      &::after {
        background-color: $yellow;
      }
    }
  }
  &__bar {
    &,
    &::before,
    &::after {
      display: block;
      width: $padding / 2;
      position: relative;
      height: 3px;
      background-color: $white;
      border-radius: 3px;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: $padding / 3;
      transform-origin: left;
    }
    $deg: 45deg;
    &::before {
      transform: rotate(-1 * $deg);
    }
    &::after {
      transform: rotate($deg);
    }
  }
}

.nuxt-content-container {
  font-size: 18px;
  @media screen and (min-width: $mq--desktop) {
    font-size: 21px;
  }
  h1 {
    font-size: 2em;
    margin-bottom: 2em;
  }
  h2 {
    font-size: 1.5em;
    margin-bottom: 1.5em;
  }
  h3 {
    font-size: 1.17em;
    margin-bottom: 1.17em;
  }
  h4 {
    font-size: 1em;
    margin-bottom: 1em;
  }
  h5 {
    font-size: 0.83em;
    margin-bottom: 0.83em;
  }
  h6 {
    font-size: 0.67em;
    margin-bottom: 0.67em;
  }

  p {
    font-size: 1em;
    margin-bottom: 1em;
  }

  padding-bottom: $padding;
}
</style>
