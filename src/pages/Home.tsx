import { useState } from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const validateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/list')
  }

  return (
    <div className="h-full flex justify-center items-center">
      <div id='signin' style={{ backgroundColor: '#A6D6CA' }}>
        <h1 className="text-3xl text-center mt-4">Iniciar sesion</h1>
        <form onSubmit={validateUser} className="flex flex-col p-12">
          <input
            type="text"
            placeholder="Usuario"
            className="h-12 p-2 text-center"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="mt-5 h-12 text-center"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type='submit' className="btn-primary mt-5">Iniciar sesion</button>
        </form>
      </div>
    </div>
  )
}

export default Home