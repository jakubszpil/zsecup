<template>
  <header
    class="app-header header"
    :class="[isMobile ? 'header--mobile' : 'header--desktop', $route.path === '/' ? 'header--transparent' : null, isMobile && isOpen ? 'header--menu-opened' : null, isScrolled ? 'header--scrolled' : null]"
    ref="header"
  >
    <Container class="header__container">
      <h1 class="header__title">
        <nuxt-link to="/" :tabindex="tabIndex('hidden')" class="link header-logo">
          <img src="/img/logo.png" alt="ZSECUP LOGO" class="header-logo__image" />
          <span class="header-logo__title">zse4cup</span>
        </nuxt-link>
      </h1>
      <nav class="header__nav nav">
        <button class="nav-btn" v-show="isMobile" @click="handleMenuToggle" :tabindex="1">
          <div class="nav-btn__inner">
            <span class="nav-btn__bar"></span>
          </div>
        </button>
        <div class="nav__menu menu">
          <ul class="menu-list menu-list--navigation">
            <li v-for="(link, key) in menuLinks" :key="key" class="menu-list-item">
              <nuxt-link class="link menu-list-item__link" @click.native="handleMenuClose" :tabindex="tabIndex('show')" :to="link.path">{{ link.name }}</nuxt-link>
            </li>
          </ul>
          <ul class="menu-list menu-list--social">
            <li v-for="(link, key) in socialLinks" :key="key" class="menu-list-item">
              <nuxt-link class="link menu-list-item__link" @click.native="handleMenuClose" :tabindex="tabIndex('show')" :to="link.path">{{ link.name }}</nuxt-link>
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
      return !this.isMobile ? null : value
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
      this.handleDeviceTypeChange()
    },
    isMobile() {
      this.closeMenu()
    },
  },
  beforeMount() {
    this.handleDeviceTypeChange()
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

<style lang="scss">
.header {
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 400;
  padding-top: $padding / 2;
  padding-bottom: $padding / 2;

  &::before,
  &::after {
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    display: block;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &::before {
    box-shadow: 0 5px 10px rgba($color: #000, $alpha: 0.2);
    opacity: 0;
  }
  &::after {
    background-color: $black;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-family: $font--header;
    line-height: $padding;
  }
  &-logo {
    display: flex;
    align-items: flex-end;
    &__image {
      max-width: $padding;
      margin-right: $padding / 4;
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;

    &-btn {
      border: 0;
      z-index: 500;
      width: $padding;
      height: $padding;
      background-color: transparent;
      &,
      &__inner {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      &__inner {
        width: 100%;
        height: 100%;
      }

      &__bar {
        &,
        &::before,
        &::after {
          display: block;
          position: relative;
          width: $padding / 3 * 2;
          height: 3px;
          background-color: $yellow;
          border-radius: 3px;
        }
        transition: transform $timing 0s;
        &::before,
        &::after {
          content: '';
          position: absolute;
          width: $padding / 3;
        }

        &::before {
          left: 0;
          top: -9px;
          transition: top $timing $timing, width $timing $timing * 2;
        }
        &::after {
          right: 0;
          top: 9px;
          transition: transform $timing 0s, top $timing $timing, width $timing $timing * 2;
        }
      }
    }
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;

    &-list {
      display: flex;
      align-items: center;
      justify-content: center;
      &-item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  &--mobile {
    .menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      height: -webkit-fill-available;
      background-color: $color--text;
      transform: translateX(100%);
      font-size: 24px;
      color: $color--secondary;
      transition: transform $timing * 3;
      &-list {
        &--navigation {
          flex-direction: column;

          .menu-list-item {
            margin-bottom: $padding / 2;
            position: relative;
            transform: translateY(100%);
            opacity: 0;
            transition: transform 0s $timing, opacity $timing / 4 0s;
            &:nth-last-child(1) {
              margin-bottom: 0;
            }
          }
        }

        &--social {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }

  &--transparent {
    &::after {
      opacity: 0;
    }
  }

  &--menu-opened {
    .menu {
      transform: translateX(0);
      &-list {
        &--navigation {
          .menu-list-item {
            transform: translateY(0);
            opacity: 1;
            transition: transform $timing * 2 $timing * 3, opacity $timing * 4 $timing * 3;
          }
        }
      }
    }

    .nav {
      &-btn {
        &__bar {
          transform: rotate(-45deg);
          transition: transform $timing $timing * 2;

          &::before {
            width: $padding / 3 * 2;
            top: 0;
            transition: width $timing 0s, top $timing $timing;
          }
          &::after {
            width: $padding / 3 * 2;
            top: 0;
            transition: width $timing 0s, top $timing $timing, transform $timing $timing * 2;
            transform: rotate(90deg);
          }
        }
      }
    }
  }

  &--scrolled {
    &::before,
    &::after {
      opacity: 1;
      transition: opacity $timing;
    }
  }

  &--desktop {
    .menu {
      &-list {
        &--navigation {
          .menu-list-item {
            margin-right: $padding / 2;
            font-size: 18px;
            &:nth-last-child(1) {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
