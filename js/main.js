//Ejercicios STRINGS



//Ejercicio 01
let nombre = "Valeria Duque";
nombre = nombre.toUpperCase();
let letra = "";
let contFinal = 0;


for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index));
    let contTemp = 1;
    for (let cont = index +1; cont < nombre.length; cont++) {
        if(nombre.charAt(index) == nombre.charAt(cont))
            contTemp++
    }//for cont

    if(contTemp > contFinal){
        contFinal = contTemp;
        letra = nombre.charAt(index);
    }//contTemp > contFinal
}//for index
console.log(letra, contFinal);






// let contador = 0;

// function caracterRepetido(){

//     for(let i = 0; i < nombre.length; i++){
//         console.log(i)
//         let caracterActual = null;

//         if(caracterActual == null){
//             caracterActual = nombre[i]
//         }else if(caracterActual = nombre[i]){

//         }



//     }

// }

// console.log(nombre);

// caracterRepetido();

