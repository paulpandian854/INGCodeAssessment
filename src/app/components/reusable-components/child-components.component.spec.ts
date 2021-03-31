import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChildComponent } from './child-components.component';
import { AppService } from '../../service/app.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as data from '../../mock-data/data.json';
import { MatMenuModule } from '@angular/material/menu';
class storeStub {
  select = () => Observable.create();
}


describe('Child Component', () => {
  const appServiceStub = () => ({
    getGarageDetails: () => data,
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        ChildComponent
      ],
      imports: [MatMenuModule],
      providers: [
        { provide: AppService, useFactory: appServiceStub },
        { provide: Store, useClass: storeStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`Garage detail component should contain categorybutton`, async(() => {
    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.ml-5'));
    expect(ui).toBeDefined();
  }));

  it(`Garage detail component should proceed to checkbox button`, async(() => {
    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.mx-auto'));
    expect(ui).toBeDefined();
  }));

  it(`Garage detail component should contain input values`, async(() => {
    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('#resName'));
    expect(ui).toBeDefined();
  }));

});
