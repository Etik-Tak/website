import {Injectable, EventEmitter} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {TokenService} from './token-service';
import {HeaderService} from './header-service';

@Injectable()
export class AuthenticationService {

    public token: string;
    public successfulLoginEvent: EventEmitter<string> = new EventEmitter();
    public failedLoginEvent: EventEmitter<any> = new EventEmitter();

    constructor(private http: Http, private tokenService: TokenService, private headerService: HeaderService) {}

    login(username: string, password: string): void {
        console.log(`Authenticating with username ${username} and password ${password}`);

        this.http.post("http://localhost:8080/service/authenticate", null, {
            headers: this.headerService.authenticationHeaders(username, password)
        })
        .map(response => response.json())
        .map(json => json.token)
        .subscribe(
            token => this.loginFromToken(token),
            error => this.loginFailed(error)
        );
    }
    
    loginFromToken(token: string) {
        this.tokenService.setToken(token);
        this.successfulLoginEvent.emit(token);
    }
    
    loginFailed(error: any) {
        console.log("Could not authenticate", error);
        this.failedLoginEvent.emit(error);
    }
}