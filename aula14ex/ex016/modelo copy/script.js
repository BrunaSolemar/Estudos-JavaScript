function contar(){

  var ini = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  var res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    window.alert('[ERRO] Faltam dados!')
    res.innerHTML = 'Impossível contar!'

  } else {
    res.innerHTML = 'Contando: <br> '
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if (p <= 0){
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
  
   if (i < f) /*se o valor do início for menor que o valor do final*/ {
        /*contagem cresecente*/for(var c = i; c <= f; c += p) { /* o contador vai começar no início c=i e enquanto o contador for menor ou igual a fim c<=f o contador vai receber ele mesmo mais o passo c+=p*/
            res.innerHTML += `${c} \u{1F449}` /*deixar um espaço entre o fim da expressão e a crase para dar distância entre os numeros no resultado. O código do emoji seria U+1F449 mas deve ser alterado pra forma que foi escrita acima*/
    }

    

      } else {
        /*contagem regressiva*/for (var c = i; c >= f; c -= p) /*se o contador for maior ou igual ao fim, o contar vai perder o passo*/{
            res.innerHTML += ` ${c} \u{1F449} ` 
        }
       
      }
      res.innerHTML += `\u{1F3C1}`
  }

}

