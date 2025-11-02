#royectoFinal+Pérez - E-commerce React

Descripción

Aplicación e-commerce desarrollada con React para la venta de herramientas e insumos automotrices.  
Permite navegar por un catálogo, ver detalles de productos, agregar al carrito y registrar compras.  
Utiliza Firebase Firestore para almacenar los productos y las órdenes de compra.

---


 React 18
 React Router DOM 6
 Firebase (Firestore)
 Vite
 CSS



 Características

 Navegación SPA sin recarga de página
 Catálogo dinámico conectado a Firebase
 Vista de detalle por producto
 Carrito de compras con Context API
 Checkout con validación y registro en Firestore
 Generación de órdenes con ID único


 Instalación

Clonar el repositorio:
   ```bash
   git clone https://github.com/franchuperez/Reactjs.git
   cd ProyectoFinal-Perez
Instalar dependencias:



npm install
Configurar Firebase en src/firebase/config.js o con variables de entorno .env:



VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
Ejecutar el proyecto:



npm run dev
Rutas principales
/ → Catálogo general

/categoria/:categoriaId → Productos por categoría

/item/:id → Detalle de producto

/cart → Carrito

/checkout → Finalizar compra

Firebase
Colecciones:

productos: nombre, categoria, precio, descripcion, stock, imagen

ordenes: comprador, productos, total, fecha

Autor
Pérez
Proyecto Final - ReactJS - CoderHouse

Licencia
Proyecto educativo para el curso de ReactJS (CoderHouse).