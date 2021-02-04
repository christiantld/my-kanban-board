import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import store from './store/index'
import App from './App.vue'
import './index.css'

const app = createApp(App)
app.mount('#app')
