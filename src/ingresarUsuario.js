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
        let nombreCuenta=cuentas[k].nombre
        let contraseñaCuenta=cuentas[k].contraseña
        console.log("hola "+nombreCuenta)
        console.log("la contraseñas" + contraseñaCuenta)
    
    // por medio de if,else if se esta comprobando si existe el usuario y si no mostrar un mensaje que diga si el usuario puso mal el la contraseña o el usuario 
    if (cuentas[k].nombre==nombreInput && cuentas[k].contraseña==contraseñaInput) {
        alert("soy " +cuentas[k].nombre )
        location.href="index.html"  
    }else if(nombreInput==nombreCuenta && cuentas[k].contraseña!=contraseñaInput ){
    // se muestra un mensaje de "contraseña incorrecta y se elimina automaticamente la contraseña puesta anterios mente y se pone el puntero dentro de el input contraseña o document.querySelectorAll(".inputInicio")[1].focus() "
        console.log("contraseña incorrecta")
        document.querySelectorAll(".inputInicio")[1].focus()
        document.querySelectorAll(".inputInicio")[1].value=""
        let incorrecta = document.querySelectorAll(".mensaje")[0].innerHTML=`contraseña incorrecta` 
        return incorrecta
    }
    if(nombreInput!=nombreCuenta||nombreInput!=nombreCuenta && cuentas[k].contraseña!=contraseñaInput){
       document.querySelectorAll(".mensaje")[0].innerHTML=`no existe`
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
   if (codigo_tecla==13) {

    nuevaCuenta()
}
   }

function nuevaCuenta() {
// se selecionan los valores de el input y se almasenan en la los let correspondientes
    let nuevoUsuario=document.querySelectorAll(".inputInicio")[2].value.toLowerCase()
    let nuevocontraseña=document.querySelectorAll(".inputInicio")[3].value
// mando los valores a el array=cuentas por el metodo push 
let mandar=cuentas.push({nombre:nuevoUsuario,contraseña:nuevocontraseña})
console.log(mandar)
console.log(cuentas)
document.querySelector("#caja1").style.display="block"
document.querySelector("#caja2").style.display="none"
}

