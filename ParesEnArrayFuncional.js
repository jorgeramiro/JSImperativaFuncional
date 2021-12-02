console.clear()
let numeros=[1,2,3,4,5,6,7,8,9,10];
//Mostrar solo los pares
//Prog. IMPERATIVA
console.log("Programacion IMPERATIVA");
for (let i=0; i<numeros.length; i++){
  let aux=(numeros[i])%2;
  if (aux==0){
    console.log(`${numeros[i]},Es Par`);
  }else{
    console.log(`${numeros[i]},Es ImPar`)
  }
}

//Prog Funcional
console.log("Programacion FUNCIONAL");
numeros.forEach(e=>{(e%2==0) ? console.log(`El numero ${e}, es PAR`):console.log(`El numero ${e}, No es par`)});