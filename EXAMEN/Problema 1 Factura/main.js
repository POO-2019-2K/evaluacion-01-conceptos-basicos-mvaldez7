import Factura from "./Factura.js";

let factura1 = new Factura(1, 'Martin Ignacio', 100, 125);

factura1.nombre = 'Juan Perez';
console.log(factura1.nombre);
factura1.getInformacion();
