function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById(`txtano`) //fano é formulário de ano, ou seja, o ano que foi preenchido no campo do formulário, txt ano é o id do html
var res = document.getElementById(`res`)

if (fano.value.length == 0 || Number(fano.value) > ano) {
  window.alert(`[ERRO] Verifique os dados e tente novamente!`)
 //se o usuário nao digitou o ano ou se ano for maior que o ano atual, vai aprecer o alerta pra verificar os dados

} else {
  var fsex = document.getElementsByName(`radsex`) 
  //fsex significa formulário sexo: ou seja, o sexo que a pessoa escolheu no formulário

  var idade = ano - Number(fano.value) //ano = ano atual, fano = valor digitado no formulário
  
  var gênero = ``
  var img = document.createElement(`img`)
  img.setAttribute(`id`, `foto`) 
  //estou criando um id para imagens
 
  if (fsex[0].checked) { 
    //[0] = masculino pq é a primeira opção a ser selecionada, ele identifica isso no radsex ... [1] = feminino pq é a segunda opção
      gênero = `Homem`
      if (idade >=0 && idade < 10){
        //criança
        img.setAttribute(`src`, `bebemenino.png`)
      } else if (idade < 21) {
        //jovem
        img.setAttribute(`src`, `jovemmenino.png`)
      }else if (idade < 50){
        //adulto
        img.setAttribute(`src`, `homem.png`)
      }else {
        //idoso
        img.setAttribute(`src`, `idoso.png`)
      }
 } else if (fsex[1].checked) {
  gênero = `Mulher`
  if (idade >=0 && idade < 10){
    //criança
    img.setAttribute(`src`, `bebemenina.png`)
  } else if (idade < 21) {
    //jovem
    img.setAttribute(`src`, `jovemmenina.png`)
  }else if (idade < 50){
    //adulto
    img.setAttribute(`src`, `mulher.png`)
  }else {
    //idoso
    img.setAttribute(`src`, `idosa.png`)
  }
 } 
 //então lê-se se [0] é homem e se [1] é mulher
 res.style.textAlign = `center` //centraliza o texto do resultado
 res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
 res.appendChild(img) //adiciona elemento após o resultado, no caso a foto
}
}