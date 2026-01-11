import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

export default function NavBar() {
  return (
    <nav style={{ padding: 20, background: "#111", color: "white", display: "flex", justifyContent: "space-between" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        crucestraining_
      </Link>

      <div>
        <Link to="/category/boxeo" style={{ margin: 10, color: "white" }}>Boxeo</Link>
        <Link to="/category/fitness" style={{ margin: 10, color: "white" }}>Fitness</Link>
      </div>

      <CartWidget count={0} />
    </nav>
  )
}
