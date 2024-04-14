<template>
    <main-section>
        <div>
        <label class="block font-bold mb-2" :class="{'text-red-500': showNotice}">Select Data Source</label>
        </div>
        <div class="relative">
            <select 
            class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-gray-800" 
            v-model="selectedDataSource" 
            @change="changeOption"
            >
                <option value="">
                    Please select a data source<source>
                </option>
                <option
                    v-for="option in dataSources"
                    :key="option.id ?? option"
                    :value="option"
                >{{ option.label ?? option }}</option>
            </select>
        </div>
        <div class="h-12 px-3">
            {{selectedDataSource.description}}
        </div>
        <div>
        <button class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3" 
           type="submit"
           @click="nextStep"
        ><!--v-if--><span class="px-2">Continue</span></button>
        </div>
    </main-section>
</template>

<script>
import { ref, reactive } from 'vue'
import MainSection from '@/components/MainSection'
import router from '../router';

export default {
    name: 'InsightDataSource',
    components: {
        MainSection,
    },
    setup() {

        console.log(router.params);
        const dataSources = [
            { id: 1, label: 'kc_house_data.csv', description: 'House data description' },
        ]

        const selectedDataSource = ref({});
        selectedDataSource.value = '';

        const showNotice = ref(false);

        const changeOption = function() {
            if (selectedDataSource.value) {
               showNotice.value = false; 
            }
        };

        const nextStep = function (e) {
            e.preventDefault();
            console.log('testing', selectedDataSource.value);
            if (!selectedDataSource.value) {
               showNotice.value = true; 
            } else {
               showNotice.value = false; 
               kalepa.appData.selectedDataSource = selectedDataSource.value;
               router.push({path: "/insight/datasource/select_data"});
            }
        };

        return {
            dataSources,
            selectedDataSource,
            showNotice,
            nextStep,
            changeOption,
        }
    }
}
</script>
