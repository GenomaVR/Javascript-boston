// PRUEBAS
 /*   const jugadores = [
        {nombre: "jayson", apellido: "tatum", edad:"24", posicion:"PG"},
        {nombre: "marcus", apellido: "smart", edad:"24", posicion:"PG"},
        {nombre: "jaylen", apellido: "brown", edad:"24", posicion:"PG"},
        {nombre: "al", apellido: "hordford", edad:"24", posicion:"PG"},
        {nombre: "robert", apellido: "williams", edad:"24", posicion:"PG"},
    ]
*/




let arrayDeJugadores=[];


const retornarListadoDeJugadores=()=>{
    const jugadores = [
        {nombre: "jayson", apellido: "tatum", edad:"24", posicion:"PG", salario: "$25.312.500"},
        {nombre: "marcus", apellido: "smart", edad:"24", posicion:"PG", salario: "$14.339.285"}, 
        {nombre: "jaylen", apellido: "brown", edad:"24", posicion:"PG", salario: "$25.312.500"},
        {nombre: "al", apellido: "hordford", edad:"24", posicion:"PG", salario: "$27.000.000"},
        {nombre: "robert", apellido: "williams", edad:"24", posicion:"PG", salario: "$3.661.976"},
        {nombre: "derrick ", apellido: "white", edad:"28", posicion:"PG", salario: "$15.178.571"},
        {nombre: "grant ", apellido: "williams", edad:"23", posicion:"PF", salario: "$2.617.800"},
        {nombre: "payton ", apellido: "pritchard", edad:"24", posicion:"PG", salario: "$2.137.440"},
        {nombre: "aaron ", apellido: "neshmit", edad:"22", posicion:"PG", salario: "TRADED"},
        {nombre: "daniel ", apellido: "theis", edad:"30", posicion:"C", salario: "TRADED"},
    ]
    return jugadores;
}

const mostrarJugadorIndividual=(jugador)=> {
    console.info("Jugador: ",jugador)
}



let btnBuscarJugador = document.getElementById("btnBuscarJugador")
btnBuscarJugador.onclick = function busquedaJugadorPlantilla (){
let busquedaJugador;
arrayDeJugadores=retornarListadoDeJugadores();


busquedaJugador = document.getElementById("jugadorPedido").value;

busquedaJugador = (busquedaJugador).toLowerCase()


const jugadorEncontrado = arrayDeJugadores.filter((el) => el.nombre.includes(busquedaJugador) || el.apellido.includes(busquedaJugador));

// || arrayDeJugadores.filter((apellido) => apellido.apellido.includes(busquedaJugador))


            console.log(jugadorEncontrado);
         //   alert(JSON.stringify(jugadorEncontrado));


if(jugadorEncontrado.length>0){

mostrarJugadorIndividual(jugadorEncontrado);
console.log("Jugador encontrado");
// alert(JSON.stringify(jugadorEncontrado));
//mostrarJugadores()
class jugador{
    constructor(nombre,apellido,edad,posicion,salario)
    {
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.posicion=posicion
        this.salario=salario
    }

 /*   retornarNodoLI()
        {
             let nodo =document.createElement('li');
            nodo.innerText=`${jugador.nombre} -- ${jugador.apellido} -- ${jugador.edad} -- ${jugador.posicion} `;
            return nodo;
        }
*/   
                 }  

let listadoLI=document.getElementById('listadoLI');
    listadoLI.innerHTML="";
    for(jugador of jugadorEncontrado){

        let crear =document.createElement('li');
        crear.innerText=`Nombre: ${jugador.nombre}, Apellido: ${jugador.apellido}, Edad: ${jugador.edad}, Posicion:  ${jugador.posicion}, Salario: ${jugador.salario}`;

        listadoLI.appendChild(crear);
    //    listadoLI.appendChild(jugador.retornarNodoLI());
    }

     


}
else{
console.log("No se encontro jugador")
// alert("no se encontro jugador")

let listadoLI=document.getElementById('listadoLI');
listadoLI.innerHTML="";
let crear =document.createElement('li');
        crear.innerText=`No se encontro jugador`;
        listadoLI.appendChild(crear);
}


}



/*
function buscarJugador() {

    let busquedaJugador;
    arrayDeJugadores=retornarListadoDeJugadores();


    busquedaJugador = document.getElementById("jugadorPedido").value;

    busquedaJugador = (busquedaJugador).toLowerCase()


    const jugadorEncontrado = arrayDeJugadores.filter((el) => el.nombre.includes(busquedaJugador));

    // || arrayDeJugadores.filter((apellido) => apellido.apellido.includes(busquedaJugador))


                console.log(jugadorEncontrado);
             //   alert(JSON.stringify(jugadorEncontrado));


if(jugadorEncontrado.length>0){
    
    mostrarJugadorIndividual(jugadorEncontrado);
    console.log("Jugador encontrado");
    alert(JSON.stringify(jugadorEncontrado));
    mostrarListado()

}
else{
    console.log("No se encontro jugador")
    alert("no se encontro jugador")


}

}

/*

    while(busquedaJugador!="salir")

    {
        switch(busquedaJugador)
        {
          case "jayson":
            if(busquedaJugador == "jayson")
            {
                alert("Se encontro a: Jayson Tatum");
                const busquedaJayson = jugadores.filter((el) => el.nombre.includes("jayson"));
                console.log(busquedaJayson);
                alert(JSON.stringify(busquedaJayson));
            }
            else if (busquedaJugador != "jayson")
            {
                alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
            }
            break;
          case "marcus":
            if (busquedaJugador == "marcus")
            {
                alert("Se encontro a: Marcus Smart");
                const busquedaMarcus = jugadores.filter((el) => el.nombre.includes("marcus"));
                console.log(busquedaMarcus);
                alert(JSON.stringify(busquedaMarcus));
            }
    
            else if (busquedaJugador != "marcus")
            {
                alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
            }
            break;
          case "jaylen":  
        if (busquedaJugador == "jaylen")
        {
            alert("Se encontro a: Jaylen Brown");
            const busquedaJaylen = jugadores.filter((el) => el.nombre.includes("jaylen"));
            console.log(busquedaJaylen);
            alert(JSON.stringify(busquedaJaylen));
        }

        else if (busquedaJugador != "jaylen")
        {
            alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
        }
            break;
          case "al":
            if (busquedaJugador == "al")
            {
                alert("Se encontro a: Al Hordford");
                const busquedaAl = jugadores.filter((el) => el.nombre.includes("al"));
                console.log(busquedaAl);
                alert(JSON.stringify(busquedaAl));
            }
    
            else if (busquedaJugador != "al")
            {
                alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
            }
            break;

            case "robert":
            
            if (busquedaJugador == "robert")
             {
            alert("Se encontro a: Robert Williams");
            const busquedaRobert = jugadores.filter((el) => el.nombre.includes("robert"));
            console.log(busquedaRobert);
            alert(JSON.stringify(busquedaRobert));
           }

            else if (busquedaJugador != "robert")
           {
            alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
           }
            break;

            default:
            console.log("Sin jugador en la base de datos");
            alert("No se encontro al jugador con nombre indicado, favor de realizar una nueva busqueda");
            break;
        }//fin del switch
        busquedaJugador=prompt("Quiere buscar otro jugador? si quiere salir escriba salir");
      }//fin del while
       console.log("se termino la busqueda de jugadores");

       mostrarListado()

}
*/



/*

function mostrarJugadores()
 {


    let listadoLI=document.getElementById('listadoLI');
    listadoLI.innerHTML="";
    for(jugador of arrayDeJugadores){

        let crear =document.createElement('li');
        crear.innerText=`Nombre: ${jugador.nombre}, Apellido: ${jugador.apellido}, Edad: ${jugador.edad}, Posicion:  ${jugador.posicion}, Salario: ${jugador.salario}`;

        listadoLI.appendChild(crear);
    //    listadoLI.appendChild(jugador.retornarNodoLI());
    }
    }

    */
   
   
   
   
   /* class jugador{
    constructor(nombre,apellido,edad,posicion,salario)
    {
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.posicion=posicion
        this.salario=salario
    }

 /*   retornarNodoLI()
        {
             let nodo =document.createElement('li');
            nodo.innerText=`${jugador.nombre} -- ${jugador.apellido} -- ${jugador.edad} -- ${jugador.posicion} `;
            return nodo;
        }

    }
*/   
                  

                 

