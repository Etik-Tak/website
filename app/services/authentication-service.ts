import {Injectable} from 'angular2/core'
import {Http, Headers, Response} from 'angular2/http'
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

    public token: string;

    constructor(private http: Http) {}

    login(username: string, password: string) {
        console.log(`Authenticating with username ${username} and password ${password}`);

        this.http.post("http://localhost:8080/service/authenticate", null, {
            headers: new Headers({'X-Auth-Username': username, 'X-Auth-Password': password})
        })
        .map(response => response.json())
        .map(json => json.token)
        .subscribe(
            token => {
                this.token = token;
                console.log(`Got token: ${token}`);
            },
            error => {
                console.log("Could not authenticate", error);
            }
        );
    }
}
