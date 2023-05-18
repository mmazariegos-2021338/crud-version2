import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

import { HomePage } from './pages/HomePage/HomePage';
import { HotelPage } from './pages/HotelPage/HotelPage';
import CardHoteles from './pages/CardHoteles/CardHoteles';
import HabitacionesPage from './pages/HabitacionesPage/HabitacionesPage';
import ReservacionesPage from './pages/Reservaciones/ReservacionesPage';
import Factura from './pages/Factura/Factura';



const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/hotel',
        element: <HotelPage />,
      },
      {
        path: '/Cardhotel',
        element: <CardHoteles/>,
      },
      {
         path: '/Habitaciones',
         element: <HabitacionesPage/>
      },
      {
        path:'/Reservaciones',
        element: <ReservacionesPage/>
      },
      {
        path:'/Factura',
        element: <Factura></Factura>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} ></RouterProvider>
  </React.StrictMode>,
)
