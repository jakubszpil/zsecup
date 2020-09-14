<template>
  <section>
    <Container>
      <article>
        <header>
          <button class="back-btn" @click="$router.go(-1)">
            <div class="back-btn__inner">
              <span class="back-btn__bar"></span>
            </div>
          </button>
          <h2 v-if="hasHeading">{{ article.title }}</h2>
        </header>
        <slot />
        <nuxt-content v-if="article" :document="article" />
      </article>
    </Container>
  </section>
</template>

<script>
export default {
  props: ['article', 'hasHeading'],
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
  margin-right: $padding / 3;
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
    &::before {
      transform: rotate(-30deg);
    }
    &::after {
      transform: rotate(30deg);
    }
  }
}
</style>