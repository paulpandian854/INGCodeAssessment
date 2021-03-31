import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VEHICLES } from 'src/app/interface/garage-details.interface';
import { imageSrc }  from '../../../constants/contants'


@Component({
    selector: 'mat-card-comp',
    templateUrl: './mat-card-component.component.html',
    styleUrls: ['./mat-card-component.component.css']
})
export class MatCardComponent {

    @Input() num!: VEHICLES;
    @Input() index: number = 0;
    addToCardBtnToggle: boolean = true;
    imageSrc = imageSrc;
    @Output() clickCard : EventEmitter<any> = new EventEmitter();
    
    @Output() addToCard : EventEmitter<any> = new EventEmitter();
    
    @Output() removeFromCard : EventEmitter<any> = new EventEmitter();
    
    constructor() {
    }

    onClickCard(num: VEHICLES, ind: number) {
      num.index = ind;
      this.clickCard.emit(num);
    }

    onAddToCart(num: VEHICLES){
       this.addToCard.emit(num);
       this.addToCardBtnToggle = false;
    }

    OnRemoveFromCart(num: VEHICLES){
        this.removeFromCard.emit(num);
        this.addToCardBtnToggle = true;
    }
      
   
}
