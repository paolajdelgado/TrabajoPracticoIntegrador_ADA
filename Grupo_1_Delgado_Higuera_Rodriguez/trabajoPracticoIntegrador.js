
//Trabajo Practico Integrador

//1. Estructura de datos

//Objeto "LIBROS"
let libros = [
    { id: 1, titulo: "Los juegos del hambre", autor: "Suzanne Collins" , año: 2008, genero: "Ciencia ficción", disponible: true },
    { id: 2, titulo: "Orgullo y prejuicio", autor: "Jane Austen", año: 1813, genero: "Novela", disponible: false },
    { id: 3, titulo: "Introducción a los algoritmos", autor: "Thomas H. Cormen", año: 1990, genero: "Programacion", disponible: true },
    { id: 4, titulo: "Los cuatro acuerdos", autor: "Miguel Ángel Ruiz", año: 1997, genero: "Filosofía", disponible: true },
    { id: 5, titulo: "Emociones que matan: La conexión entre sus emociones y su salud", autor: "Dr. Colbert", año: 2006, genero: "Autoayuda", disponible: false},
    { id: 6, titulo: "La maestría del amor", autor: "Miguel Ángel Ruiz", año: 1999, genero: "Filosofía", disponible: false },
    { id: 7, titulo: "La biblioteca de la medianoche", autor: "Matt Haig", año: 2020, genero: "", disponible: false },
    { id: 8, titulo: "Hábitos atómicos", autor: "James Clear", año: 2018, genero: "Autoayuda", disponible: true },
    { id: 9, titulo: "1984", autor: "George Orwell", año: 1949, genero: "Ciencia ficción", disponible: false },
    { id: 10, titulo: "Guía de campo de los tiburones del mundo", autor: "Leonard Compagno", año: 2006, genero: "Biología", disponible: true }
];

//Objeto "USUARIOS"
let usuarios = [
    { id: 1, nombre: "Emma", email: "emma07@mail.com", librosPrestados: [2, 5]},
    { id: 2, nombre: "Blanca", email: "Blanca04@mail.com", librosPrestados: [6]},
    { id: 3, nombre: "Esteban", email: "este_bandido70@mail.com", librosPrestados: [7]},
    { id: 4, nombre: "Ramon", email: "ramon_estrada@mail.com", librosPrestados: 0 },
    { id: 5, nombre: "Bernardita", email: "profe_bernie10@mail.com", librosPrestados: 9 }
];

console.log(usuarios);

//2. Funciones de gestion de libros (CIELO)
//a)Funcion para Agregar un nuevo libro al array LIBROS

//b)Funcion para Buscar libros por titulo, autor, genero

//c) Funcion para Ordenar libros por titulo o año

//d) Funcion para Eliminar libro



//3. Gestion de Usuarios (PAOLA)
//a) Funcion para Agregar un nuevo usuario al array USUARIOS

//b)Funcion para Devuelva array completo de usuarios

//c)Funcion para Devuelva información de un usuario dado su email

//d)Funcion para Eliminar un usuario seleccionado



//4. Sistema de Préstamos (CINTHIA)
//a)Funcion para marcar libro disponible y agregar a lista de libros prestados del usuario

//b) Funcion para marcar libro disponible y lo elimine de la lista de libros prestados



//5. Reportes (CINTHIA)
//a) Funcion para genera reportes sobre:
//Cantidad total de libros
//Cantidad de libros prestados
//Cantidad de libros por genero
//Libro mas antigua y mas nuevo


//6. Identificacion avanzada de libros (PAOLA)
//a) Funcion para identificar y mostrar libros que contienen mas de 1 palabra

//b)Funcion para devolver esos libros y mostrarlo en la consola


//7. Calculo Estadísticos (CIELO)
//a) Funcion para calcular
//Promedio de años de publicacion de los libros

//Año de publicacion mas frecuente

//Diferencia en años entre libro más antiguo y más nuevo


//8. Manejo de Cadenas (PAOLA-CINTHIA)
//a) Funcion para :
//Convertir todos los titulos a mayusculas
//Eliminar espacios en blanco al inicio y final de los nombres de autores
//Formatear emails de los usuarios a minusculas



//9. Interfaz usuario por Consola (TODAS)
//a)Funcion para mostrar menu de opciones al usuario y permita interactuar con el sistema utilizando prompt()

//b)Menu debe incluir opciones para todas las funcionalidades anteriores. Usar estructuras de control (if - switch - ciclos // de preferencia SWITCH)