import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {TokenService} from './services/token-service';
import {HeaderService} from './services/header-service';
import {AuthenticationService} from './services/authentication-service'
import {HTTP_BINDINGS} from 'angular2/http'
import {ROUTER_PROVIDERS} from 'angular2/router'

import 'rxjs/add/operator/map';

bootstrap(AppComponent, [TokenService, HeaderService, AuthenticationService, HTTP_BINDINGS, ROUTER_PROVIDERS]);
