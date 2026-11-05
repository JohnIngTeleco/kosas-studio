import { getLocalStorage } from "./local-storage.js";
import { cosas, registrarCosa } from "./data.js";
import { redirectAlert } from "./alerts.js";
import { idGenerator } from "./generators.js";

let usuario = getLocalStorage("usuario") || "N/A"
document.querySelector("#nombre-usuario").textContent = usuario.nombre

function crearCosa() {
    let id = idGenerator("ART-")
    let nombre_producto = document.querySelector("#nombre-producto").value
    let precio = document.querySelector("#precio").value
    let categoria = document.querySelector("#categoria").value
    let materiales = document.querySelector("#materiales").value
    let dimensiones = document.querySelector("#dimensiones").value
    let stock = document.querySelector("#stock").value
    let descripcion = document.querySelector("#descripcion").value
    let foto_producto = document.querySelector("#foto-producto").value
    let cosa = { id, nombre_producto, precio, categoria, materiales, dimensiones, stock, descripcion, foto_producto }
    cosas.push(cosa)
    registrarCosa("cosas", cosas)
    redirectAlert("Creacción exitosa", "success", "/pages/catalogo.html")
}

let btn_registrar_cosa = document.querySelector("#btn-registrar-cosa")
if (btn_registrar_cosa) {
    btn_registrar_cosa.addEventListener("click", crearCosa)
}