let usuarios = [
    {
        id: "id1",
        nombre: "Juan Gomez",
        correo: "correo@correo.com",
        telefono: "31512345789",
        contrasena: "12345"
    },
    {
        id: "id2",
        nombre: "Pedro Perez",
        correo: "pedro@correo.com",
        telefono: "3157896511",
        contrasena: "54321"
    }
]



export function buscarUsuario(correo, clave){
    let auth = usuarios.find((usuario)=> correo == usuario.correo && clave == usuario.contrasena)
    return auth

}


export function registrarUsuario(){


}