//var int = 123456;
//var string = "texto";
//var boolean = true;

//var nombre = "Oscar Martin";
//var apellido = 'Ornelas';
//var nombreCompleto = `${nombre} ${apellido}`;  
//var edad = 44;

//console.log(`Bienvenido a l sitio de oornelasz ${nombreCompleto} y tengo ${edad} años`);
//console.log("Hola, soy" + nombreCompleto + "y tengo" + edad + "años");




//const multiplicar = (a,b) =>a*b;

//console.log (multiplicar (4,2))





function contador (){
let cuenta = 0;
return function(){
cuenta++;

return cuenta;

};

}

const incrementar = contador ();

console.log (incrementar());
console.log (incrementar());
console.log (incrementar());
console.log (incrementar());
console.log (incrementar());
console.log (incrementar());






function multiplicador (factor){
return function (numero){
return numero * factor;


}

}

const duplicar = multiplicador (2);
const triplicar = multiplicador (3);

console.log (duplicar(5))
console.log (triplicar(5))


