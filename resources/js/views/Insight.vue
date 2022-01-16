<template>
    <main-section>
        <div>
        <label class="block font-bold mb-2" :class="{'text-red-500': showNotice}">Select Model</label>
        </div>
        <div class="relative">
            <select 
            class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-gray-800" 
            v-model="selectedModel" @change="changeModel()">
                <option value="">
                    Please select a model
                </option>
                <option
                    v-for="option in modelOptions"
                    :key="option.id ?? option"
                    :value="option"
                >{{ option.label ?? option }}</option>
            </select>
        </div>
        <div class="h-12 px-3">
            {{selectedModel.description}}
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
    name: 'Insight',
    components: {
        MainSection,
    },
    setup() {

        const modelOptions = [
            { id: 1, label: 'Predict a value', description: 'Predict a value description' },
            { id: 2, label: 'Make a recommendation', description: 'Make a recommendation description' },
            { id: 3, label: 'Classify a object', description: 'Classify a object description' }
        ]

        const selectedModel = ref({});
        selectedModel.value = '';

        const showNotice = ref(false);

        const changeModel = function(e) {
            console.log('change model now');
            if (selectedModel.value) {
                showNotice.value = false;
            }
        };
        const nextStep = function (e) {
            e.preventDefault();
            if (!selectedModel.value) {
               showNotice.value = true; 
            } else {
               showNotice.value = false; 
               kalepa.appData.selectedModel = selectedModel.value;
               router.push({path: "/insight/datasource"});
            }
        };

        return {
            modelOptions,
            selectedModel,
            nextStep,
            showNotice,
            changeModel,
        }
    }
}
</script>
