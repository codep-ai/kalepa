<template>
  <nav-bar/>
  <aside-menu :menu="menu"/>
  <router-view/>
  <footer-bar/>
  <overlay v-show="isAsideLgActive" z-index="z-30" @overlay-click="overlayClick" />
</template>

<script>
// @ is an alias to /src
import { computed } from 'vue'
import { useStore } from 'vuex'
import menu from '@/menu.js'
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'
import Overlay from '@/components/Overlay'

export default {
  name: 'Home',
  components: {
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar
  },
  setup () {
    console.log('running setup')
    const store = useStore()

    store.commit('user', {
      name: 'Henry Li',
      email: 'hengruili@gmail.com',
      avatar: 'https://avatars.dicebear.com/api/male/henry.svg?options[top][]=shortHair&options[accessoriesChance]=93'
    })

    const isAsideLgActive = computed(() => store.state.isAsideLgActive)

    const overlayClick = () => {
      store.dispatch('asideLgToggle', false)
    }

    return {
      menu,
      isAsideLgActive,
      overlayClick
    }
  }
}
</script>
