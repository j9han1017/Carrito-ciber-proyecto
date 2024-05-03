let productos=[
  {imagen:"./assest/blulabel.JPG",nombre:"Johnnie Walker Blue Label X 750 ml",precio:"1.750.000",},
  {imagen:"./assest/chocorramo.jpg",nombre:"Chocorramo",precio:"1.400",},
  {imagen:"./assest/todo-rico.png",nombre:"Pasaboca todo rico bbq",precio:"2.500",},
  {imagen:"./assest/colombiana.jpg",nombre:"Gaseosa COLOMBIANA 400 ml",precio:"2.500",},
  {imagen:"./assest/pony-malta.jpg",nombre:"Pony Malta Pet Mini x 200 Ml",precio:"2.000",},
]

function iniciarPagina(){
  document.querySelectorAll(".box")[0].onclick=cambiarColor
  for (let i = 0; i < productos.length; i++) {
    document.querySelectorAll(".container-articulos")[0].insertAdjacentHTML("beforeend",`
        <div class="box">
        <img src="${productos[i].imagen}" alt="">
            <p class="etiqueta-producto">${productos[i].nombre}</p><br>
            <p class="precio-producto">COP ${productos[i].precio}</p>
            <img src="./assest/carro-de compras.jpg" alt="" class="carro">
        </div>`
    )
  }
}


function cambiarColor() {
  document.querySelectorAll(".box")[0].style.borderColor = "blue"; // Cambia el color del borde al hacer clic
}



const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a")

allLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
  })
});

window.onload=iniciarPagina