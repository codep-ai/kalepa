<template>
  <tree :nodes="nodes" :config="config"></tree>
</template>

<script>
function getData() {
  var data = {};
  var nodes = {};
  for (var dbName in appData.tables) {
    var tables = appData.tables[dbName];
    nodes[dbName] = {
      text: dbName,
      children: tables,
    }
    tables.forEach(tableName => {
      nodes[tableName] = {
        text: tableName
      }
    });
  }
  data.roots = appData.databases;
  data.nodes = nodes;
  return data;
}
import treeview from "vue3-treeview";
import "vue3-treeview/dist/style.css";
export default {
  components: {
    tree: treeview,
  },
  created: () => {
    console.log("created", appData);
  },
  beforeCreate: () => {
    console.log("before", appData);
  },
  customFunction: () => {
    console.log('test') ;
  },
  data: () => {
    var self = this;
    var myData = getData();
    //console.log(myData);
    return {
      config: {
        roots: myData.roots,
        checkboxes: true,
      },
      nodes: myData.nodes,
    };
  },
  methods: { },
};
</script>
