//Declaración 
class jugadores{
    constructor(jugador, club, nacionalidad, liga, partidos){
        //propiedades 
        this.jugador = jugador,
        this.club = club,
        this.nacionalidad = nacionalidad,
        this.liga =liga 
        this.partidos = partidos
    }
	mostrarDatos(){
        console.log(`El jugador es ${this.autor} su club es ${this.club} y liga ${this.liga}. Los partidos jugados ${this.partidos}`)
    }
    
}

//Instanciación de objetos 
const jugador1= new jugadores("benzema","real", "frances","liga esp", 900,)
const jugador2= new jugadores("raul","real", "frances","liga esp", 900,)
const jugador3= new jugadores("toti","real", "frances","liga esp", 900,)
const jugador4= new jugadores("trest","real", "frances","liga esp", 900,0)
const jugador5 = new jugadores("henry","real", "frances","liga esp", 900,)
const jugador6 = new jugadores("messi","barsa", "frances","liga esp", 900,)


//Cargar array 
const estadisticas = [jugador1,jugador2,jugador3,jugador4,jugador5,jugador6]

//funcion para agregar jugadores
function nuevojugador(){
    let jugadorIngresado = prompt("Ingrese el jugadpr")
    let equipoIngresado = parseInt(prompt("Ingrese equipo"))
    let nacionalidad = prompt("Ingrese el pais del jugador")
    let cantgoles = parseInt(prompt("Ingrese goles"))
    // length dinámica
    let jugadorcreado = new jugadores(estadisticas.length+1,jugadorIngresado, equipoIngresado, nacionalidad , liga)
    console.log(ljugadorcreado)
    //Push de libroCreado al array
    estadisticas.push(jugadorCreado)
}
//mostrar estadisticas

function mostrarestadisticas(){
    alert(`Podrá ver estadisticas en la consola:`)
    //array de objetos
    for(let jugador of "estadisticas"){
        // mi array de objetos
       
    }
    //Otra forma 
    estadisticas.forEach((jugador)=>console.log(`
    ${jugador.liga} de ${jugador.club}, vale ${jugador.nacionalidad}`))
}
function dilanacionalidad(){
    let nacionalidad = prompt("Ingrese el pais del jugador")
	let busqueda = estadisticas.find((el)=> nacionalidad.toLowerCase() == nacionalidad.toLowerCase())
	if(busqueda == undefined){
		console.log("No disponemos de esa informacion")
	}else{
		console.log(`Tenemos el jugador ${busqueda.nacionalidad} perteneciente a ${busqueda.nacionalidad}`)
	}
}

function ordenarPorpatidos(){
    let opcion = prompt(`Ingrese MAYOR para ordenar de mayor a menor
                         Ingrese MENOR para ordenar de menor a mayor
    `)
    if(opcion.toUpperCase() == "MAYOR"){
        console.log(estadisticas.sort((a,b)=> (b.partidos - a.partidos)))
    }
    else if(opcion.toUpperCase() == "MENOR"){
        console.log(estadisticas.sort((a,b)=> (a.partidos - b.partidos)))
        
    }
}
function Buscarjugadorespornombre(){
        let buscado = prompt("Ingrese el nombre")
        let busqueda = estadisticas.find((el)=>el.jugador.toLowerCase() == buscado.toLowerCase())
        if(busqueda == undefined){
            console.log("No disponemos informacion")
        }else{
            console.log(`Tenemos ESTADISTICAS ${busqueda.nombre} perteneciente a ${busqueda.club}`)
        }
        
}
function buscarMiclub(){
    let buscado = prompt("Ingrese club")
    let busqueda = estadisticas.find((el)=>el.club.toLowerCase() == buscado.toLowerCase())
    if (busqueda == ""){
        console.log("No tenemos informacion ")
    }else{
        console.log(busqueda)
    }
}
//Function que consulte al usuario 
function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver jugadores 
                        2 - Agregar un jugador  
                        3 - di la nacionalidad 
                        4 - buscar por partidos:
                        5 - Buscar jugadores por nombre:
                        6 - clubes:
                        0 - Para salir
                        `))
    menu(opcion)
}

//Function que ofrezca un menú
function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por consultarnos`)
        break    
        case 1:
            mostrarestadisticas()
      	break 
   	    case 2: 
		   agregaunjugador()
      	break 
   	    case 3: 
		   dilanacionalidad()
      	break
        case 4: 
		buscarporpartidos()
      	break
        case 5: 
		Buscarjugadorespornombre()
      	break 
        case 6:
            buscarMiclub()
        break
   	    default: 
      	alert(`Ingrese una opción correcta`)
    }
}

//exit:
let salir 
while(salir != true){
    preguntarOpcion()
    
}



 