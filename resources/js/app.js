require("./bootstrap");

import { createApp } from "vue";
import Home from "./components/Home.vue";
//import DatabaseList from "./components/DatabaseList.vue";
import NewDatabaseList from "./components/NewDatabaseList.vue";

const app = createApp({
  components: {
    Home,
    NewDatabaseList
  }
});

app.mount("#app");