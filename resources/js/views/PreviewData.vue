<template>
    <main-section>
        <div>
            <label class="font-bold mb-2">Preview Data</label>
        </div>
        <div class="relative">
            <table>
                <tr>
                    <td>
                        <table cellspacing="0" cellpadding="1" border="1" width="300">
                            <tr style="color:white;background-color:grey">
                                <th class v-for="(header, key) in previewData.header">{{ header }}</th>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tbody>
                    <tr>
                        <td>
                            <div style="width:100%; height:380px; overflow:auto;">
                                <table cellspacing="0" cellpadding="1" border="1" width="100%">
                                    <tr v-for="(row) in previewData.content">
                                        <td v-for="(column) in row">{{ column }}</td>
                                    </tr>
                                </table>
                            </div>
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
        <div
            v-if="loadingData"
            class="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50"
        >
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
        const previewData = ref({
            header: null,
            content: []
        });
        try {
            previewData.value.header = kalepa.appData.datasource.selectedPreviewDataHeader;
            previewData.value.content = kalepa.appData.datasource.selectedPreviewData;
        } catch (e) {
            console.log('exception', e);
            router.push({path: "/insight/datasource/select_data"});
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
