// Cantidad de domingos jugados en total
const TOTAL_MATCHES = 6;

// Plata recaudada
const FONDO_COMUN = 30346; 

const PLAYERS = {
  // Se agregó "goalFech" a todos para que el sistema de puntos funcione correctamente.
  "Kippes": { matches: 7, mvp: 2, wins: 1, goalFech: 0, foto: "kippes.jpg", bonus: 40 },
  "Turro": { matches: 3, mvp: 0, wins: 0, goalFech: 0, foto: "Turro.jpg", bonus: 0 },
  "Demencia": { matches: 0, mvp: 0, wins: 0, goalFech: 0, foto: "Demencia.jpg", bonus: 0 },
  "Topa": { matches: 5, mvp: 0, wins: 1, goalFech: 0, foto: "Topa.jpg", bonus: 0 },
  "Isleño": { matches: 1, mvp: 0, wins: 0, goalFech: 0, foto: "Isleno.jpg", bonus: 0 },
  "Faculo Airbag": { matches: 2, mvp: 0, wins: 0, goalFech: 0, foto: "Faculo.jpg", bonus: 0 },
  "Fran": { matches: 6, mvp: 1, wins: 1, goalFech: 0, foto: "Fran.jpg", bonus: 20 },
  "Ponchi": { matches: 0, mvp: 0, wins: 0, goalFech: 0, foto: "Ponchi.jpg", bonus: 0 },
  "Jony sucio": { matches: 1, mvp: 0, wins: 0, goalFech: 0, foto: "Jony.jpg", bonus: 0 },
  "Julio Metal": { matches: 4, mvp: 1, wins: 0, goalFech: 0, foto: "Julio.jpg", bonus: 20 },
  "Valencia": { matches: 0, mvp: 0, wins: 0, goalFech: 0, foto: "Valencia.jpg", bonus: 0 },
  "Dinho": { matches: 3, mvp: 0, wins: 0, goalFech: 0, foto: "Dinho.jpg", bonus: 0 },
  "Cinema": { matches: 3, mvp: 0, wins: 0, goalFech: 0, foto: "cinema.jpg", bonus: 0 },
  "Chinche": { matches: 6, mvp: 1, wins: 1, goalFech: 0, foto: "Chinche.jpg", bonus: 0 },
  "Culebra": { matches: 3, mvp: 0, wins: 0, goalFech: 0, foto: "Culebra.jpg", bonus: 0 },
  "Vegui": { matches: 4, mvp: 0, wins: 0, goalFech: 0, foto: "Vegui.jpg", bonus: 0 },
  "Mosky": { matches: 4, mvp: 0, wins: 0, goalFech: 0, foto: "Mosky.jpg", bonus: 0 },
  "Bylu": { matches: 3, mvp: 0, wins: 0, goalFech: 0, foto: "Bylu.jpg", bonus: 0 },
  "Pana Hija": { matches: 2, mvp: 0, wins: 0, goalFech: 0, foto: "Pana.jpg", bonus: 0 }, 
  "DJ Manzon": { matches: 5, mvp: 0, wins: 0, goalFech: 0, foto: "manzon.jpg", bonus: 0 }, 
  "Nuno": { matches: 6, mvp: 0, wins: 0, goalFech: 0, foto: "nuno.jpg", bonus: 0 },
  "Peter": { matches: 2, mvp: 1, wins: 0, goalFech: 0, foto: "peter.jpg", bonus: 20 },
};

const MATCH_HISTORY = [
  { fecha: "05 Ene", resultado: "Pechera 3 - 0 Sin pechera", mvp: "Fran" }, 
  { fecha: "12 Ene", resultado: "Pechera 8 - 12 Sin pechera", mvp: "Kippes" },
  { fecha: "18 Ene", resultado: "Pechera 7 - 4 Sin pechera", mvp: "Kippes" },
  { fecha: "25 Ene", resultado: "Pechera 8 - 9 Sin pechera", mvp: "Peter" },
  { fecha: "05 Feb", resultado: "Pechera 14 - 11 Sin pechera", mvp: "Julio Metal" },
  { fecha: "10 Feb", resultado: "Pechera 14 - 7 Sin pechera", mvp: "Chinche" },
  { fecha: "17 Feb", resultado: "Pechera 5 - 7 Sin pechera", mvp: "???" },
];
