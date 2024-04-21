window.onload=inicio 
function inicio() {
    document.querySelector("#botonIngresar").onclick=inicioCARRITOCIBER
    document.querySelector(".caja-nombre").onkeydown=tecladoInicioCARRITOCIBER
    document.querySelector(".caja-contraseña").onkeydown=tecladoInicioCARRITOCIBER
}
function inicioCARRITOCIBER() {
    let nombre=document.querySelectorAll(".inputInicio")[0].value
    let contraseña=document.querySelectorAll(".inputInicio")[1].value
    console.log(contraseña)

    if (nombre=="leonel" && contraseña=="123"|| nombre=="leo" && contraseña=="123"|| nombre=="LEONEL" && contraseña=="123"|| nombre=="Leonel" && contraseña=="123") {
        location.href="index.html"    
    }
    if (nombre=="diaz" && contraseña=="123"|| nombre=="Diaz" && contraseña=="123"|| nombre=="DIAZ" && contraseña=="123"|| nombre=="diaZ" && contraseña=="123") {
        location.href="index.html"    
    }
}

function tecladoInicioCARRITOCIBER(e) {
    let codigo_tecla = e.keyCode
    if (codigo_tecla==13) {

        inicioCARRITOCIBER()
    }
    if (codigo_tecla==37) {
        location.href="ingresarUsuario.html"
        
    }
    
}

