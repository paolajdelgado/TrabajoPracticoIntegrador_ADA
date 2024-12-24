
//Trabajo Practico Integrador
// Objetivo:
// Desarrollar un sistema de gestión para una biblioteca que permita administrar libros y usuarios, aplicando los conceptos fundamentales
// de JavaScript vistos en el modulo

//1. Estructura de datos

//Objeto "LIBROS"
let libros = [
    { id: 1, titulo: "Los juegos del hambre", autor: "Suzanne Collins" , año: 2008, genero: "Ciencia ficción", disponible: false },
    { id: 2, titulo: "Orgullo y prejuicio", autor: "Jane Austen", año: 1813, genero: "Novela", disponible: false },
    { id: 3, titulo: "Introducción a los algoritmos", autor: "Thomas H. Cormen", año: 1990, genero: "Programación", disponible: true },
    { id: 4, titulo: "Los cuatro acuerdos", autor: "Miguel Ángel Ruiz", año: 1997, genero: "Filosofía", disponible: true },
    { id: 5, titulo: "Emociones que matan: La conexión entre sus emociones y su salud", autor: "Dr. Colbert", año: 2006, genero: "Autoayuda", disponible: true},
    { id: 6, titulo: "La maestría del amor", autor: "Miguel Ángel Ruiz", año: 1999, genero: "Filosofía", disponible: false },
    { id: 7, titulo: "La biblioteca de la medianoche", autor: "Matt Haig", año: 2020, genero: "Fantasía", disponible: false },
    { id: 8, titulo: "Hábitos atómicos", autor: "James Clear", año: 2018, genero: "Autoayuda", disponible: true },
    { id: 9, titulo: "1984", autor: "George Orwell", año: 1949, genero: "Ciencia ficción", disponible: false },
    { id: 10, titulo: "Guía de campo de los tiburones del mundo", autor: " Leonard Compagno ", año: 2006, genero: "Biología", disponible: true }
];

//Objeto "USUARIOS"
let usuarios = [
    { id: 1, nombre: "Emma", email: "Emma07@mail.com", librosPrestados: [libros[0].id]},
    { id: 2, nombre: "Blanca", email: "Blanca04@mail.com", librosPrestados: [libros[5].id]},
    { id: 3, nombre: "Esteban", email: "Este_bandido70@mail.com", librosPrestados: [libros[1].id]},
    { id: 4, nombre: "Ramon", email: "Ramon_estrada@mail.com", librosPrestados: [libros[6].id]},
    { id: 5, nombre: "Bernardita", email: "Profe_bernie10@mail.com", librosPrestados: [libros[8].id]}
];



//2. Funciones de gestion de libros 
//a)Función para Agregar un nuevo libro al array LIBROS

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

//b)Función para Buscar libros por título, autor, género
function buscarLibros(criterio, valor) {
    let bookFound = []; // Almacena los libros que coincidan con el criterio de busqueda
    for(let i = 0; i < libros.length; i++) {
        if(libros[i][criterio] && libros[i][criterio].toString().toLowerCase() === valor.toLowerCase()) {
            bookFound.push(libros[i]);
        }
    }
    return bookFound;
}

// console.log(buscarLibros("titulo", "1984")); // busqueda por título
// console.log(buscarLibros("autor", "Jane Austen")); // busqueda por autor
// console.log(buscarLibros("genero", "Ciencia ficción")); // busqueda por género

// //c) Función para Ordenar libros por título o año

function ordenarLibros(criterio) {
    // Recorrer todo el array de libros desde el primer hasta el último elemento
    for (let i = 0; i < libros.length; i++) {
        // Segundo bucle para comparar los elementos adyacentes
        for (let j = 0; j < libros.length - 1; j++) {
            let cambioLibros = false; // Se utiliza esta variable para determinar si los libros seran cambiados por el título o el año

            if (criterio === "titulo") {
                // Si el criterio es el título se compara en la siguiente linea de codigo, utilizando toLowerCase para comparar mayúsculas/minúsculas
                if (libros[j].titulo.toLowerCase() > libros[j + 1].titulo.toLowerCase()) {
                    cambioLibros = true;
                }
            } else if (criterio === "año") { // Se compara los años del libro
                if (libros[j].año > libros[j + 1].año) {
                    cambioLibros = true;
                }
            }
            if (cambioLibros) { // Si se cumple la condición se intercambian los libros actuales por los libros que está por ordenar
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


//d) Función para Eliminar libro
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



//3. Gestión de Usuarios 
//a) Función para Agregar un nuevo usuario al array USUARIOS
function registrarUsuario(nombre, email){
  //Crear contador para comparar el número máximo del ID
  let maxID = 0

  //Iterar sobre todos los números de ID disponibles en el catalogo de usuario
  for (let i=0; i< usuarios.length; i++) {

    //Encontrar el número máximo de ID comparando en cada iteracion
      if (usuarios[i].id > maxID) {
        //Guardar el número más grande de usuario ID
          maxID = usuarios[i].id;
      }
  }
  
  usuarios.push({
       id: maxID + 1,
      nombre : nombre,
      email: email,
      librosPrestados: []
})} ;

//Ejemplo
registrarUsuario("Ricardo", "ricardo.90@mail.com");
//console.log(usuarios);


//b)Función que Devuelva array completo de usuarios
//Array vacío para resguardar solo los nombres de los usuarios
let mostrarTodosLosUsuarios = [];

//Bucle para agregar solo los nombres de los usuarios a un array nuevo
for(let i = 0; i < usuarios.length; i++){
    mostrarTodosLosUsuarios.push(usuarios[i].nombre);
}

//console.log(mostrarTodosLosUsuarios);


//c)Función que Devuelva información de un usuario dado su email
function buscarUsuario(email) {
    let usuario = usuarios.find(usuario => usuario.email === email);
    return usuario;
}

// Ejemplo
let usuarioEncontrado = buscarUsuario("profe_bernie10@mail.com");
//console.log(usuarioEncontrado);


//d)Función para Eliminar un usuario seleccionado
function borrarUsuario(nombre, email) {
  // Se crea un nuevo array que excluya al usuario con el nombre y email correspondiente
  let nameUsers = usuarios.filter(usuario => usuario.nombre !== nombre);
  let emailUsers = usuarios.filter(usuario => usuario.email !== email);
  // En este bucle se comprueba si el usuario fue eliminado
  if (nameUsers.length === usuarios.length && emailUsers.length === usuarios.length) {
      console.log(`Usuario con nombre ${nombre} y email ${email} no encontrado`);
  } else {
      console.log(`Usuario con nombre ${nombre} y email ${email} eliminado`);
  }
  // Actualizar el array original
  usuarios.length = 0; // Se vacía el array original
  for (let i = 0; i < nameUsers.length; i++) {
      usuarios.push(nameUsers[i]); // Se actualiza el array, eliminando el usuario seleccionado
  }
  return usuarios;
}

//Ejemplo
//borrarUsuario("Emma", "emma07@mail.com"); // Elimina el usuario con dicho nombre y email
//console.log(usuarios);




//4. Sistema de Préstamos
//a)Función para marcar libro disponible y agregar a lista de libros prestados del usuario
function prestarLibro(idLibro, idUsuario) {

    // Buscamos el libro con el ID proporcionado
    const libro = libros.find(libro => libro.id === idLibro);

    // Buscamos el usuario con el ID proporcionado
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
  
    // Verificamos si el libro existe 
    if (!libro) {
      console.log("El libro buscado no existe");
      return;
    }

    //Verificamos si el usuario existe
    if (!usuario) {
      console.log("El usuario buscado no existe");
      return;
    }

    // Verificamos si el libro está disponible
    if (!libro.disponible) {
      console.log (`El libro "${libro.titulo}" ya está prestado a otro usuario.`);
      return;
    }

    // Marcamos el libro prestado como no disponible y se agrega a la propiedad de librosPrestados del usuario
    libro.disponible = false;
    usuario.librosPrestados.push(libro.id);
  
    console.log(`El libro "${libro.titulo}" ha sido prestado a ${usuario.nombre}.`);
  }

    //Llamamos a la función (En este caso elegimos el libro id:10 y el usuario id:4)
   //prestarLibro(10,4);

    //Se imprime el resultado
    //console.log("\nSe actualizan los listados después de verificar el prestamo del nuevo libro al usuario\n");
    //console.log("\nLa lista actual de los usuarios en relación a libros prestados es:\n", usuarios);
    //console.log("\nLa disponibilidad de los libros actual es:\n", libros);

//b) Funcion para marcar libro disponible y lo elimine de la lista de libros prestados
function devolverLibro(idLibro, idUsuario) {

  //Buscamos el libro
  const libro = libros.find(libro => (libro.id) === idLibro);

  //Buscamos el usuario
  const usuario = usuarios.find(usuario => (usuario.id) === idUsuario);

  //Verificamos si el libro esta prestado al usuario
  const indice = usuario.librosPrestados.indexOf((libro.id));
  if (indice === -1) {
    console.log("El libro buscado no está prestado para este usuario");
    return;
  }

  //Eliminamos el libro de librosPrestados
  usuario.librosPrestados.splice(indice, 1);

  //Marcamos el libro como disponible
  libro.disponible = true;
  console.log(`El usuario ${usuario.nombre} ha devuelto el libro "${libro.titulo}" (ID: ${libro.id}).`);
    };
  
    //Llamamos a la función (En este caso elegimos el libro id:7 y el usuario id:4)
   //devolverLibro(7, 4) 

//Mostramos en consola las actualizaciones de los arrays    
//console.log("\nSe actualizan los listados después de verificar el retorno del libro prestado al usuario\n");
//console.log("\nEstado actual de prestamos a los usuarios:\n", usuarios);
//console.log("\nDisponibilidad actual de los libros:\n", libros);




//5. Reportes 
//a) Función para genera reportes sobre:
function generarReporteLibros(libros) {
    // Cantidad total de libros
    const totalLibros = libros.length;
  
    // Cantidad de libros prestados
    const totalPrestados = libros.filter(libro => !libro.disponible).length;
  
    // Cantidad de libros por género
    const librosPorGenero = libros.reduce((acum, libro) => {
      if (!acum[libro.genero]) {
        acum[libro.genero] = 1;
      } else {
        acum[libro.genero]++;
      }
      return acum;
    }, {});
  
    // Libro más antiguo
    const libroMasAntiguo = libros.reduce((antiguo, nuevo) => antiguo.año < nuevo.año ? antiguo : nuevo);
  
    // Libro más nuevo
    const libroMasNuevo = libros.reduce((antiguo, nuevo) => antiguo.año > nuevo.año ? antiguo : nuevo);

    //Generamos el reporte
    const reporte = {
        totalLibros,
        totalPrestados,
        librosPorGenero,
        libroMasAntiguo,
        libroMasNuevo
      };
    
      return reporte;
    }
    
    // Llamar a la función 
    const reporte = generarReporteLibros(libros);
    
    // Se imprimen resultados
//console.log("\nEl total de los libros es: ", reporte.totalLibros);

//console.log("\nEl total de los libros prestados es: ", reporte.totalPrestados);

//console.log("\nLa cantidad de libros por género es:\n", reporte.librosPorGenero);

//console.log("\nEl el libro más antiguo es:\n ", reporte.libroMasAntiguo);

//console.log("\nEl el libro más nuevo es:\n ", reporte.libroMasNuevo);




//6. Identificación avanzada de libros 
//a) Función para identificar y mostrar libros que contienen más de 1 palabra
function librosConPalabrasEnTitulo(){
  //Array vacío que va a contener los nombres que cumplan con la condición
  let names = [];

    //Bucle for para iterar entre los libros 
  for (let i=0; i< libros.length; i++){

    //Expresión regular para indicarle que solo contemple los nombres que contengan letras. 
    //Sin considerar números ni otros caracteres
    if(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(libros[i].titulo)){
      
      //Dividir los nombres entre palabras separadas por un espacio
      let fractura = libros[i].titulo.split(" ");
      
      //Si el nombre se dividió en 1 o más palabras
      if(fractura.length > 1){
        //agregar el nombre del libro que cumpla con la condición al nuevo array vacío
        names.push(libros[i].titulo);
      }
    }
  }

  //mostrar los nombres que se clasificaron en el array
  return names;
};

//b)Función para devolver esos libros y mostrarlo en la consola
let librosNuevo = librosConPalabrasEnTitulo();
//console.log(librosNuevo);




// 7. Cálculo Estadísticos 
// a) Función para calcular
// Promedio de años de publicación de los libros
function calcularPromedioAnios(libros) {
  // Sumar todos los años de publicación
  const totalAnios = libros.reduce((sum, libro) => sum + libro.año, 0);
  // Calcular el promedio
  return totalAnios / libros.length;
}

// Función para encontrar el año de publicación más frecuente
function anioMasFrecuente(libros) {
  const frecuencias = {};

  // Calcular las frecuencias de cada año
  libros.forEach(libro => {
    const anio = libro.año;
    if (frecuencias[anio]) {
      // Si el año ya está en el objeto de frecuencias, se incrementa el contador
      frecuencias[anio]++;
    } else {
      // Si el año no está en el objeto de frecuencias, se incializa el contador
      frecuencias[anio] = 1;
    }
  });

  // Encontrar el año con la mayor frecuencia usando Object.entries y reduce
  const [anioFrecuente] = Object.entries(frecuencias).reduce((max, [anio, frecuencia]) => {
    // En esta parte se compara la frecuencia actual con la mayor frecuencia encontrada hasta el momento
    return frecuencia > max[1] ? [anio, frecuencia] : max;
  }, [null, 0]);

  return anioFrecuente;
}

// Diferencia en años entre libro más antiguo y más nuevo
function diferenciaEnAnios(libros) {
  if (libros.length === 0) {
    return 0; // Si no hay libros, la diferencia es cero
  }
  let anioMin = libros[0].año;
  let anioMax = libros[0].año;
  // Recorre todos los libros hasta encontrar el año máximo y mínimo
  libros.forEach(libro => {
    if (libro.año < anioMin) {
      anioMin = libro.año;
    }
    if (libro.año > anioMax) {
      anioMax = libro.año;
    }
  });
  return anioMax - anioMin;
}

// Función para calcular y mostrar las estadísticas
function calcularEstadisticas(libros) {
  // Variable para guardar el promedio de los años de publicacion
  const promedio = calcularPromedioAnios(libros);
  // Variable para guardar el año más frecuente de la publicación del libro
  const anioFrecuente = anioMasFrecuente(libros);
  // Variable para guardar la diferencia en años entre el libro más antiguo y el más nuevo
  const diferencia = diferenciaEnAnios(libros);
  
  return {
    promedio: promedio,
    anioFrecuente: anioFrecuente,
    diferencia: diferencia
  };
}

function mostrarEstadisticas(estadisticas) {
  console.log("\n--- Estadísticas de Libros ---");
  console.log(`Promedio de años de publicación: ${estadisticas.promedio.toFixed(2)}`);
  console.log(`Año de publicación más frecuente: ${estadisticas.anioFrecuente}`);
  console.log(`Diferencia en años entre el libro más antiguo y el más nuevo: ${estadisticas.diferencia}`);
  console.log("-----------------------------\n");
}

const estadisticas = calcularEstadisticas(libros);
//mostrarEstadisticas(estadisticas);

// console.log(Promedio de años de publicación: ${promedio});
// console.log(Año de publicación más frecuente: ${anioFrecuente});
// console.log(Diferencia en años entre el libro más antiguo y el más nuevo: ${diferencia});




//8. Manejo de Cadenas 
//a) Función para :
function normalizarDatos(libros, usuarios) {

//Convertir todos los títulos a mayúsculas.
    libros.forEach(libro => {
      libro.titulo = libro.titulo.toUpperCase();
    });
  
 // Eliminar espacios en blanco al inicio y al final de los nombres de los autores
    libros.forEach(libro => {
      libro.autor = libro.autor.trim();
    });
  
 // Formatear emails de los usuarios a minúsculas
    usuarios.forEach(usuario => {
      usuario.email = usuario.email.toLowerCase();
    });
  };
  
// Llamar a la función con los datos
  normalizarDatos(libros, usuarios);

//Imprimiendo en consola el resultado
//console.log("\nSe cambiaron los títulos a mayúsculas, se eliminaron espacios en blanco al inicio y al final del nombre de los autores\n", libros);
//console.log("\nSe cambiaron los correos a minúsculas\n", usuarios);




// //9. Interfaz usuario por Consola 
// //a)Función para mostrar menú de opciones al usuario y permita interactuar con el sistema utilizando prompt()
const prompt = require('prompt-sync')(); 
// //Declaramos la función
function menuPrincipal() {
    let opcion;
  //Utilizamos ciclo Do While para crear el bucle
    do {
      opcion = prompt("Menú Principal\n\n" +
        "1. Prestar libro\n" +
        "2. Devolver libro\n" +
        "3. Ver lista de libros\n" +
        "4. Ver lista de usuarios\n" +
        "5. Estadísticas de los libros\n" +
        "6. Salir\n\n" +
        "Ingrese su opción:");

// b)El menú debe incluir opciones para todas las funcionalidades anteriores. Usar estructuras de control (if - switch - ciclos // de preferencia SWITCH)
    switch (opcion) {
    case "1":
      let idLibroPrestar = parseInt(prompt("Ingrese el ID del libro a prestar: "));
      let idUsuarioPrestar = parseInt(prompt("Ingrese el ID del usuario: "));
      prestarLibro(idLibroPrestar, idUsuarioPrestar);
      break;
    case "2":
      let idLibroDevolver = parseInt(prompt("Ingrese el ID del libro a devolver: "));
      let idUsuarioDevolver = parseInt(prompt("Ingrese el ID del usuario: "));
      devolverLibro(idLibroDevolver, idUsuarioDevolver);
      break;
    case "3":
      console.log("Lista de libros:");
      console.log(libros);
      break;
    case "4":
      console.log("Lista de usuarios:");
      console.log(usuarios);
      break;
    case "5":
      console.log(mostrarEstadisticas(estadisticas));
      break;
    case "6":
      console.log("Saliendo del sistema");
      break;
    default:
      console.log("Opción inválida. Por favor, intente de nuevo.");
  }
//Cierra el cliclo Do While
} while (opcion !== "6");
}

// LLamamos a la función
//menuPrincipal()