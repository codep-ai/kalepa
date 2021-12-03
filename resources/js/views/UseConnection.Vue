<template>
    <div v-if="connectionMeta.tables.length === 0" class="flex items-center justify-center">
        <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>

    <div class="w-full md:w-2/3 p-5 bg-white" v-if="connectionMeta.tables.length > 0">
        <div class="relative">
            <div class="absolute flex items-center ml-2 h-full">
                <svg
                    class="w-4 h-4 fill-current text-primary-gray-dark"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"
                    />
                </svg>
            </div>

            <input
                v-model="searchQuery"
                type="text"
                placeholder="Search by name..."
                class="px-8 py-3 w-full bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            />
        </div>
        <div class="bg-white shadow-xl h-96 overflow-y-scroll">
            <ul class="divide-y divide-gray-300">
                <li v-for="(r, index) in resultQuery" class="p-4 hover:bg-gray-50 cursor-pointer">
                    <input type="checkbox" :id="'table-' + index" class="form-checkbox" :value="r.name" v-model="r.checked" />
                    <label class="inline-block pl-2" :for="'table-' + index">{{ r.name }}</label>
                </li>
            </ul>
        </div>
        <div class="md:w-1/3 md:text-left my-8">
            <span class="inline-flex rounded-md shadow-sm bg-green-700">
                <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-base text-white leading-6 font-medium rounded-md bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150"
                    @click="submitTables"
                >
                    <svg
                        v-if="processing"
                        class="animate-spin h-5 w-5 mr-3 ..."
                        viewBox="0 0 24 24"
                    >
                        <!-- ... -->
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        />
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    Create
                </button>
            </span>
        </div>
    </div>
    <modal-box v-model="readDbError" button="danger" shake>
        <p>Cannot read from the database.</p>
    </modal-box>
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
import ModalBox from "@/components/ModalBox";

import {
    mdiMonitorCellphone,
    mdiAlertCircle,
    mdiOpenInNew,
    mdiClose
} from '@mdi/js'

export default {
    name: "UseConnection",
    components: {
        ModalBox
    },
    setup() {

        const store = useStore();
        const route = useRoute();

        const connectionId = route.params.connectionId;
        const connectionMeta = ref({
            'connection' : null,
            'tables': []
        });

        const readDbError = ref(false);

        const loadConnectionMeta = function () {
            axios.get(appData.routes.connection.meta, {
                params: {
                    id: connectionId
                }
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.error) {
                        readDbError.value = true;
                        console.log('error', readDbError.value)
                    }
                    connectionMeta.value.connection = response.data.connection;
                    response.data.tables.forEach(element => {
                       connectionMeta.value.tables.push({
                           'name': element,
                           'checked': false
                       }); 
                    });
                });
        }

        loadConnectionMeta();

        const searchQuery = ref(null);
        const resultQuery = computed(() => {
            if (searchQuery.value) {
                return connectionMeta.value.tables.filter(item => {
                    return searchQuery.value
                        .toLowerCase()
                        .split(" ")
                        .every(v => item.name.toLowerCase().includes(v));
                });
            } else {
                return connectionMeta.value.tables;
            }
        });

        const processing = ref(false);

        const submitTables = function (params) {
            const selectedTables = [];
            connectionMeta.value.tables.forEach(table => {
               if (table.checked) {
                   selectedTables.push(table.name);
               } 
            });
            if (selectedTables.length === 0) {
                return;
            }
            const submitData = {
                connection_id: connectionId,
                selectedTables: selectedTables
            };
            //axios.post()
            // submit selected tables
            console.log('selected tables', submitData);

        }

        return {
            connectionMeta,
            readDbError,
            searchQuery,
            resultQuery,
            processing,
            submitTables
        }
    }
};
</script>
