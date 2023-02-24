function carregar(){
    var msg  = window.document.getElementById('msg')
    var img  = window.document.getElementById('imagem')
    var gif  = window.document.getElementById('gif')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML  = `Agora são <b>${hora}</b> horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#077A97'
        gif.src = 'monkey.gif'
}
        else if(hora >= 12 && hora <= 18){
            img.src = 'tarde.png'
            document.body.style.background = '#FE8452'
            gif.src = 'picapau.gif'
    }
            else{
                img.src = 'noite.png'
                document.body.style.background = '#150825'
                gif.src = 'mimir.gif'
        }
                if(hora == 1){
                    msg.innerHTML  = `Agora é ${hora} hora.`
             }
}