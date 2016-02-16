import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import * as Pages from './pages/pages';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <h1>Etik-Tak</h1>
        <p>Nu med ekstra mange contributors</p>
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path:'/login',   name: 'Login',    component: Pages.LoginComponent},
    {path:'/',        name: 'Home',     component: Pages.HomeComponent}
])
export class AppComponent { }
