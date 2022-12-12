//Usar ciclos al revés, no se vale usar funciones que ya están hechas

//Entrada
//*  "Laura Aline"
//Salida
//* enilA aruaL"

let nombre = "Laura Aline";
let nombre2 = "Berenice Sanchez";

function nombreReves(nombreX){
    let nombreRevertido = "";
    for(let i = (nombreX.length) -1; i >= 0; i--){
        console.log(nombreX[i]);
        nombreRevertido += nombreX.charAt(i);
    }
    return nombreRevertido;
}

console.log(nombreReves(nombre));




