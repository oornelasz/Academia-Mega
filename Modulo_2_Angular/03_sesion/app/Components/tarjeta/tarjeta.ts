import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta',
  imports: [FormsModule],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css'
})
export class Tarjeta{
  /*Para definir los tipos de variables es necesario declarar la variable y despues de los dos puntos colocar que tipo de dato que será
    ejemplo variable:tipo de dato (nombre:string)
  */
  nombre: string  = "";
  imagen: string  = "https://";
  mensaje: string = "Bienvenido!";

  //funcion
 cambiarSaludo(){
    this.mensaje = `Hola ${this.nombre || "visitante"}`; //this cumple la función de un apuntador
  }

  }

