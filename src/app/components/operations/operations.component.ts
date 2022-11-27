import { Component } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
  optionSelected: string = '';
  lbPrice: number = 0;
  clientPrice: number = 0;
  clientGrams: number = 0;
  result: number = 0;
  grams = 500;
  porcentaje = 0;
  unidad = '';

  borrarInputRadio() {
    this.optionSelected = '';
    this.clientGrams = 0;
    this.clientPrice = 0;
    this.lbPrice = 0;
    this.result = 0;
  }
  borrarInputText() {
    this.clientGrams = 0;
    this.clientPrice = 0;
    this.lbPrice = 0;
    this.result = 0;
  }

  calculateGrams() {
    if (this.clientPrice <= 0 || this.lbPrice <= 0) {
      swal("Accion no valida!", "Por favor introdusca un valor positivo", "error");
    } else {
      this.result = (this.clientPrice * this.grams) / this.lbPrice;
      this.porcentaje = this.result/this.grams;
      this.unidad = 'gramos';
    }
  }

  calculatePrice() {
    if (this.clientGrams <= 0 || this.lbPrice <= 0) {
      // return window.alert('Por favor introdusca un valor mayor a 0');
      swal("Accion no valida!", "Por favor introdusca un valor positivo", "error");
    } else {
      this.result = (this.clientGrams * this.lbPrice) / this.grams;
      // this.porcentaje = (this.clientGrams * 100) / this.lbPrice;
      this.porcentaje = this.result/this.lbPrice;
      this.unidad = 'pesos';
    }
  }
}
