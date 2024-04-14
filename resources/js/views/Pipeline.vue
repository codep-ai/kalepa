<template>
    <div class="flex justify-center items-center pt-16">
        <div class="left w-3/6">
            <div class="text-blue-600">
                <b>PIPLINES</b>
            </div>
            <div class="mt-5" style="line-height: 18px;">
                <b>Move your data from SQL Server to any Destination </b>
            </div>
            <div
                class="text-xs mt-7 text-slate-500"
            >Get data in your Destinations in near real-time, easily manage schema drift with Auto Mapping, apply transformations and track progress.</div>
            <div class="mt-7">
                <button
                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center"
                    @click="connectSqlServer"
                >
                    <icon :path="mdiDatabasePlusOutline"></icon>
                    <span class="">Connect SQL Server</span>
                </button>
                <button
                    class="ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center"
                    @click="viewAllSources"
                >
                    <icon :path="mdiDotsGrid"></icon>
                    <span>View all sources</span>
                </button>
            </div>
        </div>
        <div class="right border-solid border rounded ">
            <img src="/images/pipeline-intro.svg" style="width:384px; height:244px" />
        </div>
    </div>
</template>

<style scoped>
.left {
    width: 500px;
}
</style>

<script>
// @ is an alias to /src
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import {
    mdiDatabasePlusOutline,
    mdiDotsGrid,
} from "@mdi/js";
import * as chartConfig from "@/components/Charts/chart.config";
import Icon from "@/components/Icon";
import router from "@/router";

export default {
    name: "Dataflow",
    components: {
        Icon
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

        const viewAllSources = function() {
            router.push({ path: "/pipeline/sources" });
        };
        const connectSqlServer = function() {
            router.push({ path: "/pipeline/ingestion", query: { 'source': 'sqlserver' } });
        }


        return {
            mdiDatabasePlusOutline,
            mdiDotsGrid,
            Icon,
            viewAllSources,
            connectSqlServer,
        };
    },
};
</script>
