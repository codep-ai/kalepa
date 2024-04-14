<template>
    <main-section v-if="!loadingData">
        <div>
            <label class="font-bold mb-2">Select Models</label>
        </div>
        <div class="relative">
            <table class="table-auto">
                <thead>
                    <tr style="color:white;background-color:grey">
                        <th class v-for="(header, key) in models.header">{{ header.name }}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row) in models.contentData">
                        <td v-for="(column) in row.content">
                            <span v-html="column"></span>
                        </td>
                        <td>
                            <input type="checkbox" class="form-checkbox" v-model="row.checked" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button
            class="mt-5 inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3"
            type="submit"
        >
            <span class="px-2" @click="confirmData">Confirm</span>
        </button>
    </main-section>
    <div v-if="loadingData" class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
        <div class="flex items-center justify-center relative top-1/2">
            <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import MainSection from '@/components/MainSection'
import router from '../router';
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
import axios from 'axios'

export default {
    name: 'PreviewData',
    components: {
        MainSection,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const loadingData = ref(true);
        const models = ref({
            header: [],
            contentData: [],
        });
        if (!kalepa.appData.insight.selectedService) {
            router.push({ path: "/insight/" });
        }

        if (!kalepa.appData.insight.models) {
            loadingData.value = true;
            axios.get(kalepa.appData.routes.datasource.getModels, { params: {} })
                .then(function (response) {
                    kalepa.appData.insight.models = response.data;
                    response.data.header.forEach((element, index) => {
                        const headerObject = {
                            'name': element,
                            'index': index
                        }
                        models.value.header.push(headerObject);
                    });
                    models.value.contentData = response.data.content;
                    loadingData.value = false;
                });
        } else {
                    kalepa.appData.insight.models.header.forEach((element, index) => {
                        const headerObject = {
                            'name': element,
                            'index': index
                        }
                        models.value.header.push(headerObject);
                    });
                    models.value.contentData = kalepa.appData.insight.models.content;
                    loadingData.value = false;

        }

        const confirmData = function () {
            kalepa.appData.selectedModels = [];
            models.value.contentData.forEach((contentData, index) => {
                if (contentData.checked === true) {
                    kalepa.appData.selectedModels.push(contentData);
                }
            });
            console.log(kalepa.appData.selectedService);
            console.log(kalepa.appData.selectedModels);
            router.push({ path: "/insight/datasource" });
        };

        return {
            models,
            loadingData,
            confirmData,
        }

    }
}
</script>