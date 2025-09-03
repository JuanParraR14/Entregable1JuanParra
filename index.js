class objeto {
   constructor(id, nombre, precio) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
   }

   objetos_supermercado() {
      return "Id: " + this.id + " Nombre: " + this.nombre + ". Precio: COP " + this.precio;
   }
}

// Lista de productos disponibles
let array_objetos = [];
array_objetos.push(
   new objeto(1, "Papas Fritas", 11500), 
   new objeto(2, "Botella de Agua", 2400),
   new objeto(3, "Botella de Gaseosa", 2300),
   new objeto(4, "Galletas", 1900),
   new objeto(5, "Gomas Trululu", 3300),
   new objeto(6, "Pan", 4000),
   new objeto(7, "Botella de Energizante", 3500),
   new objeto(8, "Bolsa de Leche", 5650)
);

let carrito = [];

// Agregar producto al carrito
function carro_de_compra () {
   let añadir = parseInt(prompt("Escriba el id del objeto que quiere agregar a su carrito:"));

   let producto = array_objetos.find(obj => obj.id === añadir);

   if (producto) {
      carrito.push(producto);
      alert("Se añadió al carrito: " + producto.nombre);
   } else {
      alert("No existe un producto con ese ID");
   }
}

// Mostrar carrito actual
function mostrar_carrito() {
   if (carrito.length === 0) {
      return "Tu carrito está vacío.";
   } else {
      let productos = "";

      for (let i = 0; i < carrito.length; i++) {
         productos += "\n" + carrito[i].objetos_supermercado();
      }
      return productos;
   }
}

// Sumar total de los productos
function total_carrito () {
   let total = 0;

   for (let i = 0; i < carrito.length; i++) {
      total += carrito[i].precio;
   }

   return total;
}

// Mostrar todos los productos
function mostrar_objetos () {
   let objetos = "";

   for (let i = 0; i < array_objetos.length; i++) {
      objetos += "\n" + array_objetos[i].objetos_supermercado();
   }

   return objetos;
}

// Menú principal
function menu () {
   let respuesta = prompt("Bienvenido a supermercados reshipi ¿Que quiere hacer hoy? \n 1. Ver los productos disponibles. \n 2. Agregar objetos al carrito. \n 3. Ver carrito actual. \n 4. Ver total de mi carrito. \n 5. Salir del menú.");

   if (respuesta == "1") {
      alert("Los objetos del supermercado son: " + mostrar_objetos());
   } else if (respuesta == "2") {
      carro_de_compra();
   } else if (respuesta == "3") {
      alert("Tu carrito actual es: " + mostrar_carrito());
   } else if (respuesta == "4") {
      alert("El total de tu carrito de compras es: " + total_carrito());
   }

   return respuesta;
}

let respuesta = true;
while (respuesta != "5" && respuesta) {
   respuesta = menu();
}
