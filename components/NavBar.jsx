import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav
      style={{
        padding: 20,
        background: "#111",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      {/* Logo / Nombre */}
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: 20
        }}
      >
        crucestraining_
      </Link>

      {/* Menú de categorías */}
      <div>
        <Link to="/category/boxeo" style={{ margin: 10, color: "white" }}>
          Boxeo
        </Link>
        <Link to="/category/fitness" style={{ margin: 10, color: "white" }}>
          Fitness
        </Link>
        <Link to="/cart" style={{ margin: 10, color: "white" }}>
          Carrito
        </Link>
        <Link to="/checkout" style={{ margin: 10, color: "white" }}>
          Finalizar Compra
        </Link>
      </div>

      {/* Ícono del carrito */}
      <CartWidget />
    </nav>
  );
}
