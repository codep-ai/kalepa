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
  name: "Airflow",
  components: {
  },
  setup() {
    const biLink = ref('https://airflow.datap.ai');

    return {
      biLink
    }
  }
};

</script>
