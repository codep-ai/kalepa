<template>
  <footer v-show="isFooterBarVisible" class="bg-white py-2 px-6 dark:bg-gray-900">
    <level>
      <div class="text-center md:text-left hidden">
        <b>&copy; {{ year }}, {{appName}}</b>
      </div>
    </level>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Level from '@/components/Level'
import JbLogo from '@/components/JbLogo'

export default {
  name: 'FooterBar',
  components: {
    Level,
    JbLogo
  },
  setup () {
    const store = useStore()

    const year = computed(() => new Date().getFullYear())

    const appName = computed(() => kalepa.appData.appName)

    const isFooterBarVisible = computed(() => !store.state.isFullScreen)

    return {
      year,
      appName,
      isFooterBarVisible
    }
  }
}
</script>
