function ItemListContainer({ saludar }) {
return (
    <div style={styles.container}>
    <h2>{saludar}</h2>
    </div>
);
}

const styles = {
container: {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "20px"
}
};

export default ItemListContainer;
