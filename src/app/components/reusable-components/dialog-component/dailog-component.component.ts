

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { imageSrc} from '../../../constants/contants'

@Component({
  selector: 'your-dialog',
  templateUrl: './dailog-component.component.html',
  styleUrls: ['./dailog-component.component.css']
})
export class YourDialog {
  imgsrc = imageSrc;
 // Code / Input property to get Input data
  constructor(public dialogRef: MatDialogRef<YourDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  close() {
    this.dialogRef.close();
  }

}
