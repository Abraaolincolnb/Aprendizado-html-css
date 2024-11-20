function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input#txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > ano){
        alert("confere  dnv ai patrão ta tudo errado issae")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = "homem"
        }else {
            genero = "mulher"
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
}