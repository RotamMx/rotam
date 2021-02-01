var nombre = document.getElementById('nombre');
var apellidoP = document.getElementById('apellidoP');
var apellidoM = document.getElementById('apellidoM');
var correo = document.getElementById('correo');
var contra = document.getElementById('Contra');
var error = document.getElementById('error');

// arrays de perfiles

function perfil(nombre, apellidoP, apellidoM, correo, contra){
    this.nombre = nombre;
    this.apellidoP = apellidoP;
    this.apellidoM = apellidoM;
    this.correo = correo;
    this.contra = contra;
}

var perfiles = [];
var perfil 


//arrays de autos 

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
// errores enviar formulario

function enviarForm(){
    console.log('Enviando Formulario...');

    var mensajesError = [];

    if(nombre.value === null || nombre.value ==='' ){
        mensajesError.push('Ingresa tu nombre');
    }

    if(apellidoP.value === null || nombre.value ==='' ){
        mensajesError.push('Ingresa tu Apellido Paterno');
    }

    if(apellidoM.value === null || nombre.value ==='' ){
        mensajesError.push('Ingresa tu Apellido Materno');
    }

    if(correo.value === null || nombre.value ==='' ){
        mensajesError.push('Ingresa tu Correo');
    }

    if(contra.value === null || nombre.value ==='' ){
        mensajesError.push('Ingresa tu Contraseña');
    }

    error.innerHTML = mensajesError.join(',');

    return false;
}


