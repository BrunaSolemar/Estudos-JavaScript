function carregar(){
  var msg = window.document.getElementById(`msg`)
  var img = window.document.getElementById(`imagem`) 
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && < 12) {
    //Bom dia
    img.src = `ex14/manha.png`
  } else if (hora >= 12 && hora < 18){
    //Boa tarde
    img.src = `ex14/tarde.png`
  } else {
    //Boa noite
    img.src = `ex14/noite.png`
  }
}

