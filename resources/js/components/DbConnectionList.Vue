<template>
    <div class="db-collection-list">
        <div class="db-collection-item" v-for="connection in connections">
            <div class="collection-name">{{ connection.name }}</div>
            <div class="collection-detail">
                <div class="md:flex md:items-center mb-1">
                    <div class="md:w-1/3">
                        <label
                            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        >Host</label>
                    </div>
                    <div class="md:w-2/3">{{ connection.host }}</div>
                </div>
                <div class="md:flex md:items-center mb-1">
                    <div class="md:w-1/3">
                        <label
                            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        >Port</label>
                    </div>
                    <div class="md:w-2/3">{{ connection.port }}</div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label
                            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                        >Database</label>
                    </div>
                    <div class="md:w-2/3">{{ connection.dbname }}</div>
                </div>
            </div>
            <div>
                <jb-button label="Use" color="info" @click="$router.push('/connection/' + connection.id)" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import JbButtons from '@/components/JbButtons'
import JbButton from '@/components/JbButton'

export default {
    name: "DbConnectionList",
    components: {
        JbButton,
        JbButtons
    },
    props: {
        connections: Array
    },
    setup() {
    }
}
</script>