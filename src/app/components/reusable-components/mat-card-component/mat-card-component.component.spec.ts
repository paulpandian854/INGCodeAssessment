import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MatCardComponent } from './mat-card-component.component';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as data from '../../../mock-data/data.json';
import { MatMenuModule } from '@angular/material/menu';
class storeStub {
  select = () => Observable.create();
}


describe('Mat Card Component', () => {
  const appServiceStub = () => ({
    getGarageDetails: () => data,
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        MatCardComponent
      ],
      imports: [MatMenuModule],
      providers: [
        { provide: Store, useClass: storeStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MatCardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`Garage detail component should contain Image`, async(() => {
    const fixture = TestBed.createComponent(MatCardComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.mat-card-image'));
    expect(ui).toBeDefined();
  }));

  it(`Garage detail component should contain Image contents`, async(() => {
    const fixture = TestBed.createComponent(MatCardComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('#cardContent'));
    expect(ui).toBeDefined();
  }));

});
