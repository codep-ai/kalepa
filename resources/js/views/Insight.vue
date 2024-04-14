<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
<template>
    <main-section>
        <div>
            <label class="block font-bold mb-2" :class="{ 'text-red-500': showNotice }">I want to</label>
        </div>
        <div class="relative">
            <select
                class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-gray-800"
                v-model="selectedService"
                @change="changeModel()"
            >
                <option value>Please select</option>
                <option
                    v-for="option in modelOptions"
                    :key="option.id ?? option"
                    :value="option"
                >{{ option.label ?? option }}</option>
            </select>
        </div>
        <div class="h-12 px-3">{{ selectedService.description }}</div>

        <transition name="fade">
            <div class="relative" v-if="selectedService.approachOptions">
                <select
                    class="px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full dark:placeholder-gray-400 h-12 border bg-white dark:bg-gray-800"
                    v-model="selectedService.selectedApproach"
                    @change="changeApproach()"
                >
                    <option
                        v-for="option in selectedService.approachOptions"
                        :key="option.id ?? option"
                        :value="option"
                    >{{ option.label ?? option }}</option>
                </select>
            </div>
        </transition>

        <transition name="fade">
        <div v-if="showContinue">
            <div class="h-12 px-3"></div>
            <button
                class="inline-flex cursor-pointer justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border rounded ring-blue-700 p-2 hover:bg-blue-600 bg-blue-500 text-white border-blue-600 mr-3 last:mr-0 mb-3"
                type="submit"
                @click="nextStep"
            >
                <!--v-if-->
                <span class="px-2">Continue</span>
            </button>
        </div>
        </transition>
    </main-section>
</template>

<script>
import { ref, reactive, watch } from 'vue'
import MainSection from '@/components/MainSection'
import router from '../router';

export default {
    name: 'Insight',
    components: {
        MainSection,
    },


    setup() {

        const modelOptions = [
            {
                id: 1, label: 'Predict a value', description: 'Predict a value from the machine learning model, such as house price, income, cost etc.',
                approachOptions: {
                    'use_existing_model': 'Predict using exist model(s)',
                    'create_new_model': 'Create new model(s)',
                },
                selectedApproach: null
            },
            { id: 2, label: 'Make a recommendation', description: 'Make a recommendation description' },
            { id: 3, label: 'Classify a object', description: 'Classify a object description' },
            { id: 4, label: 'Personalize', description: 'Provide personalized experience for customers' }
        ]


        const selectedService = ref({});
        selectedService.value = '';

        const showNotice = ref(false);
        const showContinue = ref(false);

        const changeModel = function (e) {
            if (selectedService.value) {
                showNotice.value = false;
            }
            if (selectedService.value.approachOptions) {
                selectedService.value.selectedApproach = selectedService.value.approachOptions.use_existing_model;
            }
            changeApproach();
        };

/*
        watch(selectedService.value.selectedApproach, (newApproache, previousApproach) => {
            console.log(selected.value);
        });
        */

        const changeApproach = function() {
            if (selectedService.value && selectedService.value.selectedApproach) {
                showContinue.value = true;
                return;
            }
            showContinue.value = false;
        }

        const nextStep = function (e) {
            e.preventDefault();
            if (!selectedService.value) {
                showNotice.value = true;
            } else {
                showNotice.value = false;
                kalepa.appData.insight.selectedService = selectedService.value;
                router.push({ path: "/insight/select_model" });
            }
        };

        return {
            modelOptions,
            selectedService,
            nextStep,
            showNotice,
            changeModel,
            changeApproach,
            showContinue,
        }
    }
}
</script>
