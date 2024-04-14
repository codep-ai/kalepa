<template>
    <div
        v-if="!dbObjects"
        class="justify-center items-center pt-16"
        style="max-width: 1200px; margin:auto;"
    >
        <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="relative w-full px-3">
                    <input
                        class="appearance-none block w-full bg-transparent text-gray-700 border-0 border-b-2 focus:shadow-none focus:ring-offset-0 py-1 px-0 mb-1 leading-tight"
                        :class="pipelineSource.dbHost.showError ? 'border-red-500' : 'border-gray-200'"
                        id="pipeline-name"
                        type="text"
                        v-model="pipelineSource.name.value"
                        placeholder=" "
                        @focus="handleFocus(pipelineSource.name)"
                        @blur="handleBlur(pipelineSource.name)"
                    />
                    <label
                        class="absolute top-1 -z-1 duration-300 origin-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="pipeline-name"
                    >Pipeline Name</label>
                    <p
                        v-if="pipelineSource.name.showError"
                        class="text-red-500 text-xs italic"
                    >{{ pipelineSource.name.error }}</p>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="relative w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                        class="appearance-none block w-full bg-transparent text-gray-700 border-0 border-b-2 focus:shadow-none focus:ring-offset-0 py-1 px-0 mb-1 leading-tight"
                        :class="pipelineSource.dbHost.showError ? 'border-red-500' : 'border-gray-200'"
                        id="db-host"
                        type="text"
                        v-model="pipelineSource.dbHost.value"
                        placeholder=" "
                        @focus="handleFocus(pipelineSource.dbHost)"
                        @blur="handleBlur(pipelineSource.dbHost)"
                    />
                    <label
                        class="absolute top-1 -z-1 duration-300 origin-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="db-host"
                    >Database Host</label>
                    <p
                        v-if="pipelineSource.dbHost.showError"
                        class="text-red-500 text-xs italic"
                    >{{ pipelineSource.dbHost.error }}</p>
                </div>
                <div class="relative w-full md:w-1/2 px-3">
                    <input
                        class="appearance-none block w-full bg-transparent text-gray-700 border-0 border-b-2 focus:shadow-none focus:ring-offset-0 py-1 px-0 mb-1 leading-tight"
                        :class="pipelineSource.dbPort.showError ? 'border-red-500' : 'border-gray-200'"
                        id="db-port"
                        type="text"
                        v-model="pipelineSource.dbPort.value"
                        placeholder=" "
                        @focus="handleFocus(pipelineSource.dbPort)"
                        @blur="handleBlur(pipelineSource.dbPort)"
                    />
                    <label
                        class="absolute top-1 -z-1 duration-300 origin-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="db-port"
                    >Database port</label>
                    <p
                        v-if="pipelineSource.dbPort.showError"
                        class="text-red-500 text-xs italic"
                    >{{ pipelineSource.dbPort.error }}</p>
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="relative w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                        class="appearance-none block w-full bg-transparent text-gray-700 border-0 border-b-2 focus:shadow-none focus:ring-offset-0 py-1 px-0 mb-1 leading-tight"
                        :class="pipelineSource.dbUser.showError ? 'border-red-500' : 'border-gray-200'"
                        id="db-user"
                        type="text"
                        v-model="pipelineSource.dbUser.value"
                        placeholder=" "
                        @focus="handleFocus(pipelineSource.dbUser)"
                        @blur="handleBlur(pipelineSource.dbUser)"
                    />
                    <label
                        class="absolute top-1 -z-1 duration-300 origin-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="db-user"
                    >Database User</label>
                    <p
                        v-if="pipelineSource.dbUser.showError"
                        class="text-red-500 text-xs italic"
                    >{{ pipelineSource.dbUser.error }}</p>
                </div>
                <div class="relative w-full md:w-1/2 px-3">
                    <input
                        class="appearance-none block w-full bg-transparent text-gray-700 border-0 border-b-2 focus:shadow-none focus:ring-offset-0 py-1 px-0 mb-1 leading-tight"
                        :class="pipelineSource.dbPassword.showError ? 'border-red-500' : 'border-gray-200'"
                        id="db-password"
                        type="text"
                        v-model="pipelineSource.dbPassword.value"
                        placeholder=" "
                        @focus="handleFocus(pipelineSource.dbPassword)"
                        @blur="handleBlur(pipelineSource.dbPassword)"
                    />
                    <label
                        class="absolute top-1 -z-1 duration-300 origin-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="db-password"
                    >Database password</label>
                    <p
                        v-if="pipelineSource.dbPassword.showError"
                        class="text-red-500 text-xs italic"
                    >{{ pipelineSource.dbPassword.error }}</p>
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="relative w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                        class="appearance-none block w-full bg-transparent text-gray-700 border-0 border-b-2 focus:shadow-none focus:ring-offset-0 py-1 px-0 mb-1 leading-tight"
                        :class="pipelineSource.dbName.showError ? 'border-red-500' : 'border-gray-200'"
                        id="db-name"
                        type="text"
                        v-model="pipelineSource.dbName.value"
                        placeholder=" "
                        @focus="handleFocus(pipelineSource.dbName)"
                        @blur="handleBlur(pipelineSource.dbName)"
                    />
                    <label
                        class="absolute top-1 -z-1 duration-300 origin-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="db-name"
                    >Database name</label>
                    <p
                        v-if="pipelineSource.dbName.showError"
                        class="text-red-500 text-xs italic"
                    >{{ pipelineSource.dbName.error }}</p>
                </div>
                <div class="relative w-full md:w-1/2 px-3">
                    <input
                        class="appearance-none block w-full bg-transparent text-gray-700 border-0 border-b-2 focus:shadow-none focus:ring-offset-0 py-1 px-0 mb-1 leading-tight"
                        :class="pipelineSource.dbSchema.showError ? 'border-red-500' : 'border-gray-200'"
                        id="db-schema"
                        type="text"
                        v-model="pipelineSource.dbSchema.value"
                        placeholder=" "
                        @focus="handleFocus(pipelineSource.dbSchema)"
                        @blur="handleBlur(pipelineSource.dbSchema)"
                    />
                    <label
                        class="absolute top-1 -z-1 duration-300 origin-0 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="db-schema"
                    >Database Schema</label>
                    <p
                        v-if="pipelineSource.dbSchema.showError"
                        class="text-red-500 text-xs italic"
                    >{{ pipelineSource.dbSchema.error }}</p>
                </div>
            </div>
            <button
                class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3"
                type="submit"
                @click="testConnection"
            >
                <!--v-if-->
                <span class="px-2">Test Connection</span>
            </button>
            <button
                class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3"
                type="submit"
                @click="testAndContinue"
            >
                <!--v-if-->
                <span class="px-2">Test Connection & Continue</span>
            </button>
        </form>
    </div>

    <div class="justify-center items-center pt-16" style="max-width: 900px; margin:auto;" v-if="dbObjects">
        <div class="my-5">
            <b>Select data</b>
        </div>
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
                <li
                    v-for="(dbObject, index) in resultQuery"
                    class="p-4 relative hover:bg-gray-50 cursor-pointer"
                >
                    <label
                        class="inline-block left-10 top-4 w-full absolute " 
                        :for="'header-' + index"
                    >{{ dbObject.TABLE_NAME }}</label>
                    <input
                        type="checkbox"
                        :id="'header-' + index"
                        class="form-checkbox"
                        :value="dbObject.TABLE_NAME"
                        v-model="dbObject.checked"
                    />
                </li>
            </ul>
        </div>
        <button
            class="mt-5 inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3"
            type="submit"
        >
            <span class="px-2" @click="confirmSelectedHeader">Continue</span>
        </button>
    </div>

    <modal-box v-model="testConnectionDone.done" title="Test connection" button-label="Confirm">
        <div v-if="testConnectionDone.success">Connection successful</div>
        <div v-if="!testConnectionDone.success" class="text-red-500">Connection failed</div>
    </modal-box>

    <div v-if="loadingData" class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <div class="flex items-center justify-center relative top-1/2">
            <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    </div>
</template>

<style scoped>
input:not(:placeholder-shown) ~ label,
input:focus-within ~ label {
    @apply transform scale-75 -translate-y-5 text-blue-500;
}
.origin-0 {
    transform-origin: 0%;
}
</style>

<script>
// @ is an alias to /src
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import {
    mdiAlphabetAurebesh,
    mdiAppsBox,
    mdiDatabaseEditOutline,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config";
import Icon from "@/components/Icon";
import axios from 'axios';
import ModalBox from "@/components/ModalBox";
import router from "@/router";
import { useRoute } from 'vue-router'

export default {
    name: "configure",
    components: {
        Icon,
        ModalBox
    },
    setup() {
        const route = useRoute();
        // source = mssql
        const source = route.query.source;
        // mode = table
        const mode = route.query.mode;

        const pipelineSource = ref({
            name: {
                label: 'Pipeline name',
                value: '',
                placeholder: 'Unique name for your pipeline',
                showError: false,
                error: 'Please fill out this field'
            },
            dbHost: {
                label: 'Database host',
                value: '',
                placeholder: 'Database server Ip address or DNS name',
                showError: false,
                error: 'Please fill out this field'
            },
            dbPort: {
                label: 'Database port',
                value: '1433',
                placeholder: 'Database server port',
                showError: false,
                error: 'Please fill out this field'
            },
            dbUser: {
                label: 'Database user',
                value: '',
                placeholder: 'Database user name',
                showError: false,
                error: 'Please fill out this field'
            },
            dbPassword: {
                label: 'Database password',
                value: '',
                placeholder: 'Database password',
                showError: false,
                error: 'Please fill out this field'
            },
            dbName: {
                label: 'Database name',
                value: '',
                placeholder: 'Database name',
                showError: false,
                error: 'Please fill out this field'
            },
            dbSchema: {
                label: 'Database schema',
                value: 'dbo',
                placeholder: 'Database schema',
                showError: false,
                error: 'Please fill out this field'
            }
        });
        for (var field in pipelineSource.value) {
            pipelineSource.value[field].placeholderText = pipelineSource.value[field].placeholder;
        }

        const handleFocus = function (sourceField) {
            sourceField.placeholder = '';
        };

        const handleBlur = function (sourceField) {
            sourceField.placeholder = sourceField.placeholderText;
            if (!sourceField.value || (sourceField.value + '').trim() === '') {
                sourceField.showError = true;
                sourceField.value = '';
            } else {
                sourceField.showError = false;
                sourceField.value = sourceField.value.trim();
            }
        };

        const validateData = function () {
            var hasError = false;
            var submitData = {};
            for (var field in pipelineSource.value) {
                var fieldData = pipelineSource.value[field];
                if (!fieldData.value) {
                    fieldData.showError = true;
                    hasError = true;
                } else {
                    fieldData.showError = false;
                    submitData[field] = pipelineSource.value[field].value;
                }
            }
            return { 'hasError': hasError, 'submitData': submitData };
        }

        const testConnectionDone = ref({
            success: false,
            done: false
        });

        const loadingData = ref(false);

        const dbObjects = ref(null);

        const testConnection = function () {
            var validate = validateData();
            if (validate.hasError === false) {
                // submit to php
                validate.submitData.source = source;
                loadingData.value = true;
                axios.post(kalepa.appData.routes.pipeline.testConnection, validate.submitData)
                    .then(function (response) {
                        testConnectionDone.value.done = true;
                        testConnectionDone.value.success = response.data.connected;
                        loadingData.value = false;
                    })
                    .catch(function () {
                        loadingData.value = false;
                        testConnectionDone.value.done = true;
                        testConnectionDone.value.success = false;
                    });
            }
            return false;
        }

        const testAndContinue = function () {
            console.log(kalepa.appData.routes.pipeline.saveConnection, 'test');
            var validate = validateData();
            if (validate.hasError === false) {
                // submit to php
                validate.submitData.source = source;
                validate.submitData.role = 'source';
                loadingData.value = true;
                axios.post(kalepa.appData.routes.pipeline.saveConnection, validate.submitData)
                    .then(function (response) {
                        loadingData.value = false;
                        console.log(response);
                        if (response.data.connection.success) {
                            dbObjects.value = response.data.connection.data;
                            console.log(response.data.connection.data);
                        }
                    })
                    .catch(function () {
                        loadingData.value = false;
                    });
            }
            return false;
        }


        const searchQuery = ref(null);
        const resultQuery = computed(() => {
            if (searchQuery.value) {
                return dbObjects.value.filter(item => {
                    return searchQuery.value
                        .toLowerCase()
                        .split(" ")
                        .every(v => item.name.toLowerCase().includes(v));
                });
            } else {
                return dbObjects.value;
            }
        });

        const confirmSelectedHeader = function() {
            kalepa.appData.pipeline.dbObjects = dbObjects.value;
            router.push({ path: "/pipeline/query_mode", query: { 'source': source, 'mode': mode} });
        };

        return {
            pipelineSource,
            handleFocus,
            handleBlur,
            testAndContinue,
            testConnection,
            testConnectionDone,
            loadingData,
            dbObjects,
            searchQuery,
            resultQuery,
            confirmSelectedHeader
        };
    },
};
</script>
