import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import Home from './components/views/Home.vue'
import Doc from './components/views/Doc.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/xxx',
            component: Doc
        }
    ]
})

const app = createApp(App);
app.use(router);
app.mount('#app')
