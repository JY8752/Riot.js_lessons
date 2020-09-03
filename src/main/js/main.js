import '@riotjs/hot-reload'
import { Route, Router } from '@riotjs/route'
import { component, register } from 'riot'
import App from './app12.riot'

register('router', Router)
register('route', Route)
component(App)(document.getElementById('app'), {
    title: 'Riot Route Demo'
})