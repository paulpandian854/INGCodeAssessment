import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CARDETAILS } from '../../interface/garage-details.interface';


@Component({
  selector: 'child-component',
  templateUrl: './child-components.component.html',
  styleUrls: ['./child-components.component.css']
})
export class ChildComponent {

  @Input() trainStationResponse!: CARDETAILS[];
  @Output() submit: EventEmitter<any> = new EventEmitter();
  @Output() dropDownClick: EventEmitter<any> = new EventEmitter();

  constructor() {
  }
 //Output Prperties
  proceedToCheckout() {
    this.submit.emit();
  }

  onDropDownClick(res: CARDETAILS) {
    this.dropDownClick.emit(res);
  }


}
