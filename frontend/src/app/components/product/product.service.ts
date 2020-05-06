import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private sanckBar:MatSnackBar) { }

  showMessage(msg:string):void{
    this.sanckBar.open(msg,'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition:"top"
    })
  }
}
