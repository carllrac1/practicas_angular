export class Compra {
    
    nombre!:string
    num_personas!:number
    num_boletos!:number
    tarjeta!:boolean

    constructor() {
        this.tarjeta = false
    }

    puedeComprar():boolean {
        let maximo_boletos = this.num_personas * 7
        return this.num_boletos <= maximo_boletos
    }

    tieneDescuento():boolean {
        return this.num_boletos > 2
    }

    total():number {
        
        let descuento = 0

        let total = this.num_boletos * 12
        
        if(this.tieneDescuento()) {
            if(this.num_boletos >= 5) {
                descuento = 0.15
            } else if (this.num_boletos < 5) {
                descuento = 0.10
            }
        }

        total = total * (1 - descuento)
        
        if (this.tarjeta) {
            total = total * (1 - 0.10)
        }

        return total

    }

}
