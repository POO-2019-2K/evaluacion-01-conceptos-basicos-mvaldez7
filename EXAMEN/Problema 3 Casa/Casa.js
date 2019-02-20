export default class Casa{
    constructor(precio, superficie, numeroDeHabitaciones, numeroDeBanios)

   {this._precio = precio;
    this._superficie = superficie;
    this._numeroDeHabitaciones = numeroDeHabitaciones;
    this._numeroDeBanios = numeroDeBanios;
}

get precio(){
    return this._precio;
    }

get superficie(){
    return this._superficie;
 }

  
 set numeroDeHabitaciones(numeroDeHabitaciones){
    this._numeroDeHabitaciones = numeroDeHabitaciones;
 }
 
 set numeroDeBanios(numeroDeBanios){
    this._numeroDeBanios = numeroDeBanios;
 }


imprimir(){
    console.log(`Precio $${this._precio}MXN, su superficie es de ${this._superficie}m2, tiene ${this._numeroDeHabitaciones} Habitaciones y tiene 
    ${this._numeroDeBanios} Banios`);
    
}
}