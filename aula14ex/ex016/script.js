function contar(){
    let n1 = document.getElementById ('pn')
    let n2 = document.getElementById ('un')
    let salto = document.getElementById('salto')
    let res = document.getElementById ('res')

    if (n1.value.length == 0 || n2.value.length == 0 || salto.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let ini = Number (n1.value)
        let fim = Number (n2.value)
        let pulo = Number (salto.value)
        if (ini < fim){
            //contagem crescente
            for(let c = ini; c <= fim; c += pulo){
                res.innerHTML += `${c} \u{1F449} `
            }    
        } else {
            //contagem regressiva
            for (let c = ini; c >= fim; c -= pulo){
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}