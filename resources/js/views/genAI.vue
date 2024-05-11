<template>
<iframe width="100%" height="1000px" :src="biLink">

</iframe>
</template>


<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: "genAI",
  components: {
  },
  setup() {
    const biLink = ref('http://platform.datap.ai:5035/');

    return {
        biLink
    }
  }
};
</script>
