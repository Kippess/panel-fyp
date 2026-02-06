// Cantidad de domingos que se han jugado en total en la temporada
const TOTAL_MATCHES = 5;

const PLAYERS = {
  "Kippes": { matches: 5, mvp: 2, foto: "kippes.jpg" },
  "Turro": { matches: 2, mvp: 0, foto: "Turro.jpg" },
  "Demencia": { matches: 0, mvp: 0, foto: "Demencia.jpg" },
  "Topa": { matches: 4, mvp: 0, foto: "Topa.jpg" },
  "Isleño": { matches: 1, mvp: 0, foto: "Isleno.jpg" },
  "Faculo Airbag": { matches: 1, mvp: 0, foto: "Faculo.jpg" },
  "Fran": { matches: 4, mvp: 1, foto: "Fran.jpg" },
  "Ponchi": { matches: 0, mvp: 0, foto: "Ponchi.jpg" },
  "Jony sucio": { matches: 0, mvp: 0, foto: "Jony.jpg" },
  "Julio Metal": { matches: 3, mvp: 0, foto: "Julio.jpg" },
  "Valencia": { matches: 0, mvp: 0, foto: "Valencia.jpg" },
  "Dinho": { matches: 3, mvp: 0, foto: "Dinho.jpg" },
  "Cinema": { matches: 2, mvp: 0, foto: "cinema.jpg" },
  "Chinche": { matches: 5, mvp: 0, foto: "Chinche.jpg" },
  "Culebra": { matches: 1, mvp: 0, foto: "Culebra.jpg" },
  "Vegui": { matches: 2, mvp: 0, foto: "Vegui.jpg" },
  "Mosky": { matches: 2, mvp: 0, foto: "Mosky.jpg" },
  "Bylu": { matches: 2, mvp: 0, foto: "Bylu.jpg" },
  "Pana Hija": { matches: 2, mvp: 0, foto: "Pana.jpg" }, 
  "DJ Manzon": { matches: 4, mvp: 0, foto: "manzon.jpg" }, 
  "Nuno": { matches: 4, mvp: 0, foto: "nuno.jpg" },
  "Peter": { matches: 1, mvp: 1, foto: "peter.jpg" },
};

// Aquí irás agregando los partidos. 
// El último de la lista es el que activa el fuego 🔥 del MVP.
const MATCH_HISTORY = [
  // Ejemplo de cómo anotar cuando jueguen:
  // { fecha: "05 Ene", resultado: "Verde 5 - 2 Azul", mvp: "Kippes" }
  { fecha: "05 Ene", resultado: "Pechera 3 - 0 Sin pechera", mvp: "Fran" }, 
  { fecha: "12 Ene", resultado: "Pechera 8 - 12 Sin pechera", mvp: "Kippes" },
  { fecha: "18 Ene", resultado: "Pechera 7 - 4 Sin pechera", mvp: "Kippes" },
  { fecha: "25 Ene", resultado: "Pechera 8 - 9 Sin pechera", mvp: "Peter" },
  { fecha: "25 Ene", resultado: "Pechera 14 - 11 Sin pechera", mvp: "??" },
];
