import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { products } from "../../data/products"
import ItemDetail from "../presentation/ItemDetail"

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    const getItem = new Promise(resolve => {
      setTimeout(() => {
        resolve(products.find(p => p.id === itemId))
      }, 1000)
    })

    getItem.then(res => setItem(res))
  }, [itemId])

  return item && <ItemDetail item={item} />
}
