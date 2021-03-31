import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from '../app/components/login-component/login-component.component';
import { ShippingTableComponent } from './components/shipping-cart/shipping-table.component';
import { GarageDetailsComponent} from './components/garage-details/garage-details.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'garage-details',
    component: GarageDetailsComponent
  },
  {
    path: 'check-out',
    component: ShippingTableComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
