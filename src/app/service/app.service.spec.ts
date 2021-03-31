import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppService } from './app.service';
import { Store } from '@ngrx/store';
import { garage_url, jwt } from '../constants/contants';
import * as data from '../mock-data/data.json';
import * as jwtJson from '../mock-data/jwt.json';

describe('Service Component', () => {
  const appServiceStub = () => ({
    getGarageDetails: () =>data,
    getLoginDetails: () => jwtJson
  })

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [

      ],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide: Store, useFactory: appServiceStub }
      ]
    }).compileComponents();
  }));

  it('should create the service and call through', async(() => {
    const fixture = TestBed.inject(AppService);
    const callBack = spyOn(fixture, 'getGarageDetails').and.callThrough();
    expect(callBack).toBeDefined();
  }));


  it('Fake Call to Get Login Details', async(() => {
    const fixture = TestBed.inject(AppService);
    const callBack = spyOn(fixture, 'getLoginDetails').and.callThrough();
    expect(callBack).toBeDefined();
  }));


  it('cross check the garage URL', async(() => {
    const url = 'http://localhost:3000/products';
    expect(garage_url).toBeDefined();
    expect(garage_url).toEqual(url);
  }));

  it('cross check the Jwt URL', async(() => {
    const url = 'http://localhost:3002/jwt';
    expect(jwt).toBeDefined();
    expect(jwt).toEqual(url);
  }));
});
