import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { GarageDetailsComponent } from './garage-details.component';
import { AppService } from '../../service/app.service';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import * as data from '../../mock-data/data.json';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';

class storeStub {
  select = () => Observable.create();
}

class routerStub {
  select = () => Observable.create();
}

describe('Garage Details Component', () => {
  const appServiceStub = () => ({
    getGarageDetails: () => data,
  });

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        GarageDetailsComponent
      ],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide: Store, useClass: storeStub },
        { provide: MatDialog, useClass: storeStub },
        { provide: Router, useClass: routerStub }

      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(GarageDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Second Hand Cars Garage'`, async(() => {
    const fixture = TestBed.createComponent(GarageDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Second Hand Cars Garage');
  }));


  it(`Garage component should have Card Layout`, async(() => {
    const fixture = TestBed.createComponent(GarageDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.content'));
    expect(ui).toBeDefined();
  }));

  it(`Garage should contain a dropdown`, async(() => {
    const fixture = TestBed.createComponent(GarageDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('#navBar'));
    expect(ui).toBeDefined();
  }));


  it(`Fake call to the service`, async(() => {
    const fixture = TestBed.createComponent(GarageDetailsComponent);
    const response = fixture.debugElement.injector.get(AppService);
    const callBack = spyOn(response, 'getGarageDetails').and.callThrough();
    expect(callBack).toBeDefined();
  }));
});
