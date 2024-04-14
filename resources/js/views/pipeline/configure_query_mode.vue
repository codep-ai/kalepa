<template>
    <div class="justify-center items-center pt-16" style="max-width: 1200px; margin:auto;">
        <div class="grid grid-cols-5 gap-3">
            <div class="col-span-3">
                <div
                    v-for="(dbObject, index) in dbObjects"
                    class="grid grid-cols-3"
                    :class="getRowClass(index)"
                    style="padding: 25px 15px 25px 15px"
                >
                    <div class="col-span-2 pt-1">{{ dbObject.TABLE_NAME }}</div>
                    <div>
                        <select
                            class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                        >
                            <option
                                v-for="queryMode in queryModes"
                                :value="queryMode.name"
                            >{{ queryMode.label }}</option>
                        </select>
                        <div
                            class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
                        >
                            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-100 col-span-2 pb-5">
                <div v-for="queryMode in queryModes" class="mt-5 pl-3 pr-3">
                    <div>
                        <b>{{ queryMode.label }}</b>
                    </div>
                    <div>{{ queryMode.description }}</div>
                </div>
            </div>
        </div>
        <button
            class="mt-5 inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3"
            type="submit"
        >
            <span class="px-2" @click="">Continue</span>
        </button>
    </div>
</template>

<style scoped>
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
import { walkFunctionParams } from "@vue/compiler-core";

export default {
    name: "Query Mode",
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

        const queryModes = [{
            'label': 'Full Load',
            'name': 'full_load',
            'description': 'Attempts to replicate the full table in a single run.',
        },
        {
            'label': 'Delta - timestamp',
            'name': 'delta',
            'description': 'Maintains the job position using a Timestamp column. The column should not have nulls and must be updated every time a row is added or updated',
        },
        {
            'label': 'Change Data Capture',
            'name': 'change_data_capture',
            'description': 'Maintains the job position using a Timestamp & incrementing column. The timestamp column can have nulls but, must be updated every time a row is updated',
        },
        {
            'label': 'Unique Incrementing Append Only',
            'name': 'increment_append_only',
            'description': 'Maintains the job position using an incrementing column value. Does not capture row updates. The columns must not contain any null values',
        },
        {
            'label': 'Change Tracking',
            'name': 'change_tracking',
            'description': 'Uses the Change Tracking information to replicate all row additions and updates',
        }];

        try {
            const dbObjects = ref([]);
            kalepa.appData.pipeline.dbObjects.forEach(function (dbObject) {
                if (dbObject.checked) {
                    dbObjects.value.push(dbObject);
                }
            });

            const getRowClass = function (index) {
                if ((index + 1) % 2 == 1) {
                    return 'bg-blue-100';
                }
                return '';
            }

            return {
                queryModes,
                dbObjects,
                getRowClass,
            };
        } catch (e) {
            router.push({ path: "/pipeline/configure", query: { 'source': source, 'mode': mode } });
        }


    },
};
</script>
