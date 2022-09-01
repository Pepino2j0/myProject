class Usuario{

    nombre;
    password;

    constructor(){

    }
    
    getNombre(){
        return this.nombre;
    }
    getPass(){
        return this.password;
    }
    soyYo(nombre, password){
        return (this.nombre == nombre && this.password == password);
    }

}