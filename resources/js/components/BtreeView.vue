<template>
<b-tree-view :data="treeData"></b-tree-view>
</template>

<script>
import BootstrapVueTreeview  from 'bootstrap-vue-treeview'
Vue.use(BootstrapVueTreeview)
  export default {
    name: 'SecTreeView',
  data: function() {
    return {
      treeData: [{"id": 2, "name": "Venus" , "children": [{"id": 3, "name": "Neptune"}, {"id": 4, "name": "Stratus"} ] } ]
    }
  }
}

</script>
