import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
    private apiUrl: string;
    private token: any;
    public authenticated = false;
//comment test
    public constructor(@Inject('environment') public env, public http: Http) {
        // if (location.host.toLowerCase().startsWith('localhost')) {
        //     this.apiUrl = 'http://localhost/penoc/api';
        // } else {
        //     this.apiUrl = 'http://www.penoc.org.za/api';
        // }
    }

    public appendApiHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
        options = options || {};
        options.headers = options.headers || new Headers();
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('API_KEY', 'Orienteering');
        options.headers.append('Authorization', 'Bearer ' + this.token);

        return options;
    }

    public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.env.apiURL + url;
        options = this.appendApiHeaders(options);
        return this.http.get(url, options);
    }

    public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        url = this.env.apiURL + url;
        options = this.appendApiHeaders(options);
        return this.http.post(url, body, options);
    }

    public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        url = this.env.apiURL + url;
        options = this.appendApiHeaders(options);
        return this.http.put(url, body, options);
    }

    public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.env.apiURL + url;
        options = this.appendApiHeaders(options);
        return this.http.delete(url, options);
    }

    public signIn(userName: String, password: String): Observable<boolean> {

        let post = this.post('/authenticate', {username: userName, password: password});

        post.subscribe(
            response => {
                if (response.status === 200) {
                    this.token = response.json()
                    this.authenticated = true;
                } else {
                    this.token = null;
                    this.authenticated = false;
                }
            },
            error=>{
                this.token = null;
                this.authenticated = false;
            }
        );

        let authenticated = Observable.create(observer => {
            post.subscribe(response => {
                if (response.status === 200) {
                    observer.next(true);
                } else {
                    observer.next(false);
                }
            },
            error => {
                observer.next(false);
            })
        });

        return authenticated
    }

    public signOut() {
        this.token = undefined;
        this.authenticated = false;
    }
}
