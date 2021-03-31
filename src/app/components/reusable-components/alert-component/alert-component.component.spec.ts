import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AlertComponent} from './alert-component.component';
import { Observable } from 'rxjs';

class storeStub {
  select = () => Observable.create();
}
describe('Alert Common Component', () => {
    beforeEach(async(() => {

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AlertComponent
      ],
      providers: [
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AlertComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));



  it(`Alert component should have warning message`, async(() => {
    const fixture = TestBed.createComponent(AlertComponent);
    const app = fixture.debugElement.componentInstance;
    const ui = fixture.debugElement.queryAll(By.css('.alert-danger'));
    expect(ui).toBeDefined();
  }));
});
