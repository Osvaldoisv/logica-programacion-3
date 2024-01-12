// para comentar todo: Ctrl + K + C
// para descomentar: Ctrl + K + U

// print("------------FACTORIAL DE NUMEROS")
// num3 = int(input("Ingrese un numero: "))

// for n in range(num3-1, 1, -1):
//     num3 = num3 * n
// print(num3)

// traducir desde python a javascript



console.log("Factorial de Numeros");

// activar = document.getElementById("botonActivacion");
// console.log(activar)

let resultado = document.getElementById("resultado");

function obtenerFactorial(){
    let num3 = parseInt(document.getElementById("Entrada").value);
    if (!isNaN(num3)){
        if (num3 <= 0){
            resultado.innerHTML = `No puede ser menor o igual que 0`;
        } else {
            for (let n = num3 - 1; n >= 1; --n){
                num3 = num3 * n;
            }
            console.log(num3)
            resultado.innerHTML = "Resultado: " + num3;
        }
    }
    else {
        console.log("No ingresó un numero")
        resultado.innerHTML = "No ingresó un numero";
    }
}
