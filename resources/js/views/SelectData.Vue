<template>
    <main-section>
        <div class="w-full md:w-2/3 p-5 bg-white" v-if="sourceData.header.length > 0">
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
                        v-for="(header, index) in resultQuery"
                        class="p-4 hover:bg-gray-50 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            :id="'header-' + index"
                            class="form-checkbox"
                            :value="header.name"
                            v-model="header.checked"
                        />
                        <label class="inline-block pl-2 w-10/12" :for="'header-' + index">{{ header.name }}</label>
                    </li>
                </ul>
            </div>
            <button
                class="mt-5 inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3"
                type="submit"
            >
                <span class="px-2" @click="confirmSelectedHeader">Confirm</span>
            </button>
        </div>
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
import { ref, reactive, computed } from 'vue'
import MainSection from '@/components/MainSection'
import router from '../router';
import { useStore } from "vuex";
import { useRoute } from 'vue-router';
import axios from 'axios'

export default {
    name: 'SelectData',
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
        const sourceData = ref({
            header: [],
            content: []
        });
        if (!kalepa.appData.datasource.preview) {
            loadingData.value = true;
            axios.get(kalepa.appData.routes.datasource.preview, { params: {} })
                .then(function (response) {
                    kalepa.appData.datasource.preview = response.data;
                    response.data.header.forEach((element, index) => {
                        const headerObject = {
                            'name': element,
                            'checked': true,
                            'index': index
                        }
                        console.log('push ', headerObject);
                        sourceData.value.header.push(headerObject);
                    });
                    sourceData.value.content = response.data.content;
                    loadingData.value = false;
                });
            //console.log('store', store.state.connections);
        }

        const searchQuery = ref(null);
        const resultQuery = computed(() => {
            if (searchQuery.value) {
                return sourceData.value.header.filter(item => {
                    return searchQuery.value
                        .toLowerCase()
                        .split(" ")
                        .every(v => item.name.toLowerCase().includes(v));
                });
            } else {
                return sourceData.value.header;
            }
        });

        const confirmSelectedHeader = function() {
            const selectedHeaderIndex = [];
            const selectedHeader = [];
            sourceData.value.header.forEach(header => {
               if (header.checked) {
                   selectedHeaderIndex.push(header.index);
                   selectedHeader.push(header.name);
               } 
            });
            const previewData = [];

            sourceData.value.content.forEach(row => {
                const rowData = [];
                row.forEach((column, index) => {
                    if (selectedHeaderIndex.includes(index)) {
                        rowData.push(column);
                    }
                });
                previewData.push(rowData);
            });
            kalepa.appData.insight.selectedPreviewData = previewData;
            kalepa.appData.insight.selectedPreviewDataHeader = selectedHeader;
            router.push({path: "/insight/datasource/preview_data"});
        }

        return {
            sourceData,
            loadingData,
            searchQuery,
            resultQuery,
            confirmSelectedHeader
        }

    }
}
</script>
