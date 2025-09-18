import CartWidget from "./CartWidget";

function NavBar() {
return (
    <nav style={styles.nav}>
      <img src="https://images.unsplash.com/photo-1758032494801-8f8d6f8b9517?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <h1 style={styles.logo}>Mi Tienda</h1>

    <ul style={styles.links}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
    </ul>

    <CartWidget />
    </nav>
);
}

const styles = {
nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "white"
},
logo: {
    fontSize: "24px",
},
links: {
    listStyle: "none",
    display: "flex",
    gap: "20px"
}
};

export default NavBar;
