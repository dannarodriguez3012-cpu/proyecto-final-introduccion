const params = new URLSearchParams(window.location.search);
const mascota = params.get("mascota");

if (mascota) {
  document.getElementById("nombre-mascota").textContent = mascota;
  document.getElementById("mascota").value = mascota;
}

const form = document.getElementById("form-adopcion");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const datos = Object.fromEntries(new FormData(form));
  console.log("Solicitud:", datos); 

  form.hidden = true;
  mensaje.hidden = false;
  mensaje.textContent = `¡Gracias, ${datos.nombre}! Recibimos tu solicitud para adoptar a ${datos.mascota || "una mascota"}. Te contactaremos pronto.`; 