
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

//Methods to make a service call to the URL
@Injectable()
export class AppService {

    constructor(private http: HttpClient) {

    }

    //Service call to API to get login details
    getLoginDetails(userName: string, password: string): Observable<any> {
        //Url is fetched from constant file
        const url = `${environment.jwt}`;

        return this.http.get(url).pipe(map((response: any) => {
            return response
        }),
            catchError(error => {
                return this.handleError(error);
            }))
    }

    //Servce call to call the API to get Station Details
    getGarageDetails(jwt: string): Observable<any> {
        //Url is fetched from constant file
        const url = `${environment.garage_url}`;
        return this.http.get(url).pipe(map((response: any) => {
            return response
        }),
            catchError(error => {
                return this.handleError(error);
            }))

    }

    handleError(error: any) {
        return of(error);
    }

    bodyParser(response: any) {
        return JSON.parse(response);
    }



}