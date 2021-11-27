<template>
  <table>
    <thead>
    <tr>
      <th></th>
      <th>Dataflow Name</th>
      <th>Created At</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="dataflow in dataflowCollection" >
      <td> </td>
      <td data-label="DataflowName"><router-link :to="/project/ + dataflow.id">{{ dataflow.name }}</router-link></td>
      <td data-label="Created"><router-link :to="/project/ + dataflow.id">{{ dataflow.created_at }}</router-link></td>
      <td > </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import ModalBox from '@/components/ModalBox'
import CheckboxCell from '@/components/CheckboxCell'
import Level from '@/components/Level'
import JbButtons from '@/components/JbButtons'
import JbButton from '@/components/JbButton'
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'DataflowTable',
  components: {
    ModalBox,
    CheckboxCell,
    Level,
    JbButtons,
    JbButton,
    UserAvatar
  },
  props: {
    checkable: Boolean,
    dataflowCollection: Array
  },
  setup () {
    const store = useStore()

    const darkMode = computed(() => store.state.darkMode)

    const isModalActive = ref(false)

    const isModalDangerActive = ref(false)



    return {
      darkMode,
      isModalActive,
      isModalDangerActive,
      mdiEye,
      mdiTrashCan
    }
  }
}
</script>
