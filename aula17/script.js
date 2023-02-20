    let numb = document.getElementById ('num')
    let dados = document.getElementById('list')
    let res = document.getElementById('res')
    let valores = []

    function numero(n){
        if (Number(n) >= 1 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }

    function lista(n,l) {
        if (l.indexOf(Number(n)) != -1){
            return true
        } else {
            return false
        }
    }

    function add(){ 
        if (numero(numb.value) && !lista(numb.value, valores)){
            valores.push(Number(numb.value))
            let item = document.createElement ('option')
            item.text = `Valor ${numb.value} adicionado!`
            dados.appendChild(item )
            res.innerHTML = ''
        } else {
            window.alert('Valor inválido ou já encontrado na lista')    
        }
        numb.value = ''
        numb.focus()
    }    

    function finalizar(){
        if(valores.length == 0){
            window.alert('Adicione um valor!')
        } else{
            let tot = valores.length
            let maior = valores [0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for (let pos in valores){
                soma += valores[pos]
                if (valores [pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }
            media = soma/tot
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
            res.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
            res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
            res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        }
    }
        

