import '@riotjs/hot-reload'
import { component } from 'riot'
import 'semantic-ui-riot'
import App from './app11.riot'

component(App)(document.getElementById('app'), {
    title: 'Hello Riot with Ionic'
})