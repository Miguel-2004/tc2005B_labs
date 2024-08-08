console.log("hola mundo");
console.info("esto es informacion importante");
console.warn("cuidado");
console.error("ya te equivocaste");
console.assert(1 == 1);
console.assert(1 == 0);

// variables y constantes

let nombre ='Miguel';
console.log ("Hola " + nombre);
const precio_chilaquiles = 89;

//alcance de las variables

{
    let precio_crema =20;
    console.log(precio_crema);
}


//alert, prompt y confirm

alert(`Los chilaquiles cuestan ${precio_chilaquiles}`);
const chilaquiles_favoritos = prompt("Cuáles son tus chilaquiles favoritos?")
console.log(`Tus chilaquiles favoritos son ${chilaquiles_favoritos}`);

const is_hambre =confirm("Tienes hambre?");

if(is_hambre){
    console.info("Pide unos chilaquiles");
}else{
    console.warn("Regresa cuando tengas hambre ");
}

// funciones tradicionales

function prepar_chilaquiles(){
    console.log(`Preparando orden de chilaquiles ${chilaquiles_favoritos}`);
}

// prepar_chilaquiles(chilaquiles_favoritos);

// funciones modernas
//()Declaración de la función
//{} Resultado de la función

const crema = () => {
    console.log("con crema y aguacate");
}

// crema();

//Configuración de botón preparar chilaquiles

document.getElementById("preparar").onclick= () => {
    prepar_chilaquiles(chilaquiles_favoritos);
    crema();
}

// arreglos

const arreglo = ["Elemento"];

const arreglo2 = new Array()

arreglo.push("Otro elemento");

arreglo[10] = "Uno más"

// arreglos asociativos es un diccionario

arreglo["chilaquil"] = "verde"

for (let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}

//recorrido alternativo del arreglo

for (let posicion in arreglo) {
    console.log(posicion + ":" + arreglo[posicion]);
}

//Objetos
