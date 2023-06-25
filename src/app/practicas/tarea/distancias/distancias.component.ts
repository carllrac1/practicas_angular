import { Component } from '@angular/core';

@Component({
  selector: 'app-distancias',
  templateUrl: './distancias.component.html',
  styleUrls: ['./distancias.component.css']
})
export class DistanciasComponent {

  puntoX1!:number
  puntoY1!:number
  puntoX2!:number
  puntoY2!:number
  distancia!:number

  calcular(){
    this.distancia = Math.sqrt(Math.pow((this.puntoX2 - this.puntoX1), 2) + Math.pow((this.puntoY2 - this.puntoY1), 2))
  }

}
