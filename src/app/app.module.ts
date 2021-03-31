import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { addProductReducer } from './ngrx/product.reducer';
import { GarageDetailsComponent } from './components/garage-details/garage-details.component';
import { ShippingTableComponent } from './components/shipping-cart/shipping-table.component';
import { AppService } from './service/app.service';
import { localStorageSync } from 'ngrx-store-localstorage';
import { LoginComponent } from '../app/components/login-component/login-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './common/pipes/truncate';
import { ChildComponent } from './components/reusable-components/child-components.component';
import { AlertComponent } from './components/reusable-components/alert-component/alert-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material-module/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockHttpCalIInterceptor } from './interceptor/http.interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardComponent } from './components/reusable-components/mat-card-component/mat-card-component.component';
import { YourDialog } from './components/reusable-components/dialog-component/dailog-component.component';
import { MatTableComponent } from './components/reusable-components/mat-table-component/mat-table-component.component';


export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['garageDetailsStore'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    GarageDetailsComponent,
    ShippingTableComponent,
    LoginComponent,
    TruncatePipe,
    ChildComponent,
    AlertComponent,
    YourDialog,
    MatCardComponent,
    MatTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ garageDetailsStore: addProductReducer }, { metaReducers }),
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents: [YourDialog],
  providers: [AppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockHttpCalIInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
