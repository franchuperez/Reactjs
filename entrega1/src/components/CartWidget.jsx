function CartWidget() {
  return (
    <div style={styles.cart}>
      🛒 <span style={styles.number}>3</span>
    </div>
  );
}

const styles = {
  cart: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  number: {
    marginLeft: "5px",
    fontWeight: "bold"
  }
};

export default CartWidget;
