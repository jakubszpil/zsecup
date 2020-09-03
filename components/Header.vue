<template>
  <header class="app-header header" :class="[isMobile ? 'header--mobile' : 'header--desktop', isMobile && isOpen ? 'header--menu-opened' : null, isScrolled ? 'header--scrolled' : null]">
    <Container class="header__container">
      <h1 class="header__title">
        <nuxt-link to="/" :tabindex="tabIndex('hidden')" class="header-logo">
          <img src="" alt="" class="header-logo__image" />
          <span class="header-logo__title">zse4cup</span>
        </nuxt-link>
      </h1>
      <nav class="header__nav nav">
        <button class="nav-btn" v-if="isMobile" @click="handleMenuToggle">
          <div class="nav-btn__inner">
            <span class="nav-btn__bar"></span>
          </div>
        </button>
        <div class="nav__menu menu">
          <ul class="menu-list menu-list--navigation">
            <li v-for="(link, key) in menuLinks" :key="key" class="menu-list-item">
              <nuxt-link class="menu-list-item__link" @click.native="handleMenuClose" :tabindex="tabIndex('show')" :to="link.path">{{ link.name }}</nuxt-link>
            </li>
          </ul>
          <ul class="menu-list menu-list--social">
            <li v-for="(link, key) in socialLinks" :key="key" class="menu-list-item">
              <nuxt-link class="menu-list-item__link" @click.native="handleMenuClose" :tabindex="tabIndex('show')" :to="link.path">{{ link.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isOpen: 'menu/isOpen',
      isScrolled: 'menu/isScrolled',
      isMobile: 'menu/isMobile',
      menuLinks: 'menu/menuLinks',
      socialLinks: 'menu/socialLinks',
    }),
  },
  methods: {
    tabIndex(targetIfMenuOpen = 'show' || 'hidden') {
      const condition = this.isOpen && this.isMobile
      let value = targetIfMenuOpen === 'show' ? (condition ? '0' : '-1') : condition ? '-1' : '0'
      return !this.isMobile ? '0' : value
    },
    ...mapMutations({
      toggleMenu: 'menu/toggle',
      scrollMenu: 'menu/scroll',
      closeMenu: 'menu/close',
      changeMobile: 'menu/changeMobile',
    }),
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
      const { height: headerHeight } = this.$refs.header.getBoundingClientRect()

      this.scrollMenu(scrollPosition > headerHeight)
    },
    handleMenuToggle() {
      this.toggleMenu()
    },
    handleMenuClose() {
      this.closeMenu()
    },
    handleDeviceTypeChange() {
      this.changeMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 800)
    },
  },
  watch: {
    $route() {
      this.closeMenu()
    },
  },
  mounted() {
    this.handleDeviceTypeChange()
    window.addEventListener('resize', this.handleDeviceTypeChange)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleDeviceTypeChange)
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style></style>
