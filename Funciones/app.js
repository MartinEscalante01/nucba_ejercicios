function nombreCompleto(nombre,apellido){
    console.log(`${nombre} ${apellido}`)
}

// nombreCompleto("martin","escalante")




let dato = true;
let valor1 = 2
let valor2 = "hola"

function isTrue(dato){
    // if(typeof(dato) === 'boolean'){
    //     console.log(`si es booleano ${dato}`);
    // }else console.log("no es booleano")

    return typeof(dato) === 'boolean'
}

// console.log(isTrue(dato))


let pizza = ["agua","aceitunas","queso","tomate","anchoas","levadura","morron","cebolla","huevo","salame"]
let pares = []
let impares = []

function Pizza(array,pares,impares){
    pares = []
    impares = []
    
    for(let i = 0; i<array.length; i++){
        if(array[i].length % 2 == 0)
            pares.push(array[i])
            else {
                impares.push(array[i])
            }
}
console.log(pares)
console.log(impares)


}
Pizza(pizza,pares,impares)
