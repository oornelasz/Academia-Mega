import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from './Components/saludo/saludo.components';
import { Card } from './Components/card/card';
import { Tarjeta } from './Components/tarjeta/tarjeta';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludo,Card,Tarjeta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Esta es la primera practica'
  name = "Mandando a llamar el name";
  dato = "llamando un dato";
  autor = "Oscar Ornelas";
}
