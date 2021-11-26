<template>
    <div v-if="!connectionMeta" class="flex items-center justify-center">
        <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
    <div v-if="connectionMeta">
    <div class="bg-white rounded-lg shadow lg:w-1/3">
        <ul class="divide-y divide-gray-100">
            <li v-for="table in connectionMeta.tables" class="p-3 hover:bg-blue-600 hover:text-blue-200" @click="selectMeta(table)">
                {{table}}
            </li>
        </ul>
    </div>
    </div>
</template>

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
    name: "UseConnection",
    components: {
    },
    setup() {

        const store = useStore();
        const route = useRoute();
        console.log('route id', route.params);
        console.log('store', store.state.connections);

        const connectionId = route.params.connectionId;
        const connectionMeta = ref(null);

        const loadConnectionMeta = function () {
            axios.get(appData.routes.connection.meta, {
                params: {
                    id: connectionId
                }
            })
            .then(function (response) {
                console.log(response);
                connectionMeta.value = {};
                connectionMeta.value.connection = response.data.connection;
                connectionMeta.value.tables = response.data.tables;
            });
        }

        loadConnectionMeta();

        const selectMeta = function(table) {
            console.log('selectMeta', table);
        }
        return {
            selectMeta,
            connectionMeta,
        }
    }
};
</script>
