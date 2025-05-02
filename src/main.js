import '@/assets/style/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// открытие \ закрытие навиграции
const buttonMenu = document.querySelector('.mobile-navigation__header-button')
const mobileNavigation = document.querySelector('.mobile-navigation')

buttonMenu.addEventListener('click', buttonMenuClicked)

function buttonMenuClicked(){
    mobileNavigation.classList.toggle('opened')
    document.querySelector('html').classList.toggle('hidden')
}
