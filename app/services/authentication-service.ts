import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Subject} from 'rxjs/Rx';
import {TokenService} from './token-service';
import {HeaderService} from './header-service';

@Injectable()
export class AuthenticationService {

    public token: string;

    constructor(private http: Http, private tokenService: TokenService, private headerService: HeaderService) {}

    login(username: string, password: string): Subject<any> {
        console.log(`Authenticating with username ${username} and password ${password}`);

        let loginSubject: Subject<any> = new Subject();

        this.http.post("http://localhost:8080/service/authenticate", null, {
            headers: this.headerService.authenticationHeaders(username, password)
        })
        .map(response => response.json())
        .map(json => json.token)
        .subscribe(
            (token: string) => {
                this.tokenService.setToken(token);
                loginSubject.next(token);
            },
            (error: Response) => {
                loginSubject.error(error);
            }
        );
        
        return loginSubject;
    }
}