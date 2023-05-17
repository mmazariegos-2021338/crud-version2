
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCategories } from "../../api/apiCategoria"

export const AddProduct = () => {

  const [nombreProduct, setNombreProduct] = useState("")
  const [precioProduct, setPrecioProduct] = useState("")
  const [descripcionProduct, setDescripcionProduct] = useState("")
  const [categories, setCategories] = useState([])


  const navigate = useNavigate();

  const handleSubmitProductAdd = (event) => {
    event.preventDefault()
    navigate('/products')
  }

  const reload = async () => {
    const result = await getCategories()
    setCategories(result)
  }

  useEffect(() => {
    reload()
  }, [])


  return (
    <>
      <h1> RUTA ADD PRODUCT </h1>
      <form onSubmit={handleSubmitProductAdd}>
        <div className="mb-3">
          <label className="form-label">Nombre del producto</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" className="form-control" />
        </div>
        <select className="form-select" aria-label="Default select example">
          <option aria-selected>Hola a todos</option>
          {
            categories.map(({ _id, nombre }, i) => {
              return (<option key={i} value={_id}>{nombre}</option>)
            })
          }
        </select>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </>
  )
}
