import {Component} from 'angular2/core';

import * as Pages from './pages/pages';

@Component({
    selector: 'app',
    directives: [Pages.LoginComponent],
    template: '<etik-tak-login-form></etik-tak-login-form>'
})
export class AppComponent { }
