import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login-component.component';
import { AppService } from '../../service/app.service';
import { Store } from '@ngrx/store';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';

class storeStub {
  select = () => Observable.create();
}

class routerStub {
  select = () => Observable.create();
}

describe('Login Component', () => {
  const appServiceStub = () => ({
    getLoginDetails: () => [{
      "code": 200,
      "message": "eyJhbGciOiJIUzI1NiJ9.QXJ2.G4YE_nrDmGAgrUuCFFW5N-m9xGN0s4Qv0s-ZD-XBW4k"
    }],
  });

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        LoginComponent
      ],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide: Store, useClass: storeStub },
        { provide: Router, useClass: routerStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have login Component`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.main-wrapper'));
    expect(ui).toBeDefined();
  }));


  it(`Login Component should have user field to login into application`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.example-form'));
    expect(ui).toBeDefined();
  }));

  it(`Fake call to the service`, async(() => {
    const fixture = TestBed.createComponent(LoginComponent);
    const response = fixture.debugElement.injector.get(AppService);
    const callBack = spyOn(response, 'getLoginDetails').and.callThrough();
    expect(callBack).toBeDefined();
  }));
});
