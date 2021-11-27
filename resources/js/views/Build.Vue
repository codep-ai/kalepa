<template>
  <div v-show="!showNewConnection">
    <main-section>
      <div class="new-connection-options">
        <card-component title="Add Connection">
          <div class="grid grid-cols-3 gap-4">
            <div>
              <a href="#" @click="newMssqlConnection">
                <img
                  class="db-icon inline"
                  src="https://storage.googleapis.com/ascend-io-sample-data-read/images/mssql.png"
                />
                <span>Microsoft SQL Server</span>
              </a>
            </div>
            <div>
              <a href="#" @click="newMysqlConnection">
                <img
                  class="db-icon inline"
                  src="https://storage.googleapis.com/ascend-io-sample-data-read/images/mysql.png"
                />
                <span>MySQL</span>
              </a>
            </div>
          </div>
        </card-component>
      </div>
    </main-section>
    <main-section>
      <div v-if="loadingConnection" class="flex items-center justify-center">
        <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
      <db-connection-list :connections="connections"></db-connection-list>
    </main-section>
  </div>
  <div v-show="showNewConnection">
    <mssql-connection
      @newConnectionCreated="processNewConnection"
      @cancelNewConnection="hideNewConnection"
    ></mssql-connection>
  </div>
</template>

<style scoped>
.db-icon {
  width: 2rem;
}
</style>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router';

import MainSection from '@/components/MainSection'
import CardComponent from '@/components/CardComponent'
import TitleSubBar from '@/components/TitleSubBar'
import JbButtons from '@/components/JbButtons'
import JbButton from '@/components/JbButton'
import MssqlConnection from '@/components/MssqlConnection'
import DbConnectionList from '@/components/DbConnectionList'
import axios from 'axios'

import {
  mdiMonitorCellphone,
  mdiAlertCircle,
  mdiOpenInNew,
  mdiClose
} from '@mdi/js'

export default {
  name: "Build",
  components: {
    MainSection,
    CardComponent,
    TitleSubBar,
    JbButtons,
    JbButton,
    MssqlConnection,
    DbConnectionList
  },
  setup() {

    const store = useStore();
    const route = useRoute();
    const showNewConnection = ref(false);

    const loadingConnection = ref(false);

    const dataflowId = route.params.dataflow;

    if (!store.state.connections[dataflowId] || store.state.connections[dataflowId].length === 0) {
      console.log('init connections', route.params.dataflow);
      loadingConnection.value = true;
      axios.get(appData.routes.connection.list, { params: { dataflow_id: dataflowId } })
        .then(function (response) {
          loadingConnection.value = false;
          if (response.data.connections.length > 0) {
            var object = {};
            object[dataflowId] = response.data.connections;
            console.log('object', object);
            store.commit('basic', {
              key: 'connections',
              value: object
            })
          }
        });
      //console.log('store', store.state.connections);
    }
    const connections = computed(() => store.state.connections[dataflowId]);

    const addNewConnection = function (e) {
      console.log('add new connection');
    };

    const newMssqlConnection = function (e) {
      e.preventDefault();
      showNewConnection.value = true;
      console.log('new mssql connection', showNewConnection.value);

    };

    const newMysqlConnection = function (e) {
      console.log('new mysql connection');
      e.preventDefault();
    }

    const hideNewConnection = function () {
      showNewConnection.value = false;
    }

    const processNewConnection = function (data) {
      hideNewConnection();
      var existingConnections = store.state.connections;
      console.log('exist', existingConnections);
      if (!existingConnections) {
        existingConnections = {};
        existingConnections[dataflowId] = [data.connection];
      } else if(!existingConnections[dataflowId]) {
        existingConnections[dataflowId] = [data.connection];
      } else {
        existingConnections[dataflowId].push(data.connection);
      }
      store.commit('basic', {
        key: 'connections',
        value: existingConnections
      })
    };

    return {
      mdiMonitorCellphone,
      mdiAlertCircle,
      mdiOpenInNew,
      mdiClose,
      addNewConnection,
      newMssqlConnection,
      newMysqlConnection,
      showNewConnection,
      connections,
      processNewConnection,
      hideNewConnection,
      loadingConnection
    }
  }
};
</script>
