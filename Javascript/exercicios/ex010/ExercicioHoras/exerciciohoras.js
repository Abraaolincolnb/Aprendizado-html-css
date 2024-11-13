function carregar() {
var msg = document.querySelector("div#msg")
var img = document.getElementById('imagem')
var data = new Date
//var hora = data.getHours()
var hora = 17
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minuto} Horas!`
if (hora >= 0 && hora < 12){
    //bom dia
    img.src = "manha.png"
} else if(hora >= 12 && hora < 18){
    //boa tarde
    img.src = "tarde.png"
}else{
    //boa noite 
    img.src = "noite.png"
}



}
