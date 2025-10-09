// array de productos
const productos = [
  // Herramientas
{ id: 1, nombre: "Llave inglesa", categoria: "herramientas", precio: 5000, imagen: "/img/llave.jpg" },
{ id: 2, nombre: "Destornillador set", categoria: "herramientas", precio: 4500, imagen: "/img/destornillador.jpg" },
{ id: 3, nombre: "Llave de tubo", categoria: "herramientas", precio: 6500, imagen: "/img/llave-tubo.jpg" },
{ id: 4, nombre: "Alicate multiuso", categoria: "herramientas", precio: 3800, imagen: "/img/alicate.jpg" },
{ id: 5, nombre: "Martillo mecánico", categoria: "herramientas", precio: 7200, imagen: "/img/martillo.jpg" },
{ id: 6, nombre: "Gato hidráulico", categoria: "herramientas", precio: 25000, imagen: "/img/gato.jpg" },
{ id: 7, nombre: "Pistola de impacto", categoria: "herramientas", precio: 45000, imagen: "/img/pistola-impacto.jpg" },

  // Insumos
{ id: 8, nombre: "Aceite sintético", categoria: "insumos", precio: 8000, imagen: "/img/aceite.jpg" },
{ id: 9, nombre: "Bujías", categoria: "insumos", precio: 3000, imagen: "/img/bujias.jpg" },
{ id: 10, nombre: "Filtro de aceite", categoria: "insumos", precio: 2500, imagen: "/img/filtro-aceite.jpg" },
{ id: 11, nombre: "Filtro de aire", categoria: "insumos", precio: 3200, imagen: "/img/filtro-aire.jpg" },
{ id: 12, nombre: "Líquido refrigerante", categoria: "insumos", precio: 4500, imagen: "/img/refrigerante.jpg" },
{ id: 13, nombre: "Pastillas de freno", categoria: "insumos", precio: 12000, imagen: "/img/pastillas-freno.jpg" },
];

// simular promesas
export const getProductos = () => {
return new Promise(resolve => {
    setTimeout(() => resolve(productos), 1000);
});
};

export const getProductoPorId = (id) => {
return new Promise(resolve => {
    setTimeout(() => resolve(productos.find(p => p.id === parseInt(id))), 1000);
});
};

export const getProductosPorCategoria = (categoria) => {
return new Promise(resolve => {
    setTimeout(() => resolve(productos.filter(p => p.categoria === categoria)), 1000);
});
};