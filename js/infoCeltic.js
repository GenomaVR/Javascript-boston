document.getElementById("btnBuscarInfo").onclick = () =>{



    fetch('https://www.balldontlie.io/api/v1/teams/2')
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.info("Info Boston Celtics",data);
        console.log(data.abbreviation)
        console.log(data.city)
        console.log(data.conference)
        console.log(data.division)
        console.log(data.full_name)
        console.log(data.name)
        mostrarListadoCeltic(data);
    }).catch(error=>
    {
        console.info(error);
         
    })

}


mostrarListadoCeltic=(data)=>
{

    

    let InfoListadoLI=document.getElementById('InfoListadoLI');
    InfoListadoLI.innerHTML="";
    for(equipo of [data])
    {

        let crear =document.createElement('li');
        crear.innerText=`Nombre: ${equipo.full_name} \n Abraviation: ${equipo.abbreviation} \n Ciudad: ${equipo.city} \n  Conferencia: ${equipo.conference} \n  Division: ${equipo.division}`;

        InfoListadoLI.appendChild(crear);
    //    listadoLI.appendChild(jugador.retornarNodoLI());
    }

    
}