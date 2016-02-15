import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {TokenService} from './token-service';
import {HeaderService} from './header-service';

@Injectable()
export class AuthenticationService {

    public token: string;

    constructor(private http: Http, private tokenService: TokenService, private headerService: HeaderService) {}

    login(username: string, password: string) {
        console.log(`Authenticating with username ${username} and password ${password}`);

        this.http.post("http://localhost:8080/service/authenticate", null, {
            headers: this.headerService.authenticationHeaders(username, password)
        })
        .map(response => response.json())
        .map(json => json.token)
        .subscribe(
            token => {
                this.tokenService.setToken(token)
            },
            error => {
                console.log("Could not authenticate", error);
            }
        );
    }
}
