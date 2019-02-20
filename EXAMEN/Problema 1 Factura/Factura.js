export default class Factura{
    constructor(numeroFactura, nombre, subtotal, total ){
        this._numeroFactura = numeroFactura;
        this._nombre = nombre;
        this._subtotal = subtotal;
        this._total = total;
        this._fecha = new Date();
    }

    get numeroFactura(){
        return this._numeroFactura;
    }

    get nombre(){
        return this._nombre;
    }

    get subtotal(){
        return this._subtotal;
    }

    get total(){
        return this._total;
    }

    set numeroFactura(numeroFactura){
        this._numeroFactura = numeroFactura;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set subtotal(subtotal){
        this._subtotal = subtotal;
    }

    set numeroFactura(numeroFactura){
        this._numeroFactura = numeroFactura;
    }

    getFecha(){
        return this._fecha;
    }

    getInformacion(){
        console.log(`Fecha: ${this._fecha}\nNúmero de Factura: ${this._numeroFactura}\nNombre: 
        ${this._nombre}\nSubtotal: ${this._subtotal}\nTotal: ${this._total}`);
    }
}