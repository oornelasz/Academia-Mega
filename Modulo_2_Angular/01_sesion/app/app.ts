import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Esta es la primera practica'
  name = "Mandando a llamar el name";
  dato = "llamando un dato";
  autor = "Oscar Ornelas";
}
