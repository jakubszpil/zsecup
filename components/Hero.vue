<template>
  <section class="hero" ref="hero">
    <Container class="hero__container">
      <h2 class="hero-title">
        <span class="hero-title__line">ZSE4CUP</span>
        <span class="hero-title__line">Czwarta edycja kultowego turnieju esportowego</span>
        <span class="hero-title__line">Akademii Loretańskiej</span>
      </h2>
      <p class="hero__quote">Przeżyj niesamowite chwile</p>

      <div class="hero-links">
        <nuxt-link class="button hero-links__item" to="/turniej">Turniej</nuxt-link>
        <nuxt-link class="button hero-links__item" to="/kontakt">Kontakt</nuxt-link>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      const { height } = this.$refs.hero.getBoundingClientRect()
      const offset = document.body.scrollTop || document.documentElement.scrollTop
      if (offset < height) this.$refs.hero.style.backgroundPositionY = `${(offset * Math.PI) / 8}px`
      // else if (offset < 0) this.$refs.hero.style.backgroundPositionY = '0px'
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss">
.hero {
  width: 100%;
  height: 100vh;
  max-height: 800px;
  position: relative;
  top: 0;
  left: 0;
  background-image: url('/img/hero.jpg');
  background-position-x: center;
  background-position-y: 0;
  background-size: cover;
  text-align: left;
  z-index: 0;
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -2;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, $black, rgba($color: $black, $alpha: 0.5), transparent);
  }

  &-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    &__line {
      font-weight: 400;
      font-size: 24px;
      margin-bottom: $padding / 4;
      &:nth-child(1) {
        font-family: $font--header;
        font-size: 36px;
      }
      &:nth-child(3) {
        color: $yellow;
      }
    }
  }
  &-links {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    &__item {
      width: 100%;
      &:nth-child(1) {
        margin: $padding / 2 0;
      }
    }
  }
  &__quote {
    font-size: 24px;
    opacity: 0.75;
  }

  @media screen and (min-width: $mq--desktop) {
    &__container {
      align-items: center;
    }
    &-links {
      margin-top: $padding / 2;
      &__item {
        width: auto;
        min-width: $padding * 4;
        &:nth-child(1) {
          margin: 0;
          margin-right: $padding / 3;
        }
      }
    }
    text-align: center;
    &-title {
      align-items: center;
      &__line {
        font-size: 36px;
        &:nth-child(1) {
          font-size: 60px;
        }
      }
    }
  }
}
</style>