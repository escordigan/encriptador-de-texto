
const textoUsuario= document.querySelector(".texto-inicial"); 

const mensajeSegundaVentana= document.querySelector(".mensaje-copiado"); 

function botonEncriptar(){

    const txtEncriptado= encriptador(textoUsuario.value)
    mensajeSegundaVentana.value = txtEncriptado
    textoUsuario.value= "";
    mensajeSegundaVentana.style.backgroundImage = "none";
}

function encriptador(stringEncriptado){

    let matriz = [["e", "enter"],["i", "imes"], ["e", "enter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado= stringEncriptado.toLowerCase()

    for (let i = 0; i < matriz.length; i++){

        if(stringEncriptado.includes(matriz[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringEncriptado
}


function botonDesencriptar(){

    const txtEncriptado= desencriptador(textoUsuario.value)
    mensajeSegundaVentana.value = txtEncriptado
    textoUsuario.value= "";

}


function desencriptador(stringDesencriptado){

    let matriz = [["e", "enter"],["i", "imes"], ["e", "enter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptado= stringDesencriptado.toLowerCase()

    for (let i = 0; i < matriz.length; i++){

        if(stringDesencriptado.includes(matriz[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matriz[i][1], matriz[i][0])

        }

    }

    return stringDesencriptado
}


function copiarMensaje(){


    var copycat = document.getElementById("copia");
    copycat.select();
    copycat.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copycat.value);
}























