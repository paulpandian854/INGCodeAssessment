import { Component, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { VEHICLES } from 'src/app/interface/garage-details.interface';
import { AppState } from '../../ngrx/app.state';

@Component({
    selector: 'departure-table',
    templateUrl: './shipping-table.component.html',
    styleUrls: ['./shipping-table.component.css']
})

export class ShippingTableComponent {
    vehicles: VEHICLES[] = [];
    jwt: string = '';
    totalAmount: number = 0;

    constructor(private store: Store<AppState>) {
        this.callFromStore();
    }
    calculateTotal(){
        this.totalAmount = 0;
        this.vehicles.forEach(eac => {
            this.totalAmount = this.totalAmount + eac.price;
        })
    }

    callFromStore() {
        this.store.select(state => state.garageDetailsStore).subscribe(storeResponse => {
            this.vehicles = storeResponse.cardDetails;
            this.calculateTotal();
        });
    }

    removeFromCart(vehicle : VEHICLES) {
        const resp = this.vehicles.filter(vel => vel._id!== vehicle._id);
        this.vehicles= resp;
        this.calculateTotal();
    }
}