<template>
    <div class="flex justify-center items-center">
        <div class="flex flex-wrap w-3/5">
            <div v-for="source in sources" class="p-4 w-1/4" @click="selectSource(source.id)">
                <div
                    class="scale_1_1 w-200 m-auto border-solid border rounded cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-indigo-100 duration-300"
                    style="width:200px; height:148px "
                >
                    <div class="m-auto flex" style="width:60px; height:60px; margin-top:21px">
                        <img
                            :src="'images/' + source.icon"
                            class="source_icon w-9 m-auto"
                            style="max-height: 34px;"
                        />
                    </div>
                    <div class="text-center">{{ source.name }}</div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="loadingData" class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <div class="flex items-center justify-center relative top-1/2">
            <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
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
import * as chartConfig from "@/components/Charts/chart.config";
import Icon from "@/components/Icon";
import axios from 'axios';
import router from "@/router";


export default {
    name: "pipeline_sources",
    components: {
        Icon
    },
    setup() {

        const sources = ref([]);
        const loadingData = ref(true);
        const selectSource = function (sourceId) {
            console.log(sourceId);
            router.push({ path: "/pipeline/ingestion", query: { 'source': sourceId } });
        };

        if (!kalepa.appData.pipeline.sources) {
            kalepa.appData.pipeline.sources = null;
            axios.get(kalepa.appData.routes.datasource.list, { params: {} })
                .then(function (response) {
                    console.log(response);
                    sources.value = response.data;
                    kalepa.appData.pipeline.sources = response.data;
                    loadingData.value = false;
                });

        } else {
            sources.value = kalepa.appData.pipeline.sources;
                    loadingData.value = false;
        }


        return {
            sources,
            loadingData,
            selectSource,
        };
    },
};
</script>
