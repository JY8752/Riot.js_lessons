import '@riotjs/hot-reload'
import { component } from 'riot'
import 'semantic-ui-riot'
import App from './app6.riot'

component(App)(document.getElementById('app'), {
    title: 'Semantic UI Riot Demo'
})