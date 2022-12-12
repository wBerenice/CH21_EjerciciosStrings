
/*
Palíndromo: palabra o expresión que es igual si se lee de izquierda a derecha que derecha a izquierda.

Amma
Otto
Anina
Natan
*/

function palindromo(palabra){
    // let paliTrue = `${palabra} sí es un palíndromo`
    // let paliFalse = `${palabra} no es un palíndromo` 

    let nombreOriginal = palabra;
    let nombreRevertido = "";

    for(let i = (nombreOriginal.length) -1; i >= 0; i--){
        nombreRevertido += nombreOriginal.charAt(i);
    }//for i
    // return nombreRevertido;

    if(nombreRevertido == nombreOriginal){
        // console.log(`${palabra} sí es un palíndromo`);
        return true;
    }else{
        // console.log(`${palabra} no es un palíndromo`);
        return false;
    }

}

// palindromo(console.log("Natan"));




function reves(str){
    let tmpStr = "";
    for(let indice = str.length-1; indice >= 0; indice--){
        tmpStr += str.charAt(indice);
    }
    return tmpStr;
}


function esPalindromo(str){
    // let res = false;
    str = str.toLowerCase();
    str = str.replaceAll(" ", "");
    if(reves(str)== str){
        return true;
    }//if

    return false;
}//esPalindromo








