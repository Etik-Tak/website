import {Component} from 'angular2/core'
import {AuthenticationService} from '../../services/authentication-service'
import {Router} from 'angular2/router'

@Component({
    selector: 'etik-tak-login-form',
    template: `
        <h1>Log ind</h1>
        <form (submit)="login(username.value, password.value)">
            <input #username class="form-control" placeholder="Brugernavn" required="required" type="text" /> <br />
            <input #password class="form-control" placeholder="Adgangskode" required="required" type="password" /> <br />
            <button type="submit" class="btn btn-default">Log ind</button>
            <p>{{ stateText }}</p>
        </form>
    `
})

export class LoginComponent {

    stateText: string;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router) {
            
        this.authenticationService.successfulLoginEvent.subscribe(
            (token: string) => {
                this.stateText = "Du er nu logget ind!";
                setTimeout(() => {this.router.navigate(["Home"])}, 2000);
            }
        );
        
        this.authenticationService.failedLoginEvent.subscribe(
            (error: string) => this.stateText = "Øv!"
        );
    }

    login(username: string, password: string) {
        this.authenticationService.login(username, password);
    }
}
