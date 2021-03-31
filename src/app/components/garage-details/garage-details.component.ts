
import { ProductInterface } from '../../ngrx/product.model';
import { AppState } from '../../ngrx/app.state';
import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppService } from '../../service/app.service';
import { TITLE } from '../../constants/contants';
import { VEHICLES, CARDETAILS } from 'src/app/interface/garage-details.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { YourDialog } from '../reusable-components/dialog-component/dailog-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './garage-details.component.html',
  styleUrls: ['./garage-details.component.css']
})
export class GarageDetailsComponent implements OnInit {
  trainStationResponse!: CARDETAILS[];
  vehicles!: VEHICLES[];
  jwt: string = '';
  title = TITLE;
  stationCode: string = '';
  selectedVehicles: VEHICLES[] = [];
  error: boolean = false;
  collapsed: boolean = true;
  wareHouse!: CARDETAILS[];

  constructor(private store: Store<AppState>,
    private appService: AppService,
    private matDialog: MatDialog,
    private router: Router) {
      //Calls / Get Details From Store
    this.callFromStore();
  }


  ngOnInit() {
    try {
      this.appService.getGarageDetails(this.jwt).subscribe(response => {
        try {
          if (response) {
            this.error = false;
            this.trainStationResponse = response;
            const warehouse = this.trainStationResponse.filter(resp => resp.name === "Warehouse A");
            this.wareHouse = warehouse;
            if (warehouse && warehouse[0]) this.vehicles = warehouse[0].cars.vehicles.sort((veh1, veh2) => veh1.date_added - veh2.date_added);
          }
        } catch (e) {
        }
      })
    }
    catch (error) {
      console.log(error)
    }

  }

  onDropDownClick(res: CARDETAILS) {
    //condition to check warehouses
    const warehouse = this.trainStationResponse.filter(resp => resp.name === res.name);
    this.wareHouse = warehouse;
    if (warehouse && warehouse[0]) this.vehicles = warehouse[0].cars.vehicles.sort((veh1, veh2) => veh1.date_added - veh2.date_added);
  }

  onAddToCart(vehicle: VEHICLES) {
    //condition to check duplicasy and add car to cart
    if (this.selectedVehicles.length > 0 &&
      this.selectedVehicles.filter(veh => (veh._id === vehicle._id)).length > 0) {
    }
    else {
      this.selectedVehicles.push(vehicle);
    }
  }

  OnRemoveFromCart(vehicle: VEHICLES) {
    //Remove a particular car from cart
    let index = this.selectedVehicles.indexOf(vehicle);
    this.selectedVehicles.splice(index, 1);
  }

  proceedToCheckout() {
    //Data is passed via store and in checkout data are shown
    //Action contains Type, Payload
    this.store.dispatch({
      type: 'STORE_PRODUCT',
      payload: <ProductInterface>{
        name: 'addProduct',
        jwt: [this.jwt],
        cardDetails: this.selectedVehicles
      }
    });
    this.router.navigate(['/', 'check-out'])
  }

  callFromStore(): void {
    //Method to Get details from Store
    this.store.select(state => state.garageDetailsStore).subscribe(storeResponse => {
      if (storeResponse.jwt.length > 0) {
        this.jwt = storeResponse.jwt[0];
      }
    });
  }

  onClickCard(vehicle: VEHICLES) {
    //Open Dialog and show more content of a particular car
    const dialogConfig = new MatDialogConfig();
    vehicle.wareHo = this.wareHouse;
    dialogConfig.data = vehicle;
    this.matDialog.open(YourDialog, dialogConfig);
  }

}
