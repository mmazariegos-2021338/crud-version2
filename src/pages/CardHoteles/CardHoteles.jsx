import React, { useEffect } from 'react'
import { Outlet, useNavigate } from "react-router-dom"

import { useState } from 'react'
import { getHotel } from '../../api/apiHotel'
import { Link } from 'react-router-dom';




const CardHoteles = () => {

    const [nombreHotel, setNombreHotel] = useState("")
    const [direccionHotel, setDescripcionHotel] = useState("")
    const [eventoHotel, setEventoHotel] = useState("")
    const [hotel, setHotel] = useState([])

const navigate = useNavigate();

const handleSubmit = async (event) => {
    event.preventDefault();
    const resultado = await login(nombreHotel, direccionHotel, eventoHotel);
    resultado ? navigate('/hotel') : null
  }

  const reload = async () => {
    const result = await getHotel()
    setHotel(result)
  }

  useEffect(() => {
    reload()
  }, [])


  return (

    <div>
      
      <div className="card text-bg-dark">
      
      
  <img src="../../../public/fondoHotel.jpg" className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title">CREAR HOTELES</h5>
    <p className="card-text">Nuestro Gestor Administratrativo para la creacion Hoteles</p>
    <p className="card-text"><small>Bienvenido</small></p>
    <div className="mb-3 row">
    <label for="staticEmail" className="col-sm-2 col-form-label">---------------------</label>
    <div className="col-sm-10">
      <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="Crea tu propio Hotel"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Hotel</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputPassword"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label for="staticEmail" className="col-sm-2 col-form-label">----------------------</label>
    <div className="col-sm-10">
      <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="Descripcion del Hotel"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Descripción</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputPassword"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label for="staticEmail" className="col-sm-2 col-form-label">--------------------</label>
    <div className="col-sm-10">
      <input type="text" readonly className="form-control-plaintext" id="{evento}" value="Eventos del Hotel"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Evento</label>
    
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputPassword"/>
    </div>
  </div>
      <Link to="/hotel" class="d-grid gap-2 d-md-flex justify-content-md-end">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="submit">Crear Hotel</button>
  <button class="btn btn-primary me-md-2" type="button">Cancelar</button>
</div>
  </Link>
<br></br>
  <Link to="/hotel" class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-secondary" type="button">REGRESAR</button>
      </Link>

  </div>

  
</div>


      <Outlet></Outlet>
    </div>
  )
}

export default CardHoteles
