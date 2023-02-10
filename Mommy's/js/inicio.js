/*Primera Entrega*/

let costo= 0
let costoTotal= costo * .16 + costo
let pastel= prompt("Ingresa el nombre de los pasteles que desees ordenar (Escribe salir para dejar de ordenar)");
    

if (pastel === "salir"){
    alert("Bienvenido")
} else if (pastel === "Pay de fresa"){
    costo= 500;
} else if (pastel === "Pay de mango"){
    costo= 270;
} else if (pastel === "Pay de fresa mediano"){
    costo= 150;
} else if (pastel === "Pastel  cruz   azul" || pastel === "Pastel infantil" || pastel === "Pastel personalizado"){
    costo= 400;
} 
alert (costoTotal= ("Total a pagar= $" + (costo * .16 + costo)));
console.log (costoTotal);


//  function precioDelProducto (){

// let precio= prompt("ingresar precio");
// let total= 0;

//     while(precio !== "salir"){
//         precio= parseInt(precio);
//         total = total + precio;
//         precio= prompt("Ingrese un precio nuevo");
        
//     }
//     return total;

//  }
// const totalProductos=
// precioDelProducto();
//  console.log(totalProductos);



class Producto{
    constructor(pastel, cantidad, precio){
        this.pastel= pastel.toUpperCase();
        this.cantidad= parseInt(cantidad);
        this.precio= parseFloat(precio);
        this.vendido= false;
        this.total= 0;
    }
    sumaIva(){
        this.precio = this.precio * .16 + this.precio;
    }
}
const pasteles=[];
pasteles.push(new Producto("Pay de fresa", 1, 500));
pasteles.push(new Producto("Pay de mango", 1, 270));
pasteles.push(new Producto("pastel de fresa", 1, 150));
pasteles.push(new Producto("Pastel cruz azul", 1, 400));
pasteles.push(new Producto("Pastel Personalizdo", 1, 400))

function total(){
    for (const producto of pasteles ){
        producto.sumaIva();
        producto.total = producto.precio * producto.cantidad;
        producto.vendido = true;
    }
}

total();

console.log(pasteles);

