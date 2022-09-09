console.log("Hola Marvin")

var num = 30;
console.log("mi edad es " + num)
console.log(num)

var op1 = 2
var op2 = 3

var resultado = op1 + op2

console.log("el resultado es " + resultado)


// condicionales

let miNumero = -1

if(miNumero > 0){
    console.log("el numero es positivo")
}
else if(miNumero == 0){
    console.log("el numero es 0")
}
else{
    console.log("numero es negativo")
}

// bucles

// let contador = 0
// while(contador < 5){
//     console.log(contador)
//     contador = contador + 1
// }

for(let i = 0; i<10; i++){
    console.log(i)
}

function saludar(nombre){
    console.log("hola muchachos, soy "+nombre)
}
saludar("walter");

function multiplicar(num1,num2){
    let resultado = num1 * num2
    return resultado
}
function exponente(resultado){
    cuadrado = resultado * resultado
    return cuadrado
}
let recibidor = exponente(multiplicar(2,5))
console.log("la multiplicacion vale: ", recibidor)

//arreglos o arrays
let miArreglo = ["David", "Fernando", "Kevin", "carla"]

for(i=0;i<4;i++){
    let mostrar = miArreglo[i]
    console.log(mostrar)
}

// objetos

let persona = {
    nombre : "kevin",
    edad : 21,
};
console.log(persona)
persona.comidafavorita = "hamburguesa";
console.log(persona) 