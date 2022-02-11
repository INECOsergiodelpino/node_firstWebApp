//var section = document.querySelector("#id");
//var parrafo = document.createElement("p");
//var texto = createElement


// function leerArchivo(){
//     let fs = require ('fs');
//     let archivo = fs.readFileSync('Temperature.csv', 'utf-8');
//     return archivo
// }

function escribirEnSeccion(text){
    //let data = leerArchivo();
    var parrafo = document.createElement("p");
    parrafo.append(text);
    document.querySelector("#id0").appendChild(parrafo);
}

texto1 = "PRUEBA SCRIPT";
escribirEnSeccion(texto1);