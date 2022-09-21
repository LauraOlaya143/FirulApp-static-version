const cardContainer = document.getElementById("card_container")
const tituloConsultaContainer = document.getElementById("titulo_busqueda")
const busqueda = document.querySelector("#buscador");
const btn_busqueda = document.querySelector("#btn_busqueda");
let text = " "

const renderCartas = (array) => {
    let texto = "Cali Norte"
    let arrayfiltrado = array.filter((e) => e.lugar == texto)
    let numBusquedas = arrayfiltrado.length
    tituloConsultaContainer.innerHTML = " ";
    tituloConsultaContainer.innerHTML = `
                    <h1 class="titulo">${texto}</h1>
                    <h5>${numBusquedas} busquedas encontradas</h5>
    `
    cardContainer.innerHTML = " ";
    
    for (let element of arrayfiltrado) {
        cardContainer.innerHTML += `
        <div class="card mb-3" style="max-width: 650px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="contenedor_imgCard">
                                    <a href="./frame1.html">
                                        <img src="${element.img}" class="card-img-top" alt="${element.nombre}">
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <a href="./frame1.html">
                                        <h5 class="card-title">${element.nombre}</h5>
                                        <div class="text-end valoracion">
                                            <h1 class="calificaciones_puntuacion"><span>⭐</span>${element.valoracion}</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        `
    }
    
}

async function traerDatos() {
    const respuesta = await fetch('../js/veterinarias.json');
    const veterinarias = await respuesta.json();
    renderCartas (veterinarias);
}

traerDatos();

btn_busqueda.addEventListener("click", () => {
    text = busqueda.value.toLowerCase();
    alert(text)
    window.location.href = "http://127.0.0.1:5500/pages/busquedaClinicas.html";
})