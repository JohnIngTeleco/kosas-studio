import { getLocalStorage, setLocalStorage } from "./local-storage.js";

let usuarios = [
  {
    id: "id1",
    nombre: "Diego Puerta",
    correo: "correo@correo.com",
    telefono: "3001234567",
    contrasena: "12345",
  },
  {
    id: "id2",
    nombre: "Jaime Zapata",
    correo: "jaime@correo.com",
    telefono: "3219876543",
    contrasena: "12345",
  },
  {
    id: "id3",
    nombre: "Yeraldin Arenas",
    correo: "Yeral@correo.com",
    telefono: "3189874512",
    contrasena: "12345",
  },
];

export let cosas = getLocalStorage("cosas") || [] 

export function buscarUsuario(correo, clave) {
  let auth = usuarios.find((usuario) => correo == usuario.correo && clave == usuario.contrasena);
  return auth
}

export function registrarUsuario() {
  
}

export function registrarCosa(key, value) {
  setLocalStorage(key, value)
}
