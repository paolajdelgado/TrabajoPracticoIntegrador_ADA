
//Trabajo Practico Integrador
// Objetivo
// Desarrollar un sistema de gestión para una biblioteca que permita administrar libros y usuarios, aplicando los conceptos fundamentales
// de JavaScript vistos en el modulo

//1. Estructura de datos

//Objeto "LIBROS"
let libros = [
    { id: 1, titulo: "Los juegos del hambre", autor: "Suzanne Collins" , año: 2008, genero: "Ciencia ficción", disponible: false },
    { id: 2, titulo: "Orgullo y prejuicio", autor: "Jane Austen", año: 1813, genero: "Novela", disponible: false },
    { id: 3, titulo: "Introducción a los algoritmos", autor: "Thomas H. Cormen", año: 1990, genero: "Programación", disponible: true },
    { id: 4, titulo: "Los cuatro acuerdos", autor: "Miguel Ángel Ruiz", año: 1997, genero: "Filosofía", disponible: true },
    { id: 5, titulo: "Emociones que matan: La conexión entre sus emociones y su salud", autor: "Dr. Colbert", año: 2006, genero: "Autoayuda", disponible: false},
    { id: 6, titulo: "La maestría del amor", autor: "Miguel Ángel Ruiz", año: 1999, genero: "Filosofía", disponible: false },
    { id: 7, titulo: "La biblioteca de la medianoche", autor: "Matt Haig", año: 2020, genero: "Fantasía", disponible: false },
    { id: 8, titulo: "Hábitos atómicos", autor: "James Clear", año: 2018, genero: "Autoayuda", disponible: true },
    { id: 9, titulo: "1984", autor: "George Orwell", año: 1949, genero: "Ciencia ficción", disponible: false },
    { id: 10, titulo: "Guía de campo de los tiburones del mundo", autor: "Leonard Compagno", año: 2006, genero: "Biología", disponible: true }
];

//Objeto "USUARIOS"
let usuarios = [
    { id: 1, nombre: "Emma", email: "emma07@mail.com", librosPrestados: [libros[0].id]},
    { id: 2, nombre: "Blanca", email: "Blanca04@mail.com", librosPrestados: [libros[5].id]},
    { id: 3, nombre: "Esteban", email: "este_bandido70@mail.com", librosPrestados: [libros[1].id]},
    { id: 4, nombre: "Ramon", email: "ramon_estrada@mail.com", librosPrestados: [libros[6].id]},
    { id: 5, nombre: "Bernardita", email: "profe_bernie10@mail.com", librosPrestados: [libros[8].id]}
 ];

//console.log(usuarios);

//2. Funciones de gestion de libros (CIELO)
//a)Funcion para Agregar un nuevo libro al array LIBROS

function agregarLibro(id, titulo, autor, anio, genero) {
    libros.push({
        id:id, 
        titulo: titulo, 
        autor: autor, 
        año: anio, 
        genero: genero, 
        disponible: true});
}

// Ejemplo
agregarLibro(11, "El gran Gatsby", "F. Scott Fitzgerald", 1925, "Ciencia ficción");
// console.log(libros)

//b)Funcion para Buscar libros por titulo, autor, genero
function buscarLibros(criterio, valor) {
    let bookFound = []; // Almacena los libros que coincidan con el criterio de busqueda
    for(let i = 0; i < libros.length; i++) {
        if(libros[i][criterio] && libros[i][criterio].toString().toLowerCase() === valor.toLowerCase()) {
            bookFound.push(libros[i]);
        }
    }
    return bookFound;
}

// console.log(buscarLibros("titulo", "1984")); // busqueda por titulo
// console.log(buscarLibros("autor", "Jane Austen")); // busqueda por autor
// console.log(buscarLibros("genero", "Ciencia ficción")); // busqueda por genero

// //c) Funcion para Ordenar libros por titulo o año

function ordenarLibros(criterio) {
    // Recorrer todo el array de libros desde el primer hasta el último elemento
    for (let i = 0; i < libros.length; i++) {
        // Segundo bucle para comparar los elementos adyacentes
        for (let j = 0; j < libros.length - 1; j++) {
            let cambioLibros = false; // Se utiliza esta variable para determinar si los libros seran cambiados por el titulo o el año

            if (criterio === "titulo") {
                // Si el criterio es el titulo se compara en la siguiente linea de codigo, utilizando toLowerCase para comparar mayusculas/minusculas
                if (libros[j].titulo.toLowerCase() > libros[j + 1].titulo.toLowerCase()) {
                    cambioLibros = true;
                }
            } else if (criterio === "año") { // Se compara los años del libro
                if (libros[j].año > libros[j + 1].año) {
                    cambioLibros = true;
                }
            }
            if (cambioLibros) { // Si se cumple la condición se intercambian los libros actuales por los libros que esta por ordenar
                let temp = libros[j];
                libros[j] = libros[j + 1];
                libros[j + 1] = temp;
            }
        }
    }
    return libros;
}

const librosOrdenadosPorTitulo = ordenarLibros("titulo"); // Ordenar por título
//console.log("Orden de libros por medio del titulo", librosOrdenadosPorTitulo);

const librosOrdenadosPorAnio = ordenarLibros("año"); // Ordenar por año
//console.log("Orden de libros por medio del año", librosOrdenadosPorAnio);


//d) Funcion para Eliminar libro

function eliminarLibro(id) {
    // Se crea un nuevo array que excluya al libro con el id especificado
    let newBooks = libros.filter(libro => libro.id !== id);
    // En este bucle se comprueba si el libro fue eliminado
    if (newBooks.length === libros.length) {
        console.log(`Libro con id ${id} no encontrado`);
    } else {
   //     console.log(`Libro con id ${id} eliminado`);
    }
    // Actualizar el array original
    libros.length = 0; // Se vacía el array original
    for (let i = 0; i < newBooks.length; i++) {
        libros.push(newBooks[i]); // Se llena el array original con los nuevos libros
    }
    return libros;
}

eliminarLibro(3); // Elimina el libro con id 3
//console.log(libros);



//3. Gestion de Usuarios (PAOLA)
//a) Funcion para Agregar un nuevo usuario al array USUARIOS

function registrarUsuario(id, nombre, email){usuarios.push({
    id: id,
    nombre : nombre,
    email: email,
    librosPrestados: []
})} ;

//Ejemplo
let nuevoUsuario = registrarUsuario(6, "Ricardo", "ricardo.90@gmail.com");
//console.log(usuarios);


//b)Funcion para Devuelva array completo de usuarios
let mostrarTodosLosUsuarios = [];

for(let i = 0; i < usuarios.length; i++){
    mostrarTodosLosUsuarios.push(usuarios[i].nombre);
}

//console.log(mostrarTodosLosUsuarios);


//c)Funcion para Devuelva información de un usuario dado su email
function buscarUsuario(email) {
    let usuario = usuarios.find(usuario => usuario.email === email);
    return usuario;
}

// Ejemplo
let usuarioEncontrado = buscarUsuario("profe_bernie10@mail.com");
//console.log(usuarioEncontrado);


//d)Funcion para Eliminar un usuario seleccionado





//4. Sistema de Préstamos (CINTHIA)
//a)Funcion para marcar libro disponible y agregar a lista de libros prestados del usuario

//b) Funcion para marcar libro disponible y lo elimine de la lista de libros prestados



//5. Reportes (CINTHIA)
//a) Funcion para genera reportes sobre:

//Cantidad total de libros
const totalLibros = libros.reduce((acumulador, libro) => acumulador + 1, 0);
//console.log("La cantidad total de libros es:", totalLibros);

//Cantidad de libros prestados
let totalLibrosPrestados = 0;
usuarios.forEach(usuario => {
  totalLibrosPrestados += usuario.librosPrestados.length;
});
//console.log("El total de libros prestados es: ", totalLibrosPrestados);

//Cantidad de libros por genero
const librosPorGenero = {};
libros.forEach(libro => {
    if (!librosPorGenero[libro.genero]){
        librosPorGenero[libro.genero] = 1;
    }else{
        librosPorGenero[libro.genero]++;
    }  
});
//console.log("\nLa cantidad de libros por género es:\n", librosPorGenero);

//Libro mas antigua y mas nuevo


//6. Identificacion avanzada de libros (PAOLA)
//a) Funcion para identificar y mostrar libros que contienen mas de 1 palabra

function librosConPalabrasEnTitulo(){
    let names = [];

    for (let i=0; i< libros.length; i++){
        let fractura = libros[i].titulo.split(" ");
        //console.log(fractura)
        if(fractura.length > 1){
            names.push(libros[i].titulo);
        }
    }

    return names;
};


//b)Funcion para devolver esos libros y mostrarlo en la consola
let librosNuevo = librosConPalabrasEnTitulo();
//console.log(librosNuevo);




//7. Calculo Estadísticos (CIELO)
//a) Funcion para calcular
//Promedio de años de publicacion de los libros

//Año de publicacion mas frecuente

//Diferencia en años entre libro más antiguo y más nuevo


//8. Manejo de Cadenas (PAOLA-CINTHIA)
//a) Funcion para :
//Convertir todos los titulos a mayusculas
//Formatear emails de los usuarios a minusculas

let libroMayusculas = libros.map(libro => {
    return {
        //agregar lo otros valores del objeto a nuevo array
        ...libro,

        //Convertir todos los titulos a mayusculas
        titulo: libro.titulo.toUpperCase(),

        //Eliminar espacios en blanco al inicio y final de los nombres de autores
        autor: libro.autor.trim()
    };
});

//console.log(libroMayusculas);
//FALTA HACERLO FUNCION 



//9. Interfaz usuario por Consola (TODAS)
//a)Funcion para mostrar menu de opciones al usuario y permita interactuar con el sistema utilizando prompt()


//b)Menu debe incluir opciones para todas las funcionalidades anteriores. Usar estructuras de control (if - switch - ciclos // de preferencia SWITCH)