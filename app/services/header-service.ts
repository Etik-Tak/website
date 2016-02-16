import {Injectable} from 'angular2/core';
import {TokenService} from './token-service'
import {Headers} from 'angular2/http';
import {StringUtils} from '../util/string-utils';
import {ExtendedHeaders} from '../util/extended-headers';

@Injectable()
export class HeaderService {

    constructor(private tokenService: TokenService) {}

    authenticatedHeaders(): Headers {
        if (this.tokenService.hasToken()) {
            return new Headers({"X-Auth-Token": this.tokenService.getToken()});
        }
        return new Headers();
    }

    authenticationHeaders(username: string, password: string): Headers {
        return new Headers({"X-Auth-Username": username, "X-Auth-Password": password});
    }
}
