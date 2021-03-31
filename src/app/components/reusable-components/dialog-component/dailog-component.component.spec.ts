import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { YourDialog } from './dailog-component.component';
import { AppService } from '../../../service/app.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as data from '../../../mock-data/data.json';
import { MatMenuModule } from '@angular/material/menu';
class storeStub {
  select = () => Observable.create();
}


xdescribe('Child Component', () => {
  const appServiceStub = () => ({
    getGarageDetails: () => data,
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        YourDialog
      ],
      imports: [MatMenuModule],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide: Store, useClass: storeStub }
      ]
    }).compileComponents();
  }));

  xit('should create the app', async(() => {
    const fixture = TestBed.createComponent(YourDialog);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  xit(`Garage detail component should contain categorybutton`, async(() => {
    const fixture = TestBed.createComponent(YourDialog);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.ml-5'));
    expect(ui).toBeDefined();
  }));

  xit(`Garage detail component should proceed to checkbox button`, async(() => {
    const fixture = TestBed.createComponent(YourDialog);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.mx-auto'));
    expect(ui).toBeDefined();
  }));

  xit(`Garage detail component should contain input values`, async(() => {
    const fixture = TestBed.createComponent(YourDialog);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('#resName'));
    expect(ui).toBeDefined();
  }));

});
