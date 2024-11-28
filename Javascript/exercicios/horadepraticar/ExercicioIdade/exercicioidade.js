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
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute("src", "imagens/bebe-m.png")
            }else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute("src", "imagens/jovem-m.png")
            } else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute("src", "imagens/adulto-m.png")
            } else {
                img.setAttribute("src", "imagens/velho-m.png")
            }
                
        }else {
            genero = "mulher"
            if (idade >= 0 && idade < 10){
                //crinca
                img.setAttribute("src", "imagens/bebe-f.png")
            }else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute("src", "imagens/jovem-f.png")
            } else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute("src", "imagens/adulta-f.png")
            }else {
                img.setAttribute("src", "imagens/velha-f.png")
            }
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}