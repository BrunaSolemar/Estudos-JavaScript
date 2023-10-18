function carregar(){
  var msg = window.document.getElementById(`msg`)
  var img = window.document.getElementById(`imagem`) 
  var data = new Date()
  var hora = data.getHours() //hora atual do sistema
  
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 6 && hora < 12) {
    //Bom dia
    img.src = `ex14/manha.png`
    document.body.style.background = `#d6a57d` //está deixando o corpo do site com o mesmo tom da foto que aparece referente ao horário
  
  } else if (hora >= 12 && hora < 18){
    //Boa tarde
    img.src = `ex14/tarde.png`
    document.body.style.background = `#737b86`
  
  } else if (hora >= 18 && hora > 0) {
    //Boa noite
    img.src = `ex14/noite.png`
    document.body.style.background = `#1d55a7`
  
  } else {
    //Boa madrugada
    img.src = `ex14/madrugada.png`
    document.body.style.background = `#001531`
  }
}

