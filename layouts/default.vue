<template>
  <div>
    <Header />
    <main
      :class="[isMobile ? 'translate' : null, (isOpen && isMobile) ? 'translate--trigger' : null]"
    >
      <nuxt />
    </main>
    <footer
      :class="[isMobile ? 'translate' : null, (isOpen && isMobile) ? 'translate--trigger' : null]"
    >
      <Container>
        <p>{{ new Date().getFullYear() }} &copy; Wszelkie prawa zastrzeżone</p>
      </Container>
    </footer>
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
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#__nuxt {
  width: 100%;
  background-color: $black;
  color: $white;
  font-family: $font;
  height: -webkit-fill-available;
}

a {
  text-decoration: none;
  color: inherit;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  padding: $padding / 2;
  background-color: $yellow;
  color: $black;
}

section {
  padding-top: $padding * 2;
  z-index: 1;
}

.translate {
  transition: transform $timing * 4;

  &--trigger {
    transform: translateX(-10%);
  }
}
</style>
