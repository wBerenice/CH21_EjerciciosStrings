//Ejercicios STRINGS


//Ejercicio 01
let nombre = "Laura Aline";
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



let btnEnviar = document.getElementById("btnEnviar");
let idTimeout;

btnEnviar.addEventListener("click", function(event){
    event.preventDefault();
    let validos = 0;
    
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");//email
    let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2");//RFC
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let flexCheckDefault = document.getElementById("flexCheckDefault");

    let alertError = document.getElementById("alertError");


    exampleFormControlTextarea1.value = exampleFormControlTextarea1.value.trim();
    alertError.style.display = "none";
    alertError.innerHTML = "";

    console.log(exampleFormControlTextarea1.value.length);
    console.log("[" + exampleFormControlTextarea1.value.replaceAll("  ", "") + "]");

    
    
    console.log(exampleFormControlTextarea1.value.replaceAll("  ", "").length);
    if(exampleFormControlTextarea1.value.trim().replaceAll("  ", "").length < 20){
        alertError.innerHTML = `El mensaje debe contener 20 caracteres o más`;
        alertError.style.display = "block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();
        exampleFormControlTextarea1.style.border = "solid red 1px"
    }else{
        exampleFormControlTextarea1.style.border = "solid green 1px"
        validos++;
    }

    if(exampleFormControlInput1.value.match(emailRegex) == null){
        alertError.style.display = "block";
        alertError.innerHTML += "<br/>El correo electrónico no es válido"
        exampleFormControlInput1.style.border = "solid red 1px"
    }else{
        exampleFormControlInput1.style.border = "solid green 1px"
        validos++;
    }
    
    let RFCRegex = /^[A-Z]{4}[0-9]{6}[A-Z0-9]{3}$/;
    // let RFCRegex = /^[A-Z]{4}\d{6}\w{3}$/;
    ///Versión corta  /^[A-Z]{4}\d{6}\w{3}$/;
    // \d = del 0 al 9 (números)
    // \w = [A-Za-z0-9_]
    exampleFormControlInput2.value = exampleFormControlInput2.value.toUpperCase();
    if(exampleFormControlInput2.value.match(RFCRegex) == null){
        alertError.style.display = "block";
        alertError.innerHTML += "<br/>El RFC no es válido"
        exampleFormControlInput2.style.border = "solid red 1px"
    }else{
        exampleFormControlInput2.style.border = "solid green 1px";
        validos++;
    }

    if((idTimeout != undefined) && (idTimeout != null)){
        clearTimeout(idTimeout);
    }//idTimeout

    //if Ternario
    // alertError.innerHTML += (! flexCheckDefault.checked) ? "<br/> Debes aceptar los términos y condiciones" : "";

    if(! flexCheckDefault.checked){
        alertError.innerHTML += "<br/>Debes aceptar los términos y condiciones";
        alertError.style.display = "block";
    }// checked

    if(validos == 3){
        idTimeout = setTimeout(function(){
            exampleFormControlTextarea1.style.border = "";
            exampleFormControlInput1.style.border = "";
            exampleFormControlInput2.style.border = "";
        }, 2000);
    }//==3

});








