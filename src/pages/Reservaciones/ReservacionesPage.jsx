import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';

const ReservacionesPage = () => {
  return (

    <div class="card text-bg-dark">
  <img src="../../../public/room-1.jpeg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">BIENVENIDO A RESERVACIONES DE HABITACIONES</h5>
    <p class="card-text">En esta area podra reservar sus habitaciones, Con detalles exclusivos he informacion de Nuestro Hoteles</p>
    <p class="card-text"><small>Comienze su reserva</small></p>
    <div>
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Nombre de Usuario</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon2">Hotel</span>
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  
</div>


<div class="mb-3">
  <label for="basic-url" class="form-label">Ingrese</label>
  <div class="input-group">
    <span class="input-group-text" id="basic-addon3">Descripcion</span>
    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
  </div>
  <div class="form-text" id="basic-addon4"></div>
</div>
<select class="form-select" aria-label="Default select example">
  <option selected>Numero de Hotel</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
<br />
<div class="input-group mb-3">
<select class="form-select" aria-label="Default select example">
  <option selected>Habitaciones</option>
  <option value="1">Familiar</option>
  <option value="2">Juvenil</option>
  <option value="3">Solitario</option>
</select>
<select class="form-select" aria-label="Default select example">
  <option selected>Gama de Precios</option>
  <option value="1">Familiar 100$</option>
  <option value="2">Juvenil  200$</option>
  <option value="3">Solitario 300$</option>
</select>
  <span class="input-group-text">$ Monto</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <span class="input-group-text">.00</span>
</div>

<Link to="/hotel" class="d-grid gap-2 d-md-flex justify-content-md-end">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="submit">Realizar Reservacion</button>
  <button class="btn btn-primary me-md-2" type="button">Cancelar</button>
</div>
  </Link>
<br></br>
  <Link to="/hotel" class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button className="btn btn-secondary" type="button">REGRESAR</button>
      </Link>


      <Outlet/>
    </div>
  </div>
</div>


   
  )
}

export default ReservacionesPage
