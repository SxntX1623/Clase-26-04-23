let bus1, bus2;
let NumP1, valorP1, Placa1, dinT1;
let NumP2, valorP2, placa2, dinT2;

bus1 = prompt(' Ingrese nombre del bus 1')
NumP1 = Number(prompt(' Ingrese numero de personas transportadas en el bus 1 '))
valorP1 = Number(prompt(' Ingrese valor del pasaje del bus 1 '))
Placa1 = prompt(' Ingrese numero de placa del bus 1 ')

bus2 = prompt(' Ingrese nombre del bus 2 ')
NumP2 = Number(prompt(' Ingrese numero de personas transportadas en el bus 2 '))
valorP2 = Number(prompt(' Ingrese valor del pasaje del bus 2 '))
Placa2 = prompt(' Ingrese numero de placa del bus 2 ')

dinT1 = (NumP1*valorP1)
dinT2 = (NumP2*valorP2)

if(dinT1 > dinT2){
    alert(' El busd que mas dinero recogido fue: '+ Placa1 )
}else{
    alert(' El bus que mas dinero recogio fue: '+ placa2)
}