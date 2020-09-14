<template>
  <div>
    <Header />
    <main
      :class="[isMobile ? 'translate' : null, isOpen && isMobile ? 'translate--trigger' : null]"
    >
      <transition name="page">
        <nuxt />
      </transition>
    </main>
    <Footer
      :class="[isMobile ? 'translate' : null, isOpen && isMobile ? 'translate--trigger' : null]"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isOpen: 'menu/isOpen',
      isMobile: 'menu/isMobile',
    }),
  },
  transition: 'page',
  watch: {
    $route(to, from) {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#__nuxt,
#__layout {
  width: 100%;
  background-color: $black;
  color: $white;
  font-family: $font;
  height: -webkit-fill-available;
  font-size: 14px;
  @media screen and (min-width: $mq--desktop) {
    font-size: 16px;
  }
}

a {
  color: inherit;
}

.link {
  text-decoration: none;
  color: inherit;
}
a:not(.link) {
  &:hover {
    color: $yellow;
  }
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  padding: $padding / 2;
  background-color: $yellow;
  color: $black;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: lighten($color: $yellow, $amount: 8);
  }
}

section {
  padding-top: $padding * 2;
  z-index: 1;
  h1 {
    font-size: 32px;
    font-size: 2rem;
  }
  h2 {
    font-size: 24px;
    font-size: 1.5rem;
  }
  h3 {
    font-size: 20.8px;
    font-size: 1.3rem;
  }
  h4 {
    font-size: 16px;
    font-size: 1rem;
  }
  h5 {
    font-size: 12.8px;
    font-size: 0.8rem;
  }
  h6 {
    font-size: 11.2px;
    font-size: 0.7rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: $padding / 2;
  }
}

main {
  min-height: 100vh;
}

.translate {
  transition: transform $timing * 4;
  position: relative;
  &::after {
    width: 100%;
    height: 100vh;
    height: -webkit-fill-available;
    position: fixed;
    top: 0;
    left: 0;
    content: '';
    display: block;
    background-color: darken($color: $black, $amount: 3);
    opacity: 0;
    transition: opacity $timing * 2;
    visibility: collapse;
  }

  &--trigger {
    transform: translateX(-10%);
    &::after {
      visibility: visible;
      opacity: 1;
      transition: opacity $timing * 4;
    }
  }
}

.page-enter-active,
.page-leave-active {
  transition: opacity $timing / 3;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
@media screen and (min-width: $mq--desktop) {
  .page-enter-active,
  .page-leave-active {
    transition: opacity $timing * 10 cubic-bezier(0.2, 1.09, 0.88, 0.97);
  }
}
</style>
