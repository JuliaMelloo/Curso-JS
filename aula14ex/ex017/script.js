function contar(){
    let num = document.getElementById('numero')
    let tab = document.getElementById ('res')

    if (num.value.length == 0){
        window.alert ('[ERRO] Insira um número no campo para ter o resultado!')
    } else {
        let n = Number (num.value)
        tab.innerHTML = '' //limpar select
        for (let c = 1; c <= 10; c++){
            let item = document.createElement ('option')
            item.text = `${n}x${c}=${n*c}`
            item.value = `tab${c}`
            tab.appendChild (item) // adicionar 'item' no select html
            
        }
        
    }
}