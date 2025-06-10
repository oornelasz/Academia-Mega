import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  title = "This is a card";
  content = "This is a card to work with it"
  buttontext = "Know more!"

}
