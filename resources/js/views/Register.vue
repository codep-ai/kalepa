<template>
<iframe width="100%" height="1000px" :src="biLink">

</iframe>
</template>

<script>
// @ is an alias to /src
import { computed } from 'vue'
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'
import Overlay from '@/components/Overlay'

export default {
  name: 'Register',
  components: {
    Overlay,
    FooterBar,
    AsideMenu,
    NavBar
  },
  setup () {
    const register = async () => {
      const response = await fetch('http://localhost:8432/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password
        })
      });

      const data = await response.json();
      // Handle response data as needed
    }

    return {
      register
    }
  }
}
</script>
