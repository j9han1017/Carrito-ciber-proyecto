window.onload=inicio 

    let cuentas=[
        {nombre:"leonel",contraseña:"123"},
        {nombre:"diaz",contraseña:"123"}
    ]

function inicio() {
    document.querySelector("#botonIngresar").onclick=inicioCARRITOCIBER
    document.querySelectorAll(".botonCrearCuenta")[0].onclick=crearCuentaNueva
    document.querySelector(".caja-nombre").onkeydown=tecladoInicioCARRITOCIBER
    document.querySelector(".caja-contraseña").onkeydown=tecladoInicioCARRITOCIBER
    document.querySelector("#caja2").style.display="none"
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
function crearCuentaNueva() {
    document.querySelector("#caja1").style.display="none"
    document.querySelector("#caja2").style.display="block"
    document.querySelectorAll(".inputInicio")[2].focus()
    document.querySelectorAll(".caja-nombre")[1].onkeydown=tecladoCrearCuenta
    document.querySelectorAll(".caja-contraseña")[1].onkeydown=tecladoCrearCuenta
    document.querySelectorAll(".botonCrearCuenta")[1].onclick=nuevaCuenta
}

function tecladoInicioCARRITOCIBER(e) {
    let codigo_tecla = e.keyCode
    if (codigo_tecla==13) {

        inicioCARRITOCIBER()
    }
    if (codigo_tecla==37) {
        location.href="ingresarUsuario.html"
        
    }
    // evento teclado nombre y contraseña .focus() se pueda cambiar la direccion de el lugar donde escribimos con las teclas arriba y abajo
    if (codigo_tecla==40) {
        document.querySelectorAll(".inputInicio")[1].focus()
        
    }
    if (codigo_tecla==38) {
        document.querySelectorAll(".inputInicio")[0].focus()
        
    }
    
}

function tecladoCrearCuenta(e) {
    let codigo_tecla= e.keyCode
    if (codigo_tecla==38) {
        document.querySelectorAll(".inputInicio")[2].focus()
        
    }
    if (codigo_tecla==40) {
       document.querySelectorAll(".inputInicio")[3].focus()
       
   }
   }

function nuevaCuenta() {
// se selecionan los valores de el input y se almasenan en la los let correspondientes
    let nuevoUsuario=document.querySelectorAll(".inputInicio")[2].value
    let nuevocontraseña=document.querySelectorAll(".inputInicio")[3].value
// mando los valores a el array=cuentas por el metodo push 
let mandar=cuentas.push({nombre:nuevoUsuario,contraseña:nuevocontraseña})
console.log(mandar)
console.log(cuentas)
document.querySelector("#caja1").style.display="block"
}

