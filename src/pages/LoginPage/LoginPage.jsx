import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../../api/apiLogin'

export const LoginPage = () => {

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resultado = await login(correo, password);
    resultado ? navigate('/products') : null
  }

  return (
    <>
      <div className="container mt-3">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label className="form-label">Correo Electronico</label>
            <input type="email" className="form-control" name='correo' value={correo} onChange={(e) => setCorreo(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
        </form>
      </div>
    </>
  )
}