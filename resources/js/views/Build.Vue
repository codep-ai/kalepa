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
        <card-component title="Connections" mb>
          <db-connection-list :connections="connections"></db-connection-list>
        </card-component>
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

    const connections = ref([]);
    if (!appData.connections) {
      console.log('init connections', route.params.dataflow);
      axios.get(appData.routes.connection.list, {params: {dataflow_id: route.params.dataflow}})
        .then(function (response) {
          appData.connections = response.data.connections;
          response.data.connections.forEach(connection => {
            connections.value.push(connection);
          });
        });
    } else {
      appData.connections.forEach(connection => {
        connections.value.push(connection);
      });
      //console.log('store', store.state.connections);
    }

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
      connections.value.push(
        {
          id: data.connection.id,
          name: data.connection.name,
          host: data.connection.host,
          port: data.connection.port,
          dbname: data.connection.dbname,
        }
      );
      appData.connections.push(data.connection);
      console.log(connections.value);
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
    }
  }
};
</script>
