let producto = "";
let precio = 0;
let cantidad = 0;
let seguirComprando = false;
let precioTotal = 0;

do {
    producto = prompt ("¿Que deseas comprar alfajor, chocolate, gomitas, caramelos?", "Ej: caramelos");
    cantidad = parseInt(prompt ("¿Cuántos desea comprar?"));

    switch (producto) {
        case 'alfajor':
            precio = 120;
            break;
        case "chocolate":
            precio = 300;
            break;
        case "gomitas":
            precio = 70;
            break;
        case "caramelos":
            precio = 90;
            break;
        default:
            alert("Alguno de los datos ingresados son incorrectos");
            precio= 0;
            cantidad= 0;
    }
    precioTotal += precio*cantidad;
    precioTotal = (precioTotal * 1.21).toFixed(2);

    seguirComprando = confirm("¿desea seguir comprando?");
} while (seguirComprando);

alert('El total de su compra es: $'+precioTotal+' (iva incluido)');

let finalizarCompra = confirm("¿Desea finalizar la compra?")

if (finalizarCompra) alert("Su compra se ha realizado con éxito!");
if (!finalizarCompra) alert("Esperamos volver a verlo pronto!");

