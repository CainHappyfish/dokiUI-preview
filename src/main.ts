import { createApp } from 'vue'
import App from './App.vue'
// ts-ignore
import DokiUI from "doki-ui/dist/doki-ui.js"
import "doki-ui/dist/style.css"
import "doki-ui/src/styles/index.scss"

createApp(App).use(DokiUI).mount('#app')