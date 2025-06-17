import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
//Creamos la clase card dentro del componente, se puede decir que esto es la base 
export class Card {
  title = "This is a card";
  content = "This is a card to work with it"
  buttontext = "Know more!"
  galeria = "https://picsum.photos/640/640?r" + Math.random()
  nombre=""


  mostrarAlerta(){
    alert("Sí funciona la alerta");
  }

}
