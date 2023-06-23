import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  
  image:string = 'https://www.researchgate.net/profile/Guillermo-Burke/publication/299936910/figure/fig3/AS:348400760442882@1460076622498/Figura-4-Codigos-de-colores-para-resistencias-electricas-PrograTronica-2013.png'

  colores:any = [
    'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey', 'white'
  ]
  
  tolerancias:any = [
    'gold', 'silver'
  ]

  color_banda1!:string
  color_banda2!:string
  color_banda3!:string
  tolerancia!:string
  resistencia:number = 0
  resistencia_me:number = 0
  resistencia_ma:number = 0

  calcular(){  

    const valor_b1 = this.valorBanda(this.color_banda1)
    const valor_b2 = this.valorBanda(this.color_banda2)
    const digitos = parseInt(valor_b1 + valor_b2)

    let valor_b3 = this.valorBanda(this.color_banda3)
    valor_b3 = valor_b3 + "0".repeat(parseInt(valor_b3)) 
    let valor_b3_n = parseInt(valor_b3)

    let resistencia = digitos * valor_b3_n
    let resistencia_ma = 0
    let resistencia_me = 0
    let tolerancia = 0

    if (this.tolerancia) {

      if (this.tolerancia == 'gold') {
        tolerancia = 5
      } else {
        tolerancia = 10
      }

      resistencia_ma = (resistencia + (resistencia * tolerancia/100))
      resistencia_me = (resistencia - (resistencia * tolerancia/100))
    }

    this.resistencia = resistencia
    this.resistencia_ma = resistencia_ma
    this.resistencia_me = resistencia_me

  }

  protected valorBanda(valor:string):string {
    
    let value:string = '0'

    switch (valor) {
      case 'negro':
        value = '0'
        break;
      case 'brown':
        value = '1'
        break
      case 'red':
        value = '2'
        break
      case 'orange':
        value = '3'
        break
      case 'yellow':
        value = '4'
        break
      case 'green':
        value = '5'
        break
      case 'blue':
        value = '6'
        break
      case 'purple':
        value = '7'
        break
      case 'grey':
        value = '8'
        break
      case 'white':
        value = '9'
        break
      default:
        break;
    }

    return value

  }
}
