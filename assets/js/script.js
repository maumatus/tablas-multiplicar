//Inicio
//Se valida numero con el metodo input:number de html y a la vez se define el limite 1-20 ahi mismo. 
alert("Hola, ingresa un número entre 1 y 20 para calcular las tablas. Si ingresas una letra o un número fuera de ese rango, el programa no te dejará!!! ");


function funcionMult() {
    
    
    //esta parte toma el valor desde el html y lo pone en variable "a". Lo ejecuta un boton en html.
    let a = parseFloat(document.getElementById("txt1").value);

    console.log(" ")
    console.log("Inicio de tabla del 1 hasta la del " + (a) + " "+ ":)")
    console.log(" ")
    
    for(tabla =1; tabla<=a;tabla++){
        for(n =1; n <= 10; n++){
            console.log(`${tabla} X ${n} = ${tabla*n}`)
        }
        console.log(" ");
    }

    console.log(" ")
    console.log("Ánimo Titines ;)")
    console.log(" ")
};


//Fin


