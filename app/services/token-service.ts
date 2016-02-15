import {Injectable} from 'angular2/core';
import {StringUtils} from '../util/string-utils';

@Injectable()
export class TokenService {

    public token: string;

    hasToken(): boolean {
        return !StringUtils.isEmpty(this.getToken())
    }

    getToken(): string {
        if (StringUtils.isEmpty(this.token)) {
            this.token = localStorage.getItem("token")
        }
        return this.token
    }

    setToken(token: string) {
        this.token = token;
        localStorage.setItem('token', token);
        console.log(`Set token: ${token}`);
    }
}
