// PRUEBAS

let arrayDeJugadas=[];


function buscarJugador() {

    let busquedaJugador;


    const jugadores = [
        {nombre: "jayson", apellido: "tatum", edad:"24", posicion:"PG"},
        {nombre: "marcus", apellido: "smart", edad:"24", posicion:"PG"},
        {nombre: "jaylen", apellido: "brown", edad:"24", posicion:"PG"},
        {nombre: "al", apellido: "hordford", edad:"24", posicion:"PG"},
        {nombre: "robert", apellido: "williams", edad:"24", posicion:"PG"},
    ]


    busquedaJugador = document.getElementById("jugadorPedido").value;

    busquedaJugador = (busquedaJugador).toLowerCase()

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


function mostrarListado()
 {
    let listadoLI=document.getElementById('listadoUL');
    listadoLI.innerHTML="";
    for(jugada of arrayDeJugadas)
    {
        /*
        let nodo =document.createElement('li');
        nodo.innerText=`${jugada.nombreJugador} -- ${jugada.ayuda}`
       

        listadoLI.appendChild(nodo);
         */
        listadoLI.appendChild(jugada.retornarNodoLI());
    }
}

class Jugada
{
    constructor(nombre,apellido,edad,posicion)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.posicion=posicion;
        this.fecha=new Date();
    }

    retornarNodoLI()
    {
         let nodo =document.createElement('li');
        nodo.innerText=`${this.nombre} -- ${this.apellido} -- ${this.edad} -- ${this.posicion} `;
        return nodo;
    }
}