import { collection, getDocs, doc, getDoc, query, where, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";


export const getProductos = async () => {
try {
    const productosCollection = collection(db, "productor");
    const snapshot = await getDocs(productosCollection);
    const productos = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
    }));
    return productos;
} catch (error) {
    console.error("Error al obtener productos:", error);
    return [];
}
};
export const getProductoPorId = async (id) => {
try {
    const docRef = doc(db, "productor", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
    } else {
    console.log("Producto no encontrado");
    return null;
    }
} catch (error) {
    console.error("Error al obtener producto:", error);
    return null;
}
};
export const getProductosPorCategoria = async (categoria) => {
try {
    const productosCollection = collection(db, "productor");
    const q = query(productosCollection, where("categoria", "==", categoria));
    const snapshot = await getDocs(q);
    const productos = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
    }));
    return productos;
} catch (error) {
    console.error("Error al obtener productos por categoría:", error);
    return [];
}
};

export const crearOrden = async (orderData) => {
try {
    const ordenesCollection = collection(db, "ordenes");
    const docRef = await addDoc(ordenesCollection, {
    ...orderData,
    fecha: serverTimestamp()
    });
    return docRef.id;
} catch (error) {
    console.error("Error al crear orden:", error);
    throw error;
}
};