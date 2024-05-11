<template>
  <ul class="list-disc ml-9">
    <li v-for="biSample in biSamples">
      <a class="underline" href="#" @click="selectSample(biSample.link, $event)">{{ biSample.name }}</a>
    </li>
  </ul>

  <div v-if="loadingData" class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
    <div class="flex items-center justify-center relative top-1/2">
      <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  </div>

  <iframe v-if="biLink" width="100%" height="700px" :src="biLink" @load="biLoaded"></iframe>
  <div v-else class="mb-9"></div>
</template>


<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: "BI",
  components: {
  },
  setup() {
    const biLink = ref(null);

    const loadingData = ref(false);

    const biSamples = ref([
      { 'name': 'postgres_rds_test', 'link': 'http://pbie.150.230.12.8.nip.io/Reports/ShowReport?userName=User1&reportId=b17cd858-cdb5-4f68-8dec-67715d20be11&workspaceId=a9b29c9f-dbdb-41ba-89cf-5573957878c2' },
      { 'name': 'Sales Analyst', 'link': 'http://pbie.150.230.12.8.nip.io/Reports/ShowReport?userName=User1&reportId=d4cc6fb8-53bb-482e-a42d-d29c1f7b5cf2&workspaceId=a9b29c9f-dbdb-41ba-89cf-5573957878c2' },
      { 'name': 'Customer Profitability Sample', 'link': 'http://pbie.150.230.12.8.nip.io/Reports/ShowReport?userName=User1&reportId=49eecdea-5f5a-4f40-84b7-4af96febf097&workspaceId=2275c1e3-c0ba-4ecb-a201-32f65f282c4f' },
    ]);

    const selectSample = function (link, e) {
      e.preventDefault();
      loadingData.value = true;
      biLink.value = link;
    };

    const biLoaded = function (e) {
      loadingData.value = false;
    }

    return {
      biSamples,
      biLink,
      selectSample,
      biLoaded,
      loadingData,
    }
  }
};
</script>