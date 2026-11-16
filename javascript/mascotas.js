const mascotas = [
  { nombre: "Bruno",   tipo: "perro", edad: "3 años", tamano: "grande", frase: "Tranquilo y cariñoso.",    foto: "../img/caramelo.jpg" },
  { nombre: "Dobby",  tipo: "perro",  edad: "2 años",  tamano: "mediano", frase: "Tranquilo, ama las siestas.", foto: "../img/dobby.jpg" },
  { nombre: "Sammy", tipo: "perro", edad: "1 año", tamano: "mediano",  frase: "Noble y leal compañera.",     foto: "../img/chimuelo.jpg" },
  { nombre: "Mocca",   tipo: "perro",  edad: "1 año y 6 meses", tamano: "mediano", frase: "Curioso y jugueton.",        foto: "../img/stormy.jpg" },
  { nombre: "Jade",     tipo: "gato",  edad: "6 meses", tamano: "pequeño", frase: "Aventurera y alegre.", foto: "../img/coco.jpg" },
  { nombre: "Ron",     tipo: "perro",  edad: "1 año", tamano: "grande", frase: "Cariñoso y tranquilo.", foto: "../img/ron.jpg" },  
  { nombre: "Chanel",     tipo: "gato",  edad: "3 meses", tamano: "pequeño", frase: "Jugueton y amigable.", foto: "../img/copito.jpg" },
  { nombre: "Remy",     tipo: "perro",  edad: "2 años", tamano: "mediano", frase: "Alegre y travieso.", foto: "../img/remy.jpg" },
  { nombre: "Rocky",     tipo: "perro",  edad: "2 años", tamano: "pequeño", frase: "Cariñoso y Leal.", foto: "../img/polo.jpg" },
  { nombre: "Susy",     tipo: "perro",  edad: "1 año y 3 meses", tamano: "mediano", frase: "Juguetona y cariñosa.", foto: "../img/susy.jpg" }, 
  { nombre: "Kiwi",     tipo: "gato",  edad: "5 meses", tamano: "mediano", frase: "Jugueton y timido.", foto: "../img/pascal.jpg"    },
  { nombre: "Onix",     tipo: "gato",  edad: "4 meses", tamano: "pequeño", frase: "Divertida y cariñosa.", foto: "../img/chanel.jpg"    }
];
const grid = document.getElementById("grid");
const plantilla = document.getElementById("plantilla-tarjeta");

mascotas.forEach(m => {
  const clon = plantilla.content.cloneNode(true);

  clon.querySelector(".tarjeta").dataset.tipo = m.tipo;

  const img = clon.querySelector("img");
  img.src = m.foto;
  img.alt = m.nombre;

  clon.querySelector("h3").textContent = m.nombre;
  clon.querySelector(".datos").textContent =
    `${m.tipo === "perro" ? "Perro" : "Gato"} · ${m.edad} · ${m.tamano}`;
  clon.querySelector(".frase").textContent = m.frase;
  clon.querySelector(".btn").href="../pags/3pag.html";
    `adopcion.html?mascota=${encodeURIComponent(m.nombre)}`;

  grid.appendChild(clon);
});


