let cantidad, descuento, monto, totalpagar;

//Leer o asignar información
cantidad = parseInt(prompt(' Ingrese cantidad '))

//Proceso
monto = cantidad * 2000000;

if (cantidad < 10) {
    alert(' No tienes un descuento ')
} else if(cantidad > 10 && cantidad < 20) {
    descuento = monto * 0.1
} else if(cantidad >= 20 && cantidad < 30){
    descuento = monto * 0.2
} else if(cantidad >= 30){
    descuento = monto * 0.4
}

totalpagar = monto - descuento;

alert(' El total a pagar es: '+ totalpagar)