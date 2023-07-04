import { Cliente } from "./cliente"
import { Orden } from "./orden"

export interface Venta {
    cliente:Cliente
    ordenes:Array<Orden>
    fecha:Date
}


