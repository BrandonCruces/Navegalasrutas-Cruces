import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../data/products"
import ItemList from "../presentation/ItemList"

export default function ItemListContainer() {
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter(p => p.category === categoryId))
        } else {
          resolve(products)
        }
      }, 1000)
    })

    getProducts.then(res => setItems(res))
  }, [categoryId])

  return <ItemList items={items} />
}
