<template>
  <div class="grid grid-cols-5 gap-3 h-screen flex">
    <div class="bg-blue-100">
      <ul class="px-0">
        <li
          class="border list-none rounded-sm px-3 py-3"
          style="border-bottom-width: 0"
          v-for="database in databases"
        >
          <label class="inline-flex items-center">
            <input
              type="radio"
              class="form-radio"
              name="database"
              :value="database.name"
              v-model="database.checked"
              @change="changeDatabase($event, database)"
            />
            <span class="ml-2">{{ database.name }}</span>
          </label>
        </li>
      </ul>
    </div>
    <div class="bg-red-100 col-span-4 flex-1 flex overflow-hidden">
      <div v-show="selectedDatabase">
        <input
          v-model="filterTableName"
          @input="inputFilterTable"
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          type="text"
          placeholder="filter tables"
        />
      </div>
      <ul class="px-0 flex-1 overflow-y-scroll">
        <li
          class="border list-none rounded-sm px-3 py-3"
          style="border-bottom-width: 0"
          v-for="table in filteredTables"
        >
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="form-checkbox"
              v-model="table.checked"
            />
            <span class="ml-2">{{ table.name }}</span>
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
function initDatbaseData() {
  var databases = [];
  appData.databases.forEach((database) => {
    var db = {};
    db.name = database;
    db.checked = false;
    databases.push(db);
  });
  return databases;
}

function initTableData() {
  var tables = {};
  for (var dbName in appData.tables) {
    tables[dbName] = [];
    appData.tables[dbName].forEach((table) => {
      var tableData = {};
      tableData.name = table;
      tableData.checked = false;
      tables[dbName].push(tableData);
    });
  }
  return tables;
}
export default {
  created: () => {
    console.log("created", appData);
  },
  beforeCreate: () => {
    console.log("before", appData);
  },
  methods: {
    changeDatabase: function (e, selectedDatabase) {
      console.log("test", selectedDatabase);
      this.selectedDatabase = selectedDatabase;
      this.databases.forEach((database) => {
        if (database.name != selectedDatabase.name) {
          database.checked = false;
          this.tables[database.name].forEach((table) => {
            table.checked = false;
          });
        }
      });
      //show all tables
      this.filteredTables = this.tables[selectedDatabase.name];
      this.selectedDatabaseTables = this.tables[selectedDatabase.name];
    },
    inputFilterTable: function() {
        if (this.filterTableName.length === 0) {
            this.filteredTables = this.selectedDatabaseTables;
            return;
        }
        this.filteredTables = this.filteredTables.filter((table) => {
            console.log(table, this.filterTableName);
            if (table.name.toLowerCase().includes(this.filterTableName.toLowerCase())) {
                return true;
            }
            return false;
        });
    }
  },
  data: () => {
    return {
      databases: initDatbaseData(),
      tables: initTableData(),
      filteredTables: [],
      filterTableName: '',
      selectedDatabaseTables: [],
      selectedDatabase: null,
    };
  },
};
</script>
