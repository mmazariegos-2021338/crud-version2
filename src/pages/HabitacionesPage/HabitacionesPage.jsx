import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { Link } from 'react-router-dom';

const HabitacionesPage = () => {

    const navigate = useNavigate();
    return (
        
        <div>
            <div class="p-3 mb-2 bg-primary text-white">RESERVACION DE HABITACIONES</div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card">
                        <img src="../../../public/room-1.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Habitacion 1</h5>
                            <p class="card-text">Habitaciones Singulares.</p>
                            <Link to="/Reservaciones">
  <button class="btn btn-primary" type="button">REALIZAR RESERVACION</button>
      </Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="../../../public/room-4.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Habitacion 2</h5>
                            <p class="card-text">Habitaciones Familiar.</p>
                            <Link to="/Reservaciones">
  <button class="btn btn-primary" type="button">REALIZAR RESERVACION</button>
      </Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="../../../public/room-2.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Habitacion 3</h5>
                            <p class="card-text">Habitacion para Adolecentes.</p>
                            <Link to="/Reservaciones">
  <button class="btn btn-primary" type="button">REALIZAR RESERVACION</button>
      </Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="../../../public/room-3.jpeg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Habitaciones 4</h5>
                            <p class="card-text">Habitacion Premiun de nuestro Hotel</p>
                            <Link to="/Reservaciones">
  <button class="btn btn-primary d-grid gap-2 d-md-flex justify-content-md-end" type="button">REALIZAR RESERVACION</button>
      </Link>
                        </div>
                    </div>
                </div>


            </div>

            <Outlet></Outlet>
        </div>

)
}
    


export default HabitacionesPage
