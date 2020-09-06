export const state = () => ({
  open: false,
  scrolled: false,
  mobile: false,
  links: [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/turniej',
      name: 'Turniej',
    },
    {
      path: '/aktualnosci',
      name: 'Aktualności',
    },
    {
      path: '/informacje',
      name: 'Informacje',
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
    },
  ],
  social: [],
})

export const mutations = {
  toggle(state) {
    state.open = !state.open
  },
  close(state) {
    state.open = false
  },
  scroll(state, value) {
    state.scrolled = value
  },
  changeMobile(state, value) {
    state.mobile = value
  },
}

export const getters = {
  isOpen({ open }) {
    return open
  },
  isScrolled({ scrolled }) {
    return scrolled
  },
  isMobile({ mobile }) {
    return mobile
  },
  menuLinks({ links }) {
    return links
  },
  socialLinks({ social }) {
    return social
  },
}
