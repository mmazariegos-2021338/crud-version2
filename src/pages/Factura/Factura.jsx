import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"

import { useState } from 'react'
import { getHotel } from '../../api/apiHotel'
import { Link } from 'react-router-dom';

const Factura = () => {
  return (
   
    
    <div class="card text-bg-dark">
  <img src="../../../public/lp.jpg" class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">Genera tu Factura</h5>
    <p class="card-text">Es importante que afirmes los datos, para evitar inconvenientes</p>
    <p class="card-text"><small>Gracias por utilizar Gestor de Hoteles</small></p>
    
  </div>
  <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">Primer Nombre</label>
    <input type="text" class="form-control" id="validationTooltip01" value="Mark" required/>
    <div class="valid-tooltip">
      !
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Segundo Nombre</label>
    <input type="text" class="form-control" id="validationTooltip02" value="Otto" required/>
    <div class="valid-tooltip">
      ----
    </div>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltipUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
      <input type="text" class="form-control" id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" required/>
      <div class="invalid-tooltip">
        Coloca tu nombre de usuario
      </div>
    </div>
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">Ciudad</label>
    <input type="text" class="form-control" id="validationTooltip03" required/>
    <div class="invalid-tooltip">
     
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">No Reservacion</label>
    <select class="form-select" id="validationTooltip04" required>
      <option selected disabled value="">RESERVA VALIDADA</option>
      <option>...</option>
    </select>
    <div class="invalid-tooltip">
     
    </div>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label"></label>
    <input type="text" class="form-control" id="validationTooltip05" required/>
    <div class="invalid-tooltip">
      Gracias por Usar nuestra pagina web 
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit" Link>Submit form</button>
  </div>
 
</form>




  <Outlet/>
</div>
    
  )
}

export default Factura
