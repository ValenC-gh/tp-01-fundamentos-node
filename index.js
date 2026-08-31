const fs = require('node:fs');
const path = require('node:path');

const estudiante = process.argv[2] ?? "Estudiante";

const juego = {
    titulo: 'Loop Hero',
    estudio: 'Four Quarters',
    anio: 2021,
    plataformas: ['PC','Nintendo Switch', 'Xbox'],
    multijugador: false
};

const plataformasTexto = juego.plataformas.join(', ');
const multijugadorTexto = juego.multijugador ? 'Sí' : 'No';

const ficha = `
FICHA DE VIDEOJUEGO
====================
Estudiante: ${estudiante}
Node.js: ${process.version}
Plataforma del sistema: ${process.platform}
Título: ${juego.titulo}
Estudio: ${juego.estudio}
Año: ${juego.anio}
Plataformas: ${plataformasTexto}
¿Es multijugador?: ${multijugadorTexto}
`;

const carpetaSalida = path.join(__dirname, "salida");
const rutaArchivo = path.join(carpetaSalida, "ficha-Loophero.txt");

fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");

console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);