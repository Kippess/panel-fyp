// 1. TOTAL DE PARTIDOS JUGADOS EN EL AÑO
const TOTAL_MATCHES = 10;

// 2. ESTADÍSTICAS ACUMULADAS DE JUGADORES
// matches: cantidad de partidos a los que asistió
// mvp: cantidad de veces que fue elegido mejor jugador
const PLAYERS = {
  "Kippes": { matches: 10, mvp: 1 },
  "Turro": { matches: 10, mvp: 3 },
  "Demencia": { matches: 10, mvp: 0 },
  "Topa": { matches: 10, mvp: 0 },
  "Isleño": { matches: 10, mvp: 1 },
  "Faculo Airbag": { matches: 5, mvp: 2 },
  "Fran": { matches: 6, mvp: 4 },
  "Ponchi": { matches: 2, mvp: 0 },
  "Jony sucio": { matches: 2, mvp: 0 },
  "Julio Metal": { matches: 0, mvp: 0 },
  "Valencia": { matches: 0, mvp: 0 },
  "Dinho": { matches: 0, mvp: 0 },
  "Chinche": { matches: 0, mvp: 0 },
  "Culebra": { matches: 0, mvp: 0 },
  "Vegui": { matches: 0, mvp: 0 },
  "Mosky": { matches: 0, mvp: 0 },
  "Bylu": { matches: 0, mvp: 0 },
  "Pana Hija": { matches: 0, mvp: 0 }
};

// 3. HISTORIAL DE PARTIDOS RECIENTES
// Aquí puedes ir agregando las fechas para que aparezcan en el carrusel
const MATCH_HISTORY = [
  { fecha: "15 Oct", resultado: "Azul 5 - 3 Verde", mvp: "Turro" },
];
