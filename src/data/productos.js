// array de productos
const productos = [
{ id: 1, nombre: "Llave inglesa", categoria: "herramientas", precio: 5000, imagen: "/img/llave.jpg" },
{ id: 2, nombre: "Aceite sintético", categoria: "insumos", precio: 8000, imagen: "/img/aceite.jpg" },
{ id: 3, nombre: "Bujías", categoria: "insumos", precio: 3000, imagen: "/img/bujias.jpg" },
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
