require("./bootstrap");

import { createApp } from "vue";
import App from './App.vue'
import axios from 'axios'
import router from './router'

/*
//import Home from "./components/Home.vue";
//import DatabaseList from "./components/DatabaseList.vue";
//import NewDatabaseList from "./components/NewDatabaseList.vue";

const app = createApp({
  components: {
    Home,
    NewDatabaseList
  }
});
*/

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(router)
app.mount('#app')