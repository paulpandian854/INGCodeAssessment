import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MatTableComponent } from './mat-table-component.component';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as data from '../../../mock-data/data.json';
import { MatMenuModule } from '@angular/material/menu';
class storeStub {
  select = () => Observable.create();
}


describe('Mat Table Component', () => {
  const appServiceStub = () => ({
    getGarageDetails: () => data,
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        MatTableComponent
      ],
      imports: [MatMenuModule],
      providers: [
        { provide: Store, useClass: storeStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MatTableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`Garage detail component should contain categorybutton`, async(() => {
    const fixture = TestBed.createComponent(MatTableComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.close p-0 m-0'));
    expect(ui).toBeDefined();
  }));

});
