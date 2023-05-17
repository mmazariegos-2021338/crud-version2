
export const Product = ({_id, nombre, descripcion, precio, categoria}) => {
  return (
    <>
      <tr>
        <th>{nombre}</th>
        <td>{descripcion}</td>
        <td>{precio}</td>
        <td>{categoria?.nombre}</td>
        <td>
          <button className='btn btn-warning' >Editar</button>
          <button className='btn btn-danger' >Eliminar</button>
        </td>
      </tr>
    </>
  )
}
