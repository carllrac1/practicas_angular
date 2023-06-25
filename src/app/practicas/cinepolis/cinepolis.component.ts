import { Component } from '@angular/core';
import { Compra } from './clases/compra';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  compra:Compra = new Compra();
  total:number = 0
  puede_comprar = true

  calcular():void {
    
    this.puede_comprar = this.compra.puedeComprar()

    if (!this.puede_comprar) {
      return
    }

    this.total = this.compra.total()

  }

}
