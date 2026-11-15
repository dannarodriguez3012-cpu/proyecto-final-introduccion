const mascotas = [
  { nombre: "Caramelo",   tipo: "perro", edad: "3 meses", tamano: "pequeño", frase: "Juguetón y muy cariñoso.",    foto: "../img/caramelo.jpeg" },
  { nombre: "Tobby",  tipo: "perro",  edad: "4 meses",  tamano: "pequeño", frase: "Tranquilo, ama las siestas.", foto: "../img/Tobby.jpeg" },
  { nombre: "chimuelo", tipo: "perro", edad: "4 años", tamano: "mediano",  frase: "Noble y leal compañero.",     foto: "../img/chimuelo.jpg" },
  { nombre: "stormy",   tipo: "gato",  edad: "2 años", tamano: "mediano", frase: "Curiosa y juguetona.",        foto: "../img/stormy.jpeg" },
  { nombre: "coco",     tipo: "perro",  edad: "2 meses", tamano: "pequeño", frase: "Aventurera y alegre.", foto: "../img/coco.jpg" },
  { nombre: "copito",     tipo: "perro",  edad: "4 meses", tamano: "pequeño", frase: "Cariñoso y tranquilo.", foto: "../img/copito.jpeg" },  
  { nombre: "ron",     tipo: "perro",  edad: "5 meses", tamano: "pequeño", frase: "Jugueton y amigable.", foto: "../img/ron3.jpeg" },
  { nombre: "remy",     tipo: "perro",  edad: "4 meses", tamano: "pequeño", frase: "Alegre y travieso.", foto: "../img/remy.jpeg" },
  { nombre: "polo",     tipo: "perro",  edad: "3 meses", tamano: "pequeño", frase: "Cariñoso y timido.", foto: "../img/polo.jpg" },
  { nombre: "susy",     tipo: "gato",  edad: "1 año y 3 meses", tamano: "mediano", frase: "Tranquila y dormilóna.", foto: "../img/susy.jpeg" }, 
  { nombre: "pascal",     tipo: "gato",  edad: "8 meses", tamano: "mediano", frase: "Jugueton y timido.", foto: "../img/pascal.jpeg"    },
  { nombre: "chanel",     tipo: "gato",  edad: "1 año y 2 meses", tamano: "mediano", frase: "tranquila y hogareña.", foto: "../img/chanel.jpeg"    }
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


