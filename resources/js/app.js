require("./bootstrap");

import { createApp } from "vue";
import Home from "./components/Home.vue";
import DatabaseList from "./components/DatabaseList.vue";

const app = createApp({
  components: {
    Home,
    DatabaseList
  }
});

app.mount("#app");