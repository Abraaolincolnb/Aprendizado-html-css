/*var idade = 67
console.log(`Você tem ${idade} anos, Sua situação de voto é:`)
if ( idade < 16){
    console.log("Não vota")
} else if (idade < 18 || idade >= 65){
        console.log("Voto opcional")
    }else{
        console.log("Voto obrigatorio")
    }*/
/*var agora = new Date()
var hora = agora.getHours()
console.log(`VEM AI A HORA EXATA... ${hora} Horas!`)
if(hora < 12){
    console.log("BOM DIA!")
}else if(hora < 18){
    console.log("BOA TARDE!")
}else{
    console.log("BOA NOITE!")
}*/

var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem){
    
    case 0:
        console.log("domingão hein!")
        break

    case 1:
        console.log("odeio segundas feiras")
        break
    case 2:
        console.log("terça feira, Hoje tem frango")
        break
    default:
        console.log("erro eu acho")
        break
    
}
