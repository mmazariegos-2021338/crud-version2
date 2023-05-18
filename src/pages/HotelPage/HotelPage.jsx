import { Outlet, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';





export const HotelPage = () => {

  

  return (
    <>
      <div id="carouselExampleDark" class="carousel carousel-dark slide d-flex justify-content-center">
        <div class="carousel-indicators" data-ride="carousel"  >
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000" >
            <img src="../../../public/gestor-3.png" class="d-block w-25px" alt="" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Bienvenido a Nuestro Gestor Hoteles</h5>
              <div className="container col-6 text-align-center"  >
                <p>"En el Hotel  la elegancia y la comodidad se encuentran. Nuestro diseño moderno y sofisticado te cautivará desde el primer momento.</p>
              </div>
            </div>
          </div>
          <div class="carousel-item  " data-bs-interval="2000">
            <img src="../../../public/gestor-2.jpg" class="d-block w-25px" alt="100" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Bienvenido a Nuestro Gestor Hoteles</h5>
              <div className="container col-6 text-align-center"  >
                <p>"En el Hotel  la elegancia y la comodidad se encuentran. Nuestro diseño moderno y sofisticado te cautivará desde el primer momento.</p>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <img src="../../../public/gestor-hoteles.png" class="d-block w-25px" alt="100" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Bienvenido a Nuestro Gestor Hoteles</h5>
              <div className="container col-6 text-align-center"  >
                <p>"En el Hotel  la elegancia y la comodidad se encuentran. Nuestro diseño moderno y sofisticado te cautivará desde el primer momento.</p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="d-grid gap-2">
      </div>
    
      
      <div class="card-group">
  <div class="card">
    <img src="../../../public/card2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-center">HOTEL 1</h5>
      <div class="d-grid gap-2 col-6 mx-auto">
      <Link to="/Cardhotel">
  <button class="btn btn-primary" type="button">Crear Hotel</button>
      </Link>
</div>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">INFORMACION COMPLETA</small>
    </div>
  </div>
  <div class="card">
    <img src="../../../public/card3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-center">HABITACIONES</h5>
      <div class="d-grid gap-2 col-6 mx-auto">
      <Link to="/Habitaciones">
  <button class="btn btn-primary" type="button">HABITACIONES</button>
      </Link>
</div>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">INFORMACION COMPLETA</small>
    </div>
  </div>
  <div class="card">
    <img src="../../../public/card1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-center">HOTEL 3</h5>
      <div class="d-grid gap-2 col-6 mx-auto">
      <Link to="/Factura">
  <button class="btn btn-primary" type="button">Crear Hotel</button>
      </Link>
 </div>
    </div>
    <div class="card-footer">
      <small class="text-body-secondary">INFORMACION COMPLETA</small>
    </div>
  </div>
</div>


      <Outlet></Outlet>
    </>
  )
}



