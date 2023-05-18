import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Gestor de Hoteles </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hoteles</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Habitaciones</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Actividades
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Reservaciones</a></li>
            <li><a className="dropdown-item" href="#">Servicios</a></li>
            <li><a className="dropdown-item" href="#">Salir</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Outlet />
    </>
  )
}