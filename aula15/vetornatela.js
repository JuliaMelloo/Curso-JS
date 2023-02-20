let val = [7,5,9,2,5,4]

/*
for(let pos = 0; pos < val.length; pos++){
    console.log( `A posição ${pos} tem o valor ${val[pos]}`)
}*/

for (let pos in val){
    console.log (`A posiçâo ${pos} tem o valor ${val[pos]}`)
}