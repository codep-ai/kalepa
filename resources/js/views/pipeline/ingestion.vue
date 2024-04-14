<template>
    <div class="justify-center items-center pt-16" style="max-width: 1200px; margin:auto;">
        <div class="text-xl mt-7 text-slate-500 text-center">
            <b>Ingestion Mode</b>
        </div>
        <div class="text-xs text-center">Select how you want to ingest data from the Source</div>
        <div class="flex">
            <div
                v-for="ingestion in displayIngestionMode"
                class="h-72 m-11 p-4 scale_1_1 text-center border-solid border rounded cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-indigo-100 duration-300"
                @click="selectMode(ingestion)"
            >
                <div class="w-16 h-16 border-solid border rounded-full m-auto pt-5 bg-gray-200">
                    <icon :path="ingestion.icon" :size="32"></icon>
                </div>
                <div class="mt-4">
                    <b>{{ ingestion.name }}</b>
                </div>
                <div class="mt-4 text-xs text-justify w-72">{{ ingestion.description }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.left {
    width: 500px;
}
.scale_1_1:hover {
    transform: scale(1.1);
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
import router from "@/router";
import { useRoute } from 'vue-router'

export default {
    name: "ingestion",
    components: {
        Icon
    },
    setup() {

        const specificIngestionMode = {
            'sqlserver': {
                name: 'Change Tracking',
                id: 'change_tracking',
                icon: mdiAlphabetAurebesh,
                description: " We fetches data using MSSQL's Change Tracking mode. We recommend using this mode to efficiently load Events. To use this, you will need to enable Change Tracking on tables. "
            }
        };

        const commonIngestionMode = [
            {
                name: 'Table',
                id: 'table',
                icon: mdiAppsBox,
                description: 'Ingestion will happen by running select SQL queries on your tables. This mode provides change data capture through modified / updated timestamp columns. Deletes are not replicated to the destination. '
            },
            {
                name: 'Custom SQL',
                id: 'custom_sql',
                icon: mdiDatabaseEditOutline,
                description: 'Ingestion will happen by running a custom SQL query provided by you on the database. This mode allows you to replicate database views or selective data sets queried through the SQL query. Deletes are not replicated to the destination. '
            },
        ];

        const route = useRoute();
        const source = route.query.source;
        const displayIngestionMode = ref([]);

        try {
            displayIngestionMode.value = ([
                specificIngestionMode[source],
                commonIngestionMode[0],
                commonIngestionMode[1],
            ]);
        } catch (e) {
            console.log(e);
        }

        const selectMode = function(ingestion) {
            console.log(ingestion);
            router.push({ path: "/pipeline/configure", query: { 'source': source, 'mode': ingestion.id} });
        }


        return {
            displayIngestionMode,
            selectMode
        };
    },
};
</script>
