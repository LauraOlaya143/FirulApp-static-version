const cardContainer = document.getElementById("card_container")
const tituloConsultaContainer = document.getElementById("titulo_busqueda")
const busqueda = document.querySelector("#buscador");
const btn_busqueda = document.querySelector("#btn_busqueda");

const renderCartas = (array) => {
    let texto = localStorage.getItem('busquedaValor');
    let arrayfiltrado = array.filter((e) => e.lugar.toLowerCase() === texto)
    let numBusquedas = arrayfiltrado.length
    tituloConsultaContainer.innerHTML = " ";
    tituloConsultaContainer.innerHTML = `
                    <h1 class="titulo">${texto.replace(/\b\w/g, l => l.toUpperCase())}</h1>
                    <h5>${numBusquedas} busquedas encontradas</h5>
    `
    cardContainer.innerHTML = " ";
    
    for (let element of arrayfiltrado) {
        const body = document.createElement("div");
        body.innerHTML = `
        <div class="card mb-3" style="max-width: 650px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="contenedor_imgCard">
                                        <img src="${element.img}" class="card-img-top" alt="${element.nombre}">
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                        <h5 class="card-title">${element.nombre}</h5>
                                        <div class="text-end valoracion">
                                            <h1 class="calificaciones_puntuacion"><span>⭐</span>${element.valoracion}</h1>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
        `
        const boton = document.createElement("div");
        boton.classList.add("button_verVeterinariaContainer")
            boton.addEventListener("click", () => {
                let text = element.id
                localStorage.removeItem("busquedaID");
                localStorage.setItem('busquedaID', text);
                location.href = "./frame1.html";
            });
            boton.innerHTML = `<button id="btn${element.id}" class="link_registro button_verVeterinaria">Ver Veterinaria</button>`;

            body.appendChild(boton)
            cardContainer.appendChild(body);
            
    }
    
}

async function traerDatos() {
    const respuesta = await fetch('../js/veterinarias.json');
    const veterinarias = await respuesta.json();
    renderCartas (veterinarias);
}

traerDatos();

btn_busqueda.addEventListener("click", () => {
    localStorage.removeItem("busquedaValor");
    text = busqueda.value.toLowerCase();
    localStorage.setItem('busquedaValor', text);
    location.href='pages/busquedaClinicas.html'
})
