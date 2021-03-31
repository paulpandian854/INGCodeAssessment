import { Component } from '@angular/core';

import { AppService } from '../../service/app.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../ngrx/app.state';
import { ProductInterface } from '../../ngrx/product.model';
import { JWTRESPONSE } from '../../interface/garage-details.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './login-component.component.html',
    styleUrls: ['./login-component.component.css']
})
export class LoginComponent {
    userName: string = '';
    password:string ='';
    error: string = '';
    showAlert: boolean = false;

    statusDisplayToUser: any = {
        '500': 'Please try after sometime, error in connection',
        '401': 'Unauthorized User, please check your credentials',
        '404': 'Please check after sometime, Application is down'
    }

    constructor(private appService: AppService, private store: Store<AppState>, private router: Router) {
    }

    onSubmit(): void {
        //Method to Submit Login Details
        this.appService.getLoginDetails(this.userName,this.password).subscribe(value => {
            if (value.code !== 200) {
                this.error = this.statusDisplayToUser[value.status];
                this.showAlert = true;
            }
            else if (value) {
                const response: JWTRESPONSE = value;
                // Ng Rx Store Action Call stored JWT
                this.store.dispatch({
                    type: 'STORE_PRODUCT',
                    payload: <ProductInterface>{
                        name: 'addProduct',
                        jwt: [response.message],
                        cardDetails: []
                    }
                });
                this.router.navigate(['/', 'garage-details'])
            }
        })
    }

}
