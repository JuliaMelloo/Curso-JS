let num = [8,5,9,6]
num.push(3)
num.sort() //colocar em ordem
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O último número do vetor é ${num[4]}`)
let val = num.indexOf(2)
if (val == -1){
    console.log ('Valor não encontrado!')
} else {
    console.log(`O valor está na posiçâo ${val}`)
}
