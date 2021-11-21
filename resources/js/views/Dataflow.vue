<template>
  <modal-box
    v-model="modalOneActive"
    title="New Dataflow"
    button-label="Confirm"
    has-cancel
    @confirm="createDataflow"
  >
    <field label="Name*">
      <control
        type="text"
        placeholder="Dataflow name"
        v-model="dataflow.name"
      />
      <div
       v-show="showAlert"
        class="
          bg-red-100
          border border-red-400
          text-red-700
          px-4
          py-3
          rounded
          relative
        "
        role="alert"
      >
        <span class="block sm:inline">Name is required</span>
      </div>
    </field>
    <field label="Description">
      <control
        type="textarea"
        placeholder="Describe this dataflow"
        v-model="dataflow.description"
      />
    </field>
  </modal-box>
  <title-bar :title-stack="titleStack" />
  <section class="px-0 md:px-6 py-6">
    <jb-buttons>
      <jb-button
        color="white"
        label="New Dataflow"
        :icon="mdiPlus"
        @click="modalOneActive = true"
      />
    </jb-buttons>
  </section>
  <main-section>
    <card-component :icon="mdiTransitConnection" title="Dataflows" has-table>
      <dataflow-table :dataflowCollection="dataflowCollection" />
    </card-component>
  </main-section>
</template>

<script>
// @ is an alias to /src
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiFinance,
  mdiMonitorCellphone,
  mdiReload,
  mdiChartPie,
  mdiTransitConnection,
  mdiTransitConnectionVariant,
  mdiTransitConnectionHorizontal,
  mdiPlusBoxOutline,
  mdiPlus,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config";
import LineChart from "@/components/Charts/LineChart";
import MainSection from "@/components/MainSection";
import TitleBar from "@/components/TitleBar";
import HeroBar from "@/components/HeroBar";
import CardWidget from "@/components/CardWidget";
import CardComponent from "@/components/CardComponent";
import DataflowTable from "@/components/DataflowTable";
import Notification from "@/components/Notification";
import JbButtons from "@/components/JbButtons";
import JbButton from "@/components/JbButton";
import CardTransactionBar from "@/components/CardTransactionBar";
import CardClientBar from "@/components/CardClientBar";
import TitleSubBar from "@/components/TitleSubBar";
import ModalBox from "@/components/ModalBox";
import Field from "@/components/Field";
import Control from "@/components/Control";
import Divider from "@/components/Divider.vue";

export default {
  name: "Dataflow",
  components: {
    TitleSubBar,
    MainSection,
    DataflowTable,
    LineChart,
    CardComponent,
    CardWidget,
    HeroBar,
    TitleBar,
    Notification,
    JbButtons,
    JbButton,
    CardTransactionBar,
    CardClientBar,
    ModalBox,
    Field,
    Control,
    Divider,
  },
  setup() {
    const titleStack = ref(["Admin", "Dataflow"]);

    const chartData = ref(null);

    const fillChartData = () => {
      chartData.value = chartConfig.sampleChartData();
    };

    onMounted(() => {
      fillChartData();
    });

    const nameHelp = ref("");

    const store = useStore();

    const clientBarItems = computed(() => store.state.clients.slice(0, 3));

    const transactionBarItems = computed(() => store.state.history.slice(0, 3));

    const darkMode = computed(() => store.state.darkMode);

    const modalOneActive = ref(false);

    const showAlert = ref(false);

    const dataflow = ref({
      name: "",
      description: "",
    });
    const dataflowCollection = ref([
      {
        name: "1st dataflow",
        created: "2021-11-21",
      },
    ]);

    const createDataflow = function (e) {
      console.log("createDataflow", dataflow.value, dataflow);
      // sample code
      if (!dataflow.value.name || dataflow.value.name.trim().length === 0) {
        modalOneActive.value = true;
        showAlert.value = true;
        return;
      }
      showAlert.value = false;
      dataflowCollection.value.push({
        name: dataflow.value.name,
        created: "2021-12-20",
      });
      dataflow.value.name = '';
      dataflow.value.description = '';
    };

    return {
      showAlert,
      nameHelp,
      dataflow,
      dataflowCollection,
      createDataflow,
      modalOneActive,
      titleStack,
      chartData,
      fillChartData,
      clientBarItems,
      transactionBarItems,
      darkMode,
      mdiAccountMultiple,
      mdiCartOutline,
      mdiChartTimelineVariant,
      mdiFinance,
      mdiMonitorCellphone,
      mdiTransitConnection,
      mdiTransitConnectionVariant,
      mdiTransitConnectionHorizontal,
      mdiReload,
      mdiChartPie,
      mdiPlusBoxOutline,
      mdiPlus,
    };
  },
};
</script>
