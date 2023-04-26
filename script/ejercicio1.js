let edadH1, edadH2, nombreH1, nombreH2

edadH1 = Number(prompt(' Ingrese la edad del hermano 1 '))
edadH2 = Number(prompt(' Ingrese la edad del hermano 2 '))
nombreH1 = prompt(' Ingrese nombre del hermano 1 ')
nombreH2 = prompt(' Ingrese nombre del hermano 2 ')

if (edadH1 > edadH2){
    alert(' El hermano mayor es '+ nombreH1)
} else {
    alert(' El hermano mayor es  '+ nombreH2)
}