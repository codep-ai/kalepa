<template>
    <form class="w-full max-w-sm">
        <db-connection-form :connection="mssqlConnectionDetail"></db-connection-form>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3 md:text-right">
                <span class="inline-flex rounded-md shadow-sm bg-green-700">
                    <button
                        @click="createNewMssqlConnection"
                        type="button"
                        class="inline-flex items-center px-4 py-2 border border-transparent text-base text-white leading-6 font-medium rounded-md bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150"
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
            <div class="md:w-1/3 md:text-right">
                <jb-button
                    color="Red"
                    label="Cancel"
                    @click="cancelNewConnection"
                />
            </div>
        </div>
    </form>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import JbButtons from '@/components/JbButtons'
import JbButton from '@/components/JbButton'
import DbConnectionForm from '@/components/DbConnectionForm'
import axios from "axios";

export default {
    name: "MssqlConnection",
    components: {
        JbButtons,
        JbButton,
        DbConnectionForm
    },

    emits: ['newConnectionCreated', 'cancelNewConnection'],

    setup(props, { emit }) {
        const mssqlConnectionDetail = ref(
            {
                name: 'Test MssqlConnetion',
                host: 'database-sqlserver-sample.cefiiwfswuh4.ap-southeast-2.rds.amazonaws.com',
                port: '1433',
                dbname: 'AdventureWorksDW',
                username: 'admin',
                password: 'Welcome1$',
            }
        );
        const processing = ref(false);

        const createNewMssqlConnection = function () {
            console.log('create new mssql connection', mssqlConnectionDetail.value);
            processing.value = true;
            axios.post(appData.routes.connection.create, {
                'name': mssqlConnectionDetail.value.name,
                'host': mssqlConnectionDetail.value.host,
                'port': mssqlConnectionDetail.value.port,
                'dbname': mssqlConnectionDetail.value.dbname,
                'username': mssqlConnectionDetail.value.username,
                'password': mssqlConnectionDetail.value.password,
                'dbtype': 'mssql'
            })
                .then(function (response) {
                    console.log('response', response, emit);
                    if (response.data.connection) {
                        emit('newConnectionCreated', { connection: response.data.connection });
                    }
                    processing.value = false;
                });
        };

        const cancelNewConnection = function () {
            emit('cancelNewConnection');
        }

        return {
            createNewMssqlConnection,
            mssqlConnectionDetail,
            processing,
            cancelNewConnection,
        }
    }
}
</script>