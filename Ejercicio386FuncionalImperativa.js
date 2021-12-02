//Sumar  los numeros de un arreglo

let numeros=[2,5,7,9,3,10,4];

//Con programacion imperativa sera:

let suma=0;

for (i=0;i<numeros.length;i++){
    suma +=numeros[i];
}
console.log(`Sumar el array ${numeros}`);

console.log(`\nLa suma mediante Prog. Imperativa es : ${suma}`);

//Con programacion funcional es :

suma=numeros.reduce(function(a,b){return(a+b)});
console.log("\nsuma=numeros.reduce(function(a,b){return(a+b)});");
console.log(`La suma mediante Prog. FUNCIONAL es : ${suma}`);

//La linea 17 la transformamos en expresion lambda
suma=numeros.reduce((a,b)=>{return a + b});
console.log("\nsuma=numeros.reduce((a,b)=>{return a + b});");
console.log(`La suma mediante Prog. FUNCIONAL con RETURN es : ${suma}`);

suma=numeros.reduce((a,b)=>a + b);
console.log("\nsuma=numeros.reduce((a,b)=>a + b);");
console.log(`La suma mediante Prog. FUNCIONAL sin inicializar "a" es : ${suma}`);

suma=numeros.reduce((a,b)=>a + b,2);
console.log("\nsuma=numeros.reduce((a,b)=>a + b,2);")
console.log(`La suma mediante Prog. FUNCIONAL con LAMBDA es : ${suma}`);
console.log(`\nEl resultado es 42 porque, el acumulado "a" en lambda empieza en "2", o puede empezar en lo que uno quiera`);
console.log(`Por defecto si no se pone este "2" lo inicializa en "0"`);
console.log("suma=numeros.reduce((a,b)=>a+b,2);");
console.log("si pones : suma=numeros.reduce((a,b)=>{return a + b}); No funciona poner un 2")