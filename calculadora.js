//aca requiero todos los modulos
let sumar = require("./sumar.js");
let restar = require('./restar.js');
let dividir = require('./dividir.js');
let multiplicar = require('./multiplicar.js');
//console.log(sumar(2,4)) prueba de calculos
//console.log(restar(2,4)) prueba de calculos

//llamo a process y asigno las variables que voy a utilizar en la terminal para llevar a cabo el uso de la calculadora
const process = require("process");
let operacion = process.argv[3]
let numero1 = Number(process.argv[2])
let numero2 = Number(process.argv[4])



//guardo todos los metodos en una constante para usar luego
const operaciones = {
    mas :  sumar,
    menos : restar,
    por: multiplicar,
    dividido: dividir
}


//aca valido que los parametros de numeros esten validados y efectivamente sean del tipo number
const validar_que_sea_numero = (numero1,numero2) => {
    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        return "Esta mal uno de los numeros ingresados"
    }
}

//aca valido que la operacion que teclee la persona en la terminal exista y se pueda ejecutar
const validar_que_operacion_exista = (operacion) => {
    if (!operaciones[operacion]){
        return "Esta mal la operacion!"
    }

}


//en esta constante uso las dos validaciones anteriores y acumulo los errores en un array, para asi poder luego devolver la cantidad de errores que hayan
const validar= (numero1,numero2,operacion) =>{
    let errores = [validar_que_sea_numero(numero1,numero2),validar_que_operacion_exista(operacion)]
    const mensaje_error= errores.filter(error=>(error)).join(",")
    return mensaje_error
}



//la constante calculadora ejecuta las validaciones y hace las operaciones que corresponda 
const calculadora= {
    ejecutar: (numero1,operacion,numero2) => { 
        const error_de_validacion = validar(numero1,numero2,operacion)
        if (!error_de_validacion) {
            return operaciones[operacion](numero1,numero2)
        }
        return error_de_validacion
    }
}

//la ejecucion final de la calculadora que llama a la variable y ejecuta los metodos y validaciones correspondientes
console.log(calculadora.ejecutar(numero1,operacion,numero2))

