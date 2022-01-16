<template>
    <main-section>
        <div>
            <label class="font-bold mb-2">Preview Data</label>
            <button
                class="float-right inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3"
                type="submit"
            >
                <span class="px-2" @click="confirmData">Confirm</span>
            </button>
        </div>
        <div class="relative">
            <table>
                <thead>
                    <tr>
                        <th v-for="(header, key) in previewData.header">{{ header }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row) in previewData.content">
                        <td v-for="(column) in row">{{ column }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="loadingData" class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
            <div class="flex items-center justify-center relative top-1/2">
                <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        </div>
    </main-section>
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
        const id = 1;
        const loadingData = ref(false);
        // todo: pass parameters to server
        kalepa.appData.datasource = {};
        const previewData = ref({
            header: null,
            content: []
        });
        if (!kalepa.appData.datasource.preview) {
            loadingData.value=true;
            axios.get(kalepa.appData.routes.datasource.preview, { params: {} })
                .then(function (response) {
                    kalepa.appData.datasource.preview = response.data;
                    previewData.value.header = response.data.header;
                    previewData.value.content = response.data.content;
                    loadingData.value=false;
                });
            //console.log('store', store.state.connections);
        }

        const confirmData = function () {

        }

        return {
            previewData,
            confirmData,
            loadingData
        }

    }
}
</script>
