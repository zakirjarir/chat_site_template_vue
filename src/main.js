import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import baseMixin from './mixins/baseMixin'
import supabaseRealtimeMixin from './mixins/supabaseRealtimeMixin'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router)
app.mixin(baseMixin)
app.mixin(supabaseRealtimeMixin)

app.mount('#app')
