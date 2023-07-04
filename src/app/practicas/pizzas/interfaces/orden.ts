import { Cliente } from "./cliente";
import { Pizza } from "./pizza";

export interface Orden {
    // cliente: Cliente;
    pizza: Pizza;
    num_pizzas:number;
    total:number;
}
