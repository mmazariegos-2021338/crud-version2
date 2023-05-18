import { useNavigate } from "react-router-dom";


export const HomePage = () => {
  
  const navigate = useNavigate();

  const handleLogin = () => {
    //console.log('vamonos al login');
    navigate('/login');
  }
  
  return (
   <>
    <h1> Hola estas en HOME, Bienvenido </h1>
    <button onClick={ handleLogin } > Ir al Login </button>
   </>
  )
}