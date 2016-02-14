import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {AuthenticationService} from './services/authentication-service'
import {HTTP_BINDINGS} from 'angular2/http'

bootstrap(AppComponent, [AuthenticationService, HTTP_BINDINGS]);
