import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import ListUser from "./components/pages/ListUser"
import CreateUser from "./components/pages/CreateUser"
import EditUser from './components/pages/EditUser';
import ShowUser from './components/pages/ShowUser';

axios.defaults.baseURL = process.env.VUE_APP_API_URL

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: ListUser },
      { path: '/create', component: CreateUser },
      { path: '/edit/:id', component: EditUser },
      { path: '/show/:id', component: ShowUser },
    ],
});
createApp(App).use(router).mount('#app')
