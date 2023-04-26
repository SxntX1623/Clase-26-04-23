let edad;

edad = Number(prompt(' Ingrese edad '))

if (edad < 10){
    console.log('la persona es niño')
    alert(' Segun la edad es un: niño ')
}else if (edad >= 10 && edad < 15) {
    console.log('la persona es preadolecente')
    alert(' Segun la edad es un: preadolecente ')
}else if (edad >= 15 && edad < 18){
    console.log('la persona es adolecente')
    alert(' Segun la edad es un: adolecente ')
}else if(edad >= 18 && edad < 50){
    console.log('la persona es adulto')
    alert(' Segun la edad es un: adulto ')
}else if (edad >= 50){
    console.log('la persona es adulto mayor')
    alert(' Segun la edad es un: adulto mayor ')
}