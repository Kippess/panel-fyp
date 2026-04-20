const TOTAL_MATCHES = 15;
const FONDO_COMUN = 60081;

const PLAYERS = {
  "Kippes": {
    "matches": 15,
    "mvp": 2,
    "wins": 3,
    "goalFech": 1,
    "foto": "kippes.jpg",
    "bonus": 40
  },
  "Turro": {
    "matches": 8,
    "mvp": 0,
    "wins": 0,
    "goalFech": 0,
    "foto": "Turro.jpg",
    "bonus": 0
  },
  "Demencia": {
    "matches": 6,
    "mvp": 0,
    "wins": 3,
    "goalFech": 0,
    "foto": "Demencia.jpg",
    "bonus": 0
  },
  "Topa": {
    "matches": 11,
    "mvp": 0,
    "wins": 4,
    "goalFech": 0,
    "foto": "Topa.jpg",
    "bonus": 0
  },
  "Isleño": {
    "matches": 3,
    "mvp": 0,
    "wins": 0,
    "goalFech": 0,
    "foto": "Isleno.jpg",
    "bonus": 0
  },
  "Faculo Airbag": {
    "matches": 7,
    "mvp": 1,
    "wins": 4,
    "goalFech": 1,
    "foto": "Faculo.jpg",
    "bonus": 0
  },
  "Fran": {
    "matches": 15,
    "mvp": 3,
    "wins": 7,
    "goalFech": 0,
    "foto": "Fran.jpg",
    "bonus": 20
  },
  "Ponchi": {
    "matches": 0,
    "mvp": 0,
    "wins": 0,
    "goalFech": 0,
    "foto": "Ponchi.jpg",
    "bonus": 0
  },
  "Jony sucio": {
    "matches": 3,
    "mvp": 0,
    "wins": 1,
    "goalFech": 0,
    "foto": "Jony.jpg",
    "bonus": 0
  },
  "Julio Metal": {
    "matches": 7,
    "mvp": 1,
    "wins": 1,
    "goalFech": 0,
    "foto": "Julio.jpg",
    "bonus": 20
  },
  "Valencia": {
    "matches": 3,
    "mvp": 0,
    "wins": 1,
    "goalFech": 0,
    "foto": "Valencia.jpg",
    "bonus": 0
  },
  "Bini": {
    "matches": 9,
    "mvp": 0,
    "wins": 2,
    "goalFech": 0,
    "foto": "Bini.jpg",
    "bonus": 0
  },
  "Cinema": {
    "matches": 4,
    "mvp": 0,
    "wins": 0,
    "goalFech": 0,
    "foto": "cinema.jpg",
    "bonus": 0
  },
  "Chinche": {
    "matches": 14,
    "mvp": 2,
    "wins": 7,
    "goalFech": 2,
    "foto": "Chinche.jpg",
    "bonus": 0
  },
  "Culebra": {
    "matches": 6,
    "mvp": 1,
    "wins": 2,
    "goalFech": 1,
    "foto": "Culebra.jpg",
    "bonus": 0
  },
  "Vegui": {
    "matches": 13,
    "mvp": 1,
    "wins": 4,
    "goalFech": 3,
    "foto": "Vegui.jpg",
    "bonus": 0
  },
  "Mosky": {
    "matches": 9,
    "mvp": 1,
    "wins": 3,
    "goalFech": 0,
    "foto": "Mosky.jpg",
    "bonus": 0
  },
  "Bylu": {
    "matches": 8,
    "mvp": 1,
    "wins": 2,
    "goalFech": 0,
    "foto": "Bylu.jpg",
    "bonus": 0
  },
  "Pana Hija": {
    "matches": 4,
    "mvp": 0,
    "wins": 0,
    "goalFech": 0,
    "foto": "Pana.jpg",
    "bonus": 0
  },
  "DJ Manzon": {
    "matches": 8,
    "mvp": 0,
    "wins": 2,
    "goalFech": 0,
    "foto": "manzon.jpg",
    "bonus": 0
  },
  "Nuno": {
    "matches": 15,
    "mvp": 0,
    "wins": 5,
    "goalFech": 0,
    "foto": "nuno.jpg",
    "bonus": 0
  },
  "Peter": {
    "matches": 9,
    "mvp": 1,
    "wins": 5,
    "goalFech": 0,
    "foto": "peter.jpg",
    "bonus": 20
  },
  "Tincho": {
    "matches": 7,
    "mvp": 0,
    "wins": 2,
    "goalFech": 0,
    "foto": "ticnho.jpg",
    "bonus": 0
  },
  "Nacho Suri IND": {
    "matches": 3,
    "mvp": 0,
    "wins": 0,
    "goalFech": 0,
    "foto": "Nacho.jpg",
    "bonus": 0
  }
};

const MATCH_HISTORY = [
  {
    "fecha": "05 Ene",
    "resultado": "Pechera 3 - 0 Sin pechera",
    "mvp": "Fran"
  },
  {
    "fecha": "12 Ene",
    "resultado": "Pechera 8 - 12 Sin pechera",
    "mvp": "Kippes"
  },
  {
    "fecha": "18 Ene",
    "resultado": "Pechera 7 - 4 Sin pechera",
    "mvp": "Kippes"
  },
  {
    "fecha": "25 Ene",
    "resultado": "Pechera 8 - 9 Sin pechera",
    "mvp": "Peter"
  },
  {
    "fecha": "05 Feb",
    "resultado": "Pechera 14 - 11 Sin pechera",
    "mvp": "Julio Metal"
  },
  {
    "fecha": "10 Feb",
    "resultado": "Pechera 14 - 7 Sin pechera",
    "mvp": "Chinche"
  },
  {
    "fecha": "17 Feb",
    "resultado": "Pechera 5 - 7 Sin pechera",
    "mvp": "Culebra"
  },
  {
    "fecha": "22 Feb",
    "resultado": "Pechera 6 - 5 Sin pechera",
    "mvp": "Bylu"
  },
  {
    "fecha": "08 Feb",
    "resultado": "Pechera 7 - 4 Sin pechera",
    "mvp": "Vegui"
  },
  {
    "fecha": "15 Marzo",
    "resultado": "Pechera 12 - 7 Sin pechera",
    "mvp": "Faculo Airbag"
  },
  {
    "fecha": "22 Marzo",
    "resultado": "Pechera 2 - 6 Sin pechera",
    "mvp": "Fran"
  },
  {
    "fecha": "29 Marzo",
    "resultado": "Pechera 4 - 10 Sin pechera",
    "mvp": "Chinche"
  },
  {
    "fecha": "05 Abril",
    "resultado": "Pechera 4 - 5 Sin pechera",
    "mvp": "Mosky"
  },
  {
    "fecha": "12 Abr",
    "resultado": "Pechera 7 - Sin pechera 3",
    "mvp": "Fran"
  },
  {
    "fecha": "19-4",
    "resultado": "5 pechera - 4 Sin pechera",
    "mvp": "???"
  }
];
