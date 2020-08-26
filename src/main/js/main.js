import '@riotjs/hot-reload'
import App from './app2.riot'
import { component } from 'riot'

component(App)(document.getElementById('app'), {
    title: 'Riot.js with Anime.js!'
})