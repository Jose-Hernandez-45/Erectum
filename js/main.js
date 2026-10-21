const playeraImg = document.getElementById("playera-img");
const btnCambiar = document.getElementById("btn-cambiar");
const playeraVista = document.getElementById("playera-vista");

let mostrandoFrente = true;

btnCambiar.addEventListener("click", () => {
    mostrandoFrente = !mostrandoFrente;

    if (mostrandoFrente) {
        playeraImg.src = "./assets/img/playera_frente.png";
        playeraImg.alt = "Playera negra - vista frontal";

        playeraVista.textContent = "FRENTE";
        btnCambiar.textContent = "↻ VER PARTE TRASERA";
        btnCambiar.setAttribute("aria-pressed", "false");
    } else {
        playeraImg.src = "./assets/img/playera_atras.png";
        playeraImg.alt = "Playera negra - vista trasera";

        playeraVista.textContent = "ESPALDA";
        btnCambiar.textContent = "↻ VER PARTE FRONTAL";
        btnCambiar.setAttribute("aria-pressed", "true");
    }
});