# ProyectoFinal+Pérez - E-commerce React

## 📋 Descripción del Proyecto

E-commerce desarrollado con React que permite navegar por un catálogo de productos de herramientas e insumos automotrices, agregar productos al carrito y realizar compras.

El proyecto utiliza Firebase Firestore como base de datos para almacenar productos y registrar órdenes de compra.

## 🚀 Características Principales

- ✅ Navegación SPA (Single Page Application) con React Router
- ✅ Catálogo de productos con filtrado por categorías
- ✅ Vista detallada de cada producto
- ✅ Carrito de compras funcional con Context API
- ✅ Sistema de checkout con validación de formularios
- ✅ Integración con Firebase Firestore
- ✅ Generación de órdenes de compra con ID único
- ✅ Renderizado condicional (loaders, mensajes de error, carrito vacío)

## 🛠️ Tecnologías Utilizadas

- **React** 18.3.1
- **React Router DOM** 6.28.0
- **Firebase** 11.0.2 (Firestore)
- **Vite** 5.4.10
- **CSS** para estilos

## 📁 Estructura de Componentes
```
src/
├── components/
│   ├── NavBar.jsx              # Barra de navegación
│   ├── CartWidget.jsx          # Ícono del carrito con contador
│   ├── ItemListContainer.jsx   # Contenedor del listado de productos
│   ├── ItemList.jsx            # Lista de productos (presentacional)
│   ├── ItemCard.jsx            # Card individual de producto
│   ├── ItemDetailContainer.jsx # Contenedor del detalle del producto
│   └── ItemCount.jsx           # Contador para agregar productos
├── context/
│   └── CartContext.jsx         # Context para manejo del carrito
├── pages/
│   ├── Cart.jsx                # Página del carrito de compras
│   ├── Checkout.jsx            # Página de checkout
│   └── OrderConfirmation.jsx   # Confirmación de compra
├── services/
│   └── firebase.js             # Servicios de Firebase (CRUD)
├── firebase/
│   └── config.js               # Configuración de Firebase
├── App.jsx                     # Componente principal con rutas
└── main.jsx                    # Punto de entrada
```

## 🔥 Configuración de Firebase

### Colecciones en Firestore:

1. **productos**: Almacena el catálogo de productos
   - Campos: nombre, categoria, precio, imagen, stock

2. **ordenes**: Registra las compras realizadas
   - Campos: cliente, productos, total, fecha

### Variables de entorno (opcional):

Si deseas ocultar las credenciales de Firebase, puedes usar variables de entorno:
```
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
```

## 📦 Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/ProyectoFinal+Perez.git
cd ProyectoFinal+Perez
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar Firebase

- Crear un proyecto en [Firebase Console](https://console.firebase.google.com/)
- Crear una base de datos Firestore
- Copiar las credenciales en `src/firebase/config.js`
- Crear la colección "productos" y agregar productos manualmente

### 4. Ejecutar el proyecto
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🌐 Rutas de la Aplicación

- `/` - Página principal con todos los productos
- `/categoria/:categoriaId` - Productos filtrados por categoría
- `/item/:id` - Detalle de un producto específico
- `/cart` - Carrito de compras
- `/checkout` - Formulario de checkout
- `/order-confirmation` - Confirmación de compra exitosa

## 📸 Funcionalidades Destacadas

### Carrito de Compras
- Agregar productos con cantidad seleccionada
- Modificar cantidades
- Eliminar productos individuales
- Vaciar carrito completo
- Visualización de subtotales y total

### Checkout
- Validación de formularios en tiempo real
- Campos requeridos: nombre, email, teléfono, dirección
- Guardado de orden en Firebase
- Generación de ID único de orden
- Redirección a página de confirmación

### ItemCount
- Incrementar/decrementar cantidad
- Validación de stock disponible
- Valor mínimo de 1 unidad
- Se oculta después de agregar al carrito

##  Autor

**Pérez** - Proyecto Final React - CoderHouse

## Licencia

Este proyecto fue desarrollado como parte del curso de ReactJS de CoderHouse.


3. **Personaliza los siguientes campos:**
   - Reemplaza `Pérez` con tu apellido real
   - Reemplaza la URL del repositorio con tu URL real de GitHub
   - Si quieres, agrega más detalles o imágenes

4. **Guarda el archivo**

---

## ✅ **VERIFICACIÓN FINAL DE TODO EL PROYECTO**

Ahora vamos a verificar que TODO esté funcionando correctamente:

### **Checklist de funcionalidades:**

Prueba cada una de estas cosas:

1. ✅ **Página principal** → Muestra todos los productos de Firebase
2. ✅ **Categoría Herramientas** → Filtra solo herramientas
3. ✅ **Categoría Insumos** → Filtra solo insumos
4. ✅ **Ver detalle** → Muestra información completa del producto
5. ✅ **ItemCount** → Permite incrementar/decrementar cantidad
6. ✅ **Agregar al carrito** → ItemCount se oculta y aparece botón "Ir al carrito"
7. ✅ **CartWidget** → Muestra la cantidad total de productos
8. ✅ **Ver carrito** → Muestra productos, cantidades, subtotales y total
9. ✅ **Eliminar producto** → Funciona correctamente
10. ✅ **Vaciar carrito** → Funciona correctamente
11. ✅ **Checkout** → Formulario con validaciones
12. ✅ **Confirmar compra** → Se guarda en Firebase y muestra ID de orden
13. ✅ **Página de confirmación** → Muestra todos los detalles de la compra

### **Checklist de requisitos técnicos:**

- ✅ Productos obtenidos desde Firebase
- ✅ Órdenes guardadas en Firebase
- ✅ React Router implementado (SPA)
- ✅ Context API para el carrito
- ✅ Separación de componentes (Container/Presentacional)
- ✅ ItemCount con validaciones
- ✅ ItemCount se oculta después de agregar
- ✅ CartWidget con cantidad total
- ✅ Renderizado condicional (loaders, mensajes)
- ✅ README.md documentado

---

##  **ESTRUCTURA FINAL DE TU PROYECTO**


ProyectoFinal+Pérez/
├── src/
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── CartWidget.jsx
│   │   ├── ItemListContainer.jsx
│   │   ├── ItemList.jsx ← NUEVO
│   │   ├── ItemCard.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   └── ItemCount.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── OrderConfirmation.jsx
│   ├── services/
│   │   └── firebase.js ← NUEVO
│   ├── firebase/
│   │   └── config.js
│   ├── App.jsx
│   └── main.jsx
├── README.md ← ACTUALIZADO
└── package.json