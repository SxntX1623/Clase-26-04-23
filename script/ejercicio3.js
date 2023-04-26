let nomb1, nomb2;
let salario1, deducciones1, bonificacion1, bruto1, neto1;
let salario2, deducciones2, bonificacion2, bruto2, neto2;

nomb1 = prompt(' Ingrese nombre de trabajador 1 ')
deducciones1 = Number(prompt(' Ingrese las deducciones del trabajador 1 '))
bonificacion1 = Number(prompt(' Ingrese las bonificaciones del trabajador 1 '))
bruto1 = Number(prompt(' Ingrese el salario del trabajador 1 '))

nomb2 = prompt(' Ingrese nombre de trabajador 2 ')
deducciones2 = Number(prompt(' Ingrese las deducciones del trabajador 2 '))
bonificacion2 = Number(prompt(' Ingrese las bonificaciones del trabajador 2 '))
bruto2 = Number(prompt(' Ingrese el salario del trabajador 2 '))

neto1 = (bruto1 - deducciones1) + bonificacion1;
neto2 = (bruto2 - deducciones2) + bonificacion2;

if (neto1 > neto2){
    alert(' El trabajador '+ nomb1 +' Tiene el salario mas alto '+ neto1)
}else{
    alert(' El trabajador '+ nomb2 +' Tiene el salario mas alto '+ neto2)
}