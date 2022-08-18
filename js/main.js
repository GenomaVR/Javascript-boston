let nombreIngresado;


function LogIn()
{
    nombreIngresado = document.getElementById("username").value;
    claveIngresado = document.getElementById("password").value;
    let mensaje;


    let listadoDeUsuarios=traerUsuariosDeLaBase();

    let usuarioRetornado=listadoDeUsuarios.find((usuario)=>usuario.nombre==nombreIngresado);
    if(usuarioRetornado)
    {
        if(usuarioRetornado.clave==claveIngresado)
        {
            mensaje="bienvenido;"
            window.location.assign("inicio.html")

        }
        else
        {
            mensaje="Clave Incorrecta"
            return;
        }
    }
    else
    {
        mensaje="Nombre de usario incorrecto"
        alert("Nombre de usario incorrecto y/o Password")
        alert("Favor de iniciar como guest y 1234")
    }


}






function traerUsuariosDeLaBase()
 {
    let usuarios=[];
   
    usuarios.push(new Usuario("guest","1234"));

    return usuarios;

 }

 class Usuario{

    constructor(nombre,clave)
    {
        this.nombre=nombre;
        this.clave=clave;
    }
 }


 