function carregar() {
var msg = document.querySelector("div#msg")
var img = document.querySelector("img#imagem")
var data = new Date
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minuto} Horas!`
if (hora >= 6 && hora < 12){
    //bom dia
    img.src = "manha.png"
} else if(hora >= 12 && hora < 18){
    //boa tarde
    img.src = "tarde.png"
    document.body.style.background = "orange"
}else{
    //boa noite 
    img.src = "noite.png"
    document.body.style.background = "#2e2336"
}



}
