import ItemCard from "./ItemCard";

function ItemList({ productos }) {
return (
    <div className="lista-productos">
    {productos.map((prod) => (
        <ItemCard key={prod.id} producto={prod} />
    ))}
    </div>
);
}

export default ItemList;