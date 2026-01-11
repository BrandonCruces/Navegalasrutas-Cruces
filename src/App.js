import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/containers/ItemListContainer"
import ItemDetailContainer from "./components/containers/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 style={{ padding: 20 }}>404 - Página no encontrada</h2>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
