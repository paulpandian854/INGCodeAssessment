import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ShippingTableComponent } from './shipping-table.component';
import { AppService } from '../../service/app.service';
import { Store } from '@ngrx/store';
import * as data from '../../mock-data/data.json';
import { Observable } from 'rxjs';

describe('Checkout Table Component', () => {
  const appServiceStub = () => ({
    getGarageDetails: () => data
  })

  class storeStub {
    select = () => Observable.create();
  }

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        ShippingTableComponent
      ],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide: Store, useClass: storeStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ShippingTableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as table component 'app'`, async(() => {
    const fixture = TestBed.createComponent(ShippingTableComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.table-striped'));
    expect(ui).toBeDefined();
  }));

  it(`Value of departureDetails should be defined'`, async(() => {
    const fixture = TestBed.createComponent(ShippingTableComponent);
    const app = fixture.debugElement.componentInstance;
    app.departureDetails = [{ "id": 170, "joke": "Wo hu cang long. The translation from Mandarin Chinese reads: &quot;Crouching, Hidden Norris&quot;", "categories": [] }];
    expect(app.departureDetails).toBeDefined();
  }));



});
