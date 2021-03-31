import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent
      ],
      providers: [
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Second-hand-garage-sale'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Second-hand-garage-sale');
  }));


  it(`App Should Contain Child containers`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('#routerOutlet'));
    expect(ui).toBeDefined();
  }));
});
