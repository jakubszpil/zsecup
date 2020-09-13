<template>
  <ul class="shortcuts">
    <Post class="shortcuts-item" v-for="(post, key) in posts" :key="key">
      <div class="shortcuts-item-content" :style="`background-image: url('/img/hero.jpg')`">
        <h3 class="shortcuts-item-content__title">{{ post.title }}</h3>
        <p
          v-show="!$store.state.menu.mobile"
          class="shortcuts-item-content__description"
        >{{ post.description }}</p>
        <nuxt-link :to="'/aktualnosci/' + post.slug" class="link button">Zobacz więcej</nuxt-link>
      </div>
    </Post>
  </ul>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
}
</script>

<style lang="scss">
.shortcuts {
  margin: $padding 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px - 72px, 1fr));
  @media screen and (min-width: $mq--desktop) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  grid-gap: $padding;

  &-item {
    width: 100%;
    background-color: lighten($color: $black, $amount: 2);
    box-shadow: 0 0 $padding rgba($color: darken($color: $black, $amount: 2), $alpha: 0.8);
    justify-content: center;
    align-items: center;
    position: relative;
    &,
    &-content {
      display: flex;
      flex-direction: column;
    }
    &-content {
      padding: $padding / 2;
      width: 100%;
      height: 100%;
      justify-content: flex-start;
      align-items: flex-start;
      background-position: center;
      background-size: cover;
      z-index: 0;
      &::before {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        display: block;
        z-index: -1;
        background-color: rgba($color: $black, $alpha: 0.8);
      }
      &__title {
        @media screen and (max-width: $mq--mobile) {
          flex: 1;
        }
      }
      &__description {
        flex: 1;
        position: sticky;
        top: 0;
        left: 0;
        overflow: hidden;
      }

      .button {
        align-self: flex-end;
      }
    }
  }
}
</style>


