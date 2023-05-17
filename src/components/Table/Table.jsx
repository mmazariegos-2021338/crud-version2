import { Link } from 'react-router-dom'
import { Product } from '../Product/Product'
import { getProducts } from '../../api/apiProduct'
import { useState } from 'react'
import { useEffect } from 'react'

export const Table = () => {

  const [products, setProducts] = useState([])

  const reload = async () => {
    const result = await getProducts()
    console.log(result);
    setProducts(result)
  }

  useEffect(() => {
    reload()
  }, [])

  return (
    <>
      <div className="container">
        <Link to='add'>
          <button className="btn btn-primary mt-3">
            Add Product
          </button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion </th>
              <th scope="col">Precio</th>
              <th scope="col">Categoria</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) =>{
                return (
                  <Product key={product._id} {...product}/>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}
