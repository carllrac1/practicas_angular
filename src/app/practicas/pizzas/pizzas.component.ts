import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from './interfaces/cliente';
import { Orden } from './interfaces/orden';
import Swal from "sweetalert2";
import { Venta } from './interfaces/venta';
import { min } from 'rxjs';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {

  ingredientesSeleccionados:Array<any> = [];
  cliente!:Cliente
  ordenes:Array<Orden> = [];
  //localtime of today
  hoy:Date = new Date();
  ventas:Array<Venta> = [];
  ordenAccion!:Orden;
  vistaDiaria:boolean = true;

  tamanos:Array<any> = [
    {nombre: 'Chica', valor: 40},
    {nombre: 'Meidana', valor: 80},
    {nombre: 'Grande', valor: 120}
  ]

  ingredientes:Array<any>  = [
    {nombre: 'Jamón', valor:10},
    {nombre: 'Piña', valor:10},
    {nombre: 'Champiñones', valor: 10}
  ]

  compraForm!:FormGroup;

  constructor(private readonly fb:FormBuilder) {
    this.compraForm = this.initForm();
  }

  onSubmit(){

    this.compraForm.get('tamano')?.markAsTouched();
    this.compraForm.get('ingredientes')?.markAsTouched();
    this.compraForm.get('num_pizzas')?.markAsTouched();
    this.compraForm.get('fecha')?.markAsTouched();

    //get fecha
    const fecha = this.compraForm.get('fecha')?.value;
    console.log(fecha);
    

    console.log(this.compraForm.get('tamano')?.valid);
    console.log(this.compraForm.get('ingredientes')?.valid);
    console.log(this.compraForm.get('num_pizzas')?.valid);
    

    if(this.compraForm.get('tamano')?.valid && this.compraForm.get('ingredientes')?.valid && this.compraForm.get('num_pizzas')?.valid){

      const ingredientes_s = [...this.ingredientesSeleccionados];

      const pizza = {
        tamano: this.compraForm.get('tamano')?.value,
        ingredientes: ingredientes_s,
        num_pizzas: this.compraForm.get('num_pizzas')?.value
      }

      const orden:Orden = {
        pizza: pizza,
        num_pizzas: this.compraForm.get('num_pizzas')?.value,
        total: 0
      }

      orden.total = pizza.num_pizzas * (this.tamanos.find(tamano => tamano.nombre === pizza.tamano.nombre)?.valor || 0);
      orden.total += pizza.ingredientes.reduce((prev:any, curr:any) => prev + (this.ingredientes.find(ingrediente => ingrediente.nombre === curr.nombre)?.valor * orden.num_pizzas || 0), 0);

      this.ordenes.push(orden);

    } else{
      console.log('Formulario no valido');
    }
  }

  initForm():FormGroup {
    return this.fb.group({
      'nombre': ['', [Validators.required]],
      'direccion': ['', [Validators.required]],
      'telefono': ['', [Validators.required]],
      'tamano': ['', [Validators.required]],
      'ingredientes': ['', [Validators.required, Validators.minLength(1)]],
      'num_pizzas': ['', Validators.required, Validators.min(1)],
      //la fecha de hoy menos 1 dia
      'fecha': [new Date(this.hoy.setDate(this.hoy.getDate() - 1)).toISOString().substring(0, 10), Validators.required]
    })
  }

  agregarIngrediente(ingrediente:string, isChecked:boolean){
    if(isChecked){
      this.ingredientesSeleccionados.push(ingrediente);
    } else{
      let index = this.ingredientesSeleccionados.indexOf(ingrediente);
      this.ingredientesSeleccionados.splice(index, 1);
    }
  }

  eliminarOrden():void{
    this.ordenes.splice(this.ordenes.indexOf(this.ordenAccion), 1);
    this.ordenAccion = {} as Orden;
  }

  completarOrden():void{

    this.compraForm.get('nombre')?.markAsTouched();
    this.compraForm.get('direccion')?.markAsTouched();
    this.compraForm.get('telefono')?.markAsTouched();

    if(this.compraForm.get('nombre')?.valid && this.compraForm.get('direccion')?.valid && this.compraForm.get('telefono')?.valid && this.compraForm.get('fecha')?.valid){

      this.cliente = {
        nombre: this.compraForm.get('nombre')?.value,
        direccion: this.compraForm.get('direccion')?.value,
        telefono: this.compraForm.get('telefono')?.value
      }

      let fecha_mas_1 = new Date(this.compraForm.get('fecha')?.value);
      fecha_mas_1.setDate(fecha_mas_1.getDate() + 1);

      let total_ordenes = this.ordenes.reduce((prev:any, curr:any) => prev + curr.total, 0);

      Swal.fire({
        title: '¿Está seguro?',
        text: `¡El total de tu compra es: ${total_ordenes}!`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      }).then((result:any) => {
        if (result.isConfirmed) {
          this.ventas.push({
            cliente: this.cliente,
            ordenes: this.ordenes,
            //get fecha mas 1 dia
            fecha: fecha_mas_1
          });
          this.ordenes = [];
          this.cliente = {} as Cliente;
          // this.compraForm.get('nombre')?.enable();
          // this.compraForm.get('direccion')?.enable();
          // this.compraForm.get('telefono')?.enable();
          this.compraForm.reset();
          this.compraForm.get('fecha')?.setValue(new Date(this.hoy.setDate(this.hoy.getDate() - 1)).toISOString().substring(0, 10));
          this.ingredientesSeleccionados = [];
          Swal.fire(
            '¡Completado!',
            'La orden ha sido completada.',
            'success'
          )
        }
      })
    }
  }

  totalVenta(venta:Venta):number{
    return venta.ordenes.reduce((prev:any, curr:any) => prev + curr.total, 0);
  }

  totalVentasDia():number{
    return this.ventas.reduce((prev:any, curr:any) => prev + this.totalVenta(curr), 0);
  }

  detalleMensual():Array<any>{
    
    const ventasAnuales:Array<any> = [];

    this.ventas.forEach(venta => {
      const anio = venta.fecha.getFullYear();
      const mes = venta.fecha.getMonth();
      const total = this.totalVenta(venta);

      const ventaAnual = ventasAnuales.find((venta:any) => venta.anio === anio);

      if(ventaAnual){
        const ventaMensual = ventaAnual.meses.find((venta:any) => venta.mes === mes);
        if(ventaMensual){
          ventaMensual.total += total;
        } else{
          ventaAnual.meses.push({
            mes: mes,
            total: total
          })
        }
      } else{
        ventasAnuales.push({
          anio: anio,
          meses: [{
            mes: mes,
            total: total
          }]
        })
      }
    })

    return ventasAnuales;
  }
}