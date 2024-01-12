// para comentar todo: Ctrl + K + C
// para descomentar: Ctrl + K + U

// print("------------FACTORIAL DE NUMEROS")
// num3 = int(input("Ingrese un numero: "))

// for n in range(num3-1, 1, -1):
//     num3 = num3 * n
// print(num3)

// traducir desde python a javascript

console.log("Factorial de Numeros");
num3 = parseInt(prompt("Ingrese un numero: "));

for (let n = num3 - 1; n >= 1; --n){
    console.log(n);
    num3 = num3 * n;
}

console.log(num3)