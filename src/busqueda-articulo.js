let productos = [
  // en array Productos es donde se pueden crear los nuevos productos de la tienda
  { imagen: "./assest/blulabel.JPG", nombre: "Johnnie Walker Blue Label X 750 ml", precio: "1.750.000", },
  { imagen: "./assest/chocorramo.jpg", nombre: "Chocorramo", precio: "1.400", },
  { imagen: "./assest/todo-rico.png", nombre: "Pasaboca todo rico bbq", precio: "2.500", },
  { imagen: "./assest/colombiana.jpg", nombre: "Gaseosa COLOMBIANA 400 ml", precio: "2.500", },
  { imagen: "./assest/pony-malta.jpg", nombre: "Pony Malta Pet Mini x 200 Ml", precio: "2.000", },
]

function iniciarPagina() {
  // con el for crea los productos automaticamente y los muestra en la pagina con dentor de el div .container-articulos
  for (let i = 0; i < productos.length; i++) {
    document.querySelectorAll(".container-articulos")[0].insertAdjacentHTML("beforeend", `
          <div class="box" producto="${i}">
              <img src="${productos[i].imagen}" alt="">
              <p class="etiqueta-producto">${productos[i].nombre}</p><br>
              <p class="precio-producto">COP ${productos[i].precio}</p>
              <img src="./assest/carro-de compras.jpg" alt="" class="carro">
          </div>`
    )

    document.querySelectorAll(".box")[i].onclick = cambiarColor
    // se muestra los productos o se ocultan si el usuario esta o no escribiendo para buscar un producto
    document.querySelector("#buscar-texto").addEventListener('input', ocultarProductos)
    document.querySelector("#boton-buscar").onclick = buscarProducto
  }
}

function cambiarColor() {
  let i = Number(this.getAttribute("producto"))
  document.querySelectorAll(".box")[i].style.borderColor = "blue"; // Cambia el color del borde al hacer clic
}
function ocultarProductos() {
  // oculta los productos si el usuario esta escribiendo o los muestra si no.
  let inputTexto = document.querySelector("#buscar-texto")
  if (inputTexto.value) {
    document.querySelector(".container-articulos").style.display = "none"
    document.querySelector("#buscar-texto").focus()
  } else {
    document.querySelector(".container-articulos").style.display = "block"
    document.querySelector(".container-articulos").style = null
  }

}
function buscarProducto() {
  // minuscolas = toLowerCase() mayusculas = toLocaleUpperCase()

  let inputBuscarTexto = document.querySelector("#buscar-texto").value.toLowerCase()

  for (let i = 0; i < productos.length; i++) {

    if (inputBuscarTexto == productos[i].nombre.toLowerCase()) {
      console.log("producto " + inputBuscarTexto + " encontrad o " + productos[i].nombre.toLowerCase())
    }

  }
}



const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a")

allLinks.forEach((elem) => {
  elem.addEventListener('click', function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
  })
});

window.onload = iniciarPagina