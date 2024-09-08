// Problema 1: Tabla de cuadrados y cubos
function generarTablaCuadradosCubos() {
    const numero = parseInt(prompt("Introduce un número para la tabla de cuadrados y cubos: "));
    if (!isNaN(numero)) {
        let tablaHTML = "<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";
        for (let i = 1; i <= numero; i++) {
            tablaHTML += `<tr><td>${i}</td><td>${i**2}</td><td>${i**3}</td></tr>`;
        }
        tablaHTML += "</table>";
        document.getElementById("tabla-cuadrados-cubos").innerHTML = tablaHTML;
    } else {
        document.getElementById("tabla-cuadrados-cubos").innerHTML = "Por favor, introduce un número válido.";
    }
}

// Problema 2: Suma de números aleatorios
function verificarSumaNumerosAleatorios() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const suma = num1 + num2;

    const inicio = new Date();

    const respuesta = parseInt(prompt(`¿Cuál es el resultado de ${num1} + ${num2}?`));

    const fin = new Date();
    const tiempo = (fin - inicio) / 1000; // tiempo en segundos

    if (respuesta === suma) {
        document.getElementById("suma-numeros-aleatorios").innerHTML = `Correcto, el resultado es ${suma}. Tiempo: ${tiempo} segundos.`;
    } else {
        document.getElementById("suma-numeros-aleatorios").innerHTML = `Incorrecto, el resultado es ${suma}. Tiempo: ${tiempo} segundos.`;
    }
}

// Problema 3: Contador de valores en un arreglo
function mostrarContadorArreglo() {
    function contador(arr) {
        let negativos = 0;
        let ceros = 0;
        let positivos = 0;

        for (let num of arr) {
            if (num < 0) {
                negativos++;
            } else if (num === 0) {
                ceros++;
            } else {
                positivos++;
            }
        }

        return { negativos, ceros, positivos };
    }

    const arregloPrueba = [-3, 0, 1, -5, 2, 0, 7];
    const resultado = contador(arregloPrueba);
    console.assert(resultado.negativos === 2, "Error en negativos");
    console.assert(resultado.ceros === 2, "Error en ceros");
    console.assert(resultado.positivos === 3, "Error en positivos");

    document.getElementById("contador-arreglo").innerHTML = `Arreglo: ${arregloPrueba}<br>Negativos: ${resultado.negativos}, Ceros: ${resultado.ceros}, Positivos: ${resultado.positivos}`;
}

// Problema 4: Promedios de una matriz
function mostrarPromediosMatriz() {
    function promedios(matriz) {
        return matriz.map(fila => {
            const suma = fila.reduce((acc, val) => acc + val, 0);
            return suma / fila.length;
        });
    }

    const matrizPrueba = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const resultado = promedios(matrizPrueba);
    console.assert(resultado[0] === 2, "Error en el primer promedio");
    console.assert(resultado[1] === 5, "Error en el segundo promedio");
    console.assert(resultado[2] === 8, "Error en el tercer promedio");

    document.getElementById("promedios-matriz").innerHTML = `Matriz: ${JSON.stringify(matrizPrueba)}<br>Promedios: ${resultado}`;
}

// Problema 5: Inverso de un número
function mostrarInversoNumero() {
    function inverso(numero) {
        return parseInt(numero.toString().split('').reverse().join('')) * Math.sign(numero);
    }

    const numeroPrueba = 12345;
    const resultado = inverso(numeroPrueba);
    console.assert(resultado === 54321, "Error en inverso positivo");

    const numeroNegativoPrueba = -12345;
    const resultadoNegativo = inverso(numeroNegativoPrueba);
    console.assert(resultadoNegativo === -54321, "Error en inverso negativo");

    document.getElementById("inverso-numero").innerHTML = `Número: ${numeroPrueba}, Inverso: ${resultado}<br>Número: ${numeroNegativoPrueba}, Inverso: ${resultadoNegativo}`;
}

// Problema 6: Solución personalizada
function seguimientoLectura() {
    class Libro {
        constructor(titulo, totalPaginas) {
            this.titulo = titulo;
            this.totalPaginas = totalPaginas;
            this.paginasLeidas = 0;
        }

        leer(paginas) {
            this.paginasLeidas += paginas;
            if (this.paginasLeidas > this.totalPaginas) {
                this.paginasLeidas = this.totalPaginas;
            }
        }

        progreso() {
            return `Has leído ${this.paginasLeidas} de ${this.totalPaginas} páginas de "${this.titulo}".`;
        }
    }

    const miLibro = new Libro("El Quijote", 1200);
    miLibro.leer(300);
    console.assert(miLibro.paginasLeidas === 300, "Error en lectura inicial");
    miLibro.leer(500);
    console.assert(miLibro.paginasLeidas === 800, "Error en segunda lectura");
    miLibro.leer(500);
    console.assert(miLibro.paginasLeidas === 1200, "Error en lectura final (exceso)");

    document.getElementById("seguimiento-lectura").innerHTML = miLibro.progreso();
}

// Ejecutar las funciones al cargar la página
window.onload = function() {
    generarTablaCuadradosCubos();
    verificarSumaNumerosAleatorios();
    mostrarContadorArreglo();
    mostrarPromediosMatriz();
    mostrarInversoNumero();
    seguimientoLectura();
};

