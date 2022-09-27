const frameImg = document.getElementById("imgFrame")
const parrafoFrame = document.getElementById("parrafo_frame")
const btn_opiniones = document.getElementById("btn_opiniones")
const btn_informacion = document.getElementById("btn_informacion")
const labels_container = document.getElementById("labels_container")
const btn_reserva = document.getElementById("btn_reserva")


const mesDeCita = document.querySelector('.fecha-input');
const selectMes = document.querySelector('#fecha');

const tipoDeCita = document.querySelector('.tipoCita-input');
const selectCita = document.querySelector('#tipoCita');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const citas = ['Primeras visitas', 'Urgencias', 'Revisiones', 'Valoraciones', 'Pacientes referidos']


const opiniones = `<div class="calificaciones">
<h1 class="calificaciones_puntuacion"><span>⭐</span> 4.5</h1>
<article class="calificaciones_comentarios">
    <h2 class="calificaciones_usuario">Laura Correa</h2>
    <p class="calificaciones_usuario_comentario">Me parece increible, son muy profesionales en lo que hacen y mi perrito salio muy contento con ustedes. Volvere pronto :D</p>
    <span class="calificaciones_usuario_puntuacion">4.9</span>
</article>
<article class="calificaciones_comentarios">
    <h2 class="calificaciones_usuario">Laura Correa</h2>
    <p class="calificaciones_usuario_comentario">Me parece increible, son muy profesionales en lo que hacen y mi perrito salio muy contento con ustedes. Volvere pronto :D</p>
    <span class="calificaciones_usuario_puntuacion">4.9</span>
</article>
<article class="calificaciones_comentarios">
    <h2 class="calificaciones_usuario">Laura Correa</h2>
    <p class="calificaciones_usuario_comentario">Me parece increible, son muy profesionales en lo que hacen y mi perrito salio muy contento con ustedes. Volvere pronto :D</p>
    <span class="calificaciones_usuario_puntuacion">4.9</span>
</article>
</div>`

const informacion = `<p class="frame_text"><i class="fas fa-map-marker-alt icons_frame"></i>   Av. 4 Oe. #6-159, Cali, Valle del Cauca</p>
<p class="text_horario_frame frame_text"><i class="fas fa-clock icons_frame"></i> Abierto las 24 horas</p>
<p class="frame_text"><i class="fas fa-globe-americas icons_frame"></i> veterinariasanbernardo.com</p>
<p class="frame_text"><i class="fas fa-phone-alt icons_frame"></i> 28926090</p>`

parrafoFrame.innerHTML = ` `

const renderFrame = (array) => {
    let texto = localStorage.getItem('busquedaID');
    let arrayfiltrado = array.filter((e) => e.id == texto)
    let veterinaria = arrayfiltrado[0]
    frameImg.innerHTML = ` `
    frameImg.innerHTML = `
    <div class="frame_container">
                    <div>
                        <img src="${veterinaria.img}" class="img" alt="icono veterinaria">
                    </div>
                    <div class="text_imgFrame">
                        <h1>${veterinaria.nombre}</h1>
                        <h5 class="subtittle">Hospital Veterinario</h5>
                    </div>
                </div>
                
                <div class="imgFrame">
                    <img class="img" src="${veterinaria.imgLugar}" alt="${veterinaria.nombre}"/>
                </div>
    `

    parrafoFrame.innerHTML = informacion

    meses.forEach(element => {
        let option = `<option>${element}</option>`;
        selectMes.innerHTML += option;
    });

    citas.forEach(element => {
        let option = `<option>${element}</option>`;
        selectCita.innerHTML += option;
    });

}

async function traerDatos() {
    const respuesta = await fetch('../js/veterinarias.json');
    const veterinarias = await respuesta.json();
    btn_informacion.classList.add("buttons_frame_active")
    renderFrame(veterinarias);
}

traerDatos();

btn_opiniones.addEventListener('click', () => {
    btn_opiniones.classList.add("buttons_frame_active")
    btn_informacion.classList.remove("buttons_frame_active")
    parrafoFrame.innerHTML = ` `
    parrafoFrame.innerHTML = opiniones
    btn_reserva.classList.add('desaparecer')
    labels_container.classList.remove('labels_container')
    labels_container.classList.add('desaparecer')
})

btn_informacion.addEventListener('click', () => {
    btn_informacion.classList.add("buttons_frame_active")
    btn_opiniones.classList.remove("buttons_frame_active")
    parrafoFrame.innerHTML = ` `
    parrafoFrame.innerHTML = informacion
    btn_reserva.classList.remove("desaparecer")
    labels_container.classList.remove('desaparecer')
    labels_container.classList.add('labels_container')
    
})