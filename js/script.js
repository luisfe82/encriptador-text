const textarea = document.querySelector(".ingresar")
const mensaje = document.querySelector(".resultado")
const aviso = document.querySelector(".mensaje")
const copy = document.querySelector(".btn3")

function btnEncriptar() {
    if (textarea.value != "" && textarea.value != " ") {
        const textoEncriptado = encriptar(textarea.value);
        mensaje.value = textoEncriptado;
        aviso.style.display = "none"
        copy.style.display = "block"
        mensaje.style.display = "block"
        mensaje.style.backgroundImage = "none"
        textarea.value = "";
    } else {
        textarea.value = null;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes Capturar el texto que desea encriptar!',
            footer: 'Por favor vuelva a intentarlo'
        });
    }


}

function btnDesencriptar() {
    if (textarea.value != "" && textarea.value != " ") {
        const textoEncriptado = desencriptar(textarea.value);
        mensaje.value = textoEncriptado;
        aviso.style.display = "none"
        copy.style.display = "block"
        mensaje.style.display = "block"
        mensaje.style.backgroundImage = "none"
        textarea.value = "";
    } else {
        textarea.value = null;
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes Capturar el texto que desea encriptar!',
            footer: 'Por favor vuelva a intentarlo'
        });
    }

}

function copiar() {
    mensaje.select();
    if (mensaje.value != " " && mensaje.value != -1) {
        navigator.clipboard.writeText(mensaje.value).then(
            function () {
                Swal.fire({
                    icon: 'success',
                    title: 'Ha sido copiado saticfactoriamente',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Lo sentimos, debe haber contenido para copiar...',
            showConfirmButton: false,
            timer: 2000,
            footer: 'Por favor vuelva a intentarlo'
        });
    }
    mensaje.value = ""
    aviso.style.display = "block"
    copy.style.display = "none"
    mensaje.style.backgroundImage = ""
    if (screen.width < 1024){
        mensaje.style.display = "none"
    }    
}

function encriptar(texto) {
    let llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for (let index = 0; index < llaves.length; index++) {
        if (texto.includes(llaves[index][0])) {
            texto = texto.replaceAll(llaves[index][0], llaves[index][1])
        }

    }
    return texto;
}

function desencriptar(texto) {
    let llaves = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];

    for (let index = 0; index < llaves.length; index++) {
        if (texto.includes(llaves[index][0])) {
            texto = texto.replaceAll(llaves[index][0], llaves[index][1])
        }

    }
    return texto;
}


function NumText(string) { //solo letras y numeros
    var out = '';
    //Se añaden las letras validas
    // var filtro =
    //     'abcdefghijklmnñopqrstuvwxyz ,;.:-_=¿?!¡()"<>\/*+ºª@#$%&[]{}ÉÁÍÓÚéáúóíABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890'; 

    var filtro =
        'abcdefghijklmnñopqrstuvwxyz '; //Caracteres validos

    for (var i = 0; i < string.length; i++)
        if (filtro.indexOf(string.charAt(i)) != -1)
            out += string.charAt(i);
    return out;
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Mensaje Secreto de Alura
// fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober
