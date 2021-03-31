import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VEHICLES } from 'src/app/interface/garage-details.interface';


@Component({
  selector: 'mat-table-component',
  templateUrl: './mat-table-component.component.html',
  styleUrls: ['./mat-table-component.component.css']
})
export class MatTableComponent {

  @Input() vehicles!: VEHICLES[];
  @Output() removeFromCard : EventEmitter<any> = new EventEmitter();
  constructor() {
  }


  removeFromCart(num: VEHICLES){
       this.removeFromCard.emit(num);
  }
 


}
