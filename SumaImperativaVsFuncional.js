console.clear()

//PROGRAMACION IMPERATIVA
const sumar=(...numeros)=>{
  let sumatoria=0
  for(i=0;i<numeros.length;i++){
    sumatoria+=numeros[i];
  }
  return sumatoria;
}

let res=(sumar(2,4,6,8));
console.log(`Sumar los numeros 2,4,6,8. con funcion LAMBDA  cuyo resulado es ${res}`);

//PROGRAMACION FUNCIONAL
const sum=(...num)=>num.reduce((resultado,b)=>{return resultado+=b});
let total=sum(1,3,5,7,9)
console.log(`Sumar los numeros 1,3,5,7,9 con programacion FUNCIONAL  su resultado es ${total}`);