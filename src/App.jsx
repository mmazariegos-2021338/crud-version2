import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <div> Esto se renderiza en todo </div>
      <Outlet />
    </>
  )
}