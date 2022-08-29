// tabla de multiplicar

let ingresarNumero = Number(prompt('ingrese un numero para multiplicar'))
 
for (let i = 1; i <= 10; i++) {
    resultado = ingresarNumero * i;
    alert (ingresarNumero+' x '+i+'='+resultado);
    
}





























// Operador de igualdad débil (loose equality): ==
// Coerción de tipos


// if ( 2 == "2" ) {
//     console.log("Esto es correcto!")
// }



// Operador de igualdad estricta (strict equality): ===
// No solo compara valores sino también tipos de datos

// if ( 2 === "2" ) {
//     console.log("Esto es correcto!")
// }
// Es una buena práctica usar el operador de igualdad estricta









// EJEMPLO DE IF ELSE IF

// let precio = 50;

// // < (menor que)

// if ( precio < 20 ) {
//     alert("El precio es menor a 20");
// } else if ( precio < 50 ) {
//     alert("El precio es menor a 50");
// } else if ( precio < 100 ) {
//     alert("El precio es menor a 100");
// } else {
//     alert("El precio es mayor a 100");
// }



















// case sensitive (javascript hace una diferencia entre mayúsculas y minúsculas)

// Hablando por ejemplo de nombres de variables de javascript

// No son iguales
// let nombre;
// let Nombre;



// Por otro lado si comparamos textos o strings podemos decir que también es case sensitive
// osea sensible a minúsculas y mayúsculas.
// Esto es por que cada letra mayúscula o minúscula tiene su propio código ASCII asignado








// TRUE O FALSE

// let numero = 10;
// let esMayorQue5 = numero > 5

// if ( esMayorQue5 ) {
//     alert("Efectivamente "+numero+" es mayor que 5")
// } else {
//     alert(numero+" No es mayor que 5")
// }























// AND

// let nombreIngresado = prompt("Ingresar nombre:");
// let apellidoIngresado = prompt("Ingresar apellido:");

// if ( (nombreIngresado != "") && (apellidoIngresado != "") ) {
//     alert("Nombre: "+nombreIngresado+"\nApellido: "+apellidoIngresado);
// } else {
//     alert("Error: Falta alguno de los datos!")
// }






















// OR

// let nombreIngresado = prompt("Ingrese un nombre:");

// if ( (nombreIngresado == "ANA") || (nombreIngresado == "ana") ) {
//     alert("El nombre ingresado es Ana");
// } else {
//     alert("El nombre ingresado No es Ana")
// }




// let numero1 = Number(prompt("Ingrese un número para comparar:"));
// let numero2 = Number(prompt("Ingrese otro número:"));


// let texto = prompt("ingrese un texto");

// if ((texto != "") && ((texto == "HOLA") || (texto == "hola"))){
//    alert("correcto ingreso Hola") 
// } else{
//     alert("no ingreso Hola")
// }



// let numero1 = Number(prompt("Ingrese un número para comparar:"));

//  if (numero1 >= 10 && numero1 <= 50) {
//    alert("El número se encuentra entre 10 y 50");
// } else {
//    alert("El número no está entre 10 y 50");
// }
