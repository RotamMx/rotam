function auto(marca, modelo, numeroSerie, placas, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.numeroSerie = numeroSerie;
    this.placas = placas;
    this.annio = annio;
}
var autos = [];
for(let i = 0; i<5; i++){
    var marca = prompt('Ingresa la marca del auto ');
    var modelo = prompt('ingresa el model del carro ');
    var numeroSerie = prompt('Ingresa tu número de serie: ');
    var placas = prompt('Ingresa ts placas ');
    var annio = prompt('Ingresa el año de tu carro ');
    autos.push(new auto (marca, modelo, numeroSerie, placas, annio));
}

for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}
