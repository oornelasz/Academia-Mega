import { Component } from "@angular/core"; /*Indicamos a donde pertenece el componente*/
import { bindCallback } from "rxjs";

/*Decorador*/
@Component({
    selector: "app-saludo",
    imports:[],
    templateUrl: "./saludo.components.html",
    styleUrl:"./saludo.components.css",
})

export class Saludo{
    name = "Oscar Ornelas"
}