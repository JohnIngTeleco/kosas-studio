export function idGenerator(label) {
    let id = Math.random().toString().substring(2, 7)
    return label + id
}
export function templateCardCosa(cosa) {
    let card = `
        <article class="b-card">
          <div class="card-header">
            <span class="tag tag-yellow">${cosa.categoria}</span>
            <span class="mono" style="font-size: 0.8rem; font-weight: 700;">${cosa.id}</span>
          </div>
          <div class="item-img-container">
            <img src="../img/jarron-terracota.jpg" alt="${cosa.nombre_producto}" class="item-img">
          </div>
          <div class="card-body">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.4rem;">
              <h2 class="item-title">${cosa.nombre_producto}</h2>
              <span class="item-price">$${cosa.precio}</span>
            </div>
            <p class="item-desc">${cosa.descripcion}.</p>
            <table class="specs-table">
              <tr><td>MATERIAL:</td><td>${cosa.materiales}</td></tr>
              <tr><td>DIMENSIONES:</td><td>${cosa.dimensiones}</td></tr>
              <tr><td>DISPONIBILIDAD:</td><td>${cosa.stock}</td></tr>
            </table>
          </div>
          <div class="card-footer">
            <span class="mono" style="font-size: 0.78rem;">GARANTÍA: 1 AÑO</span>
            <a href="detalle-producto.html" class="btn btn-sm btn-primary">Adquirir</a>
          </div>
        </article>
    `
    return card
}