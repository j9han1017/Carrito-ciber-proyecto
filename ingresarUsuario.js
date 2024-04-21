window.onload=inicio 

    let cuentas=[
        {nombre:"leonel",contraseña:"123"},
        {nombre:"diaz",contraseña:"123"}
    ]

function inicio() {
    document.querySelector("#botonIngresar").onclick=inicioCARRITOCIBER
    document.querySelector(".caja-nombre").onkeydown=tecladoInicioCARRITOCIBER
    document.querySelector(".caja-contraseña").onkeydown=tecladoInicioCARRITOCIBER
}
function inicioCARRITOCIBER() {
    let nombreInput=document.querySelectorAll(".inputInicio")[0].value.toLowerCase()
    let contraseñaInput=document.querySelectorAll(".inputInicio")[1].value


for (let k = 0; k < cuentas.length; k++) {
  if (cuentas[k].nombre==nombreInput && cuentas[k].contraseña==contraseñaInput) {
    alert("soy " +cuentas[k].nombre )
    location.href="index.html"  
  }else{
    alert("crea una cuenta")
  }
    
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

