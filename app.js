 

function getDatos(){
    let usu = new Usuario();
    usu.nombre = "David";
    usu.password = 123456;
    var nombre = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;
   
    console.write(usu.getNombre());
   /* if(usu.soyYo(nombre,password)){
         document.getElementById("mensaje").innerHTML = "Bienvenido " + nombre;
    }
    else{
        document.getElementById("mensaje").innerHTML = "Usuario o contraseña incorrectos"
    }
*/
    
}