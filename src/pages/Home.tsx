import { useEffect, useState } from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../api/auth';
import { toast } from 'react-toastify';

const Home = ({ isLogged }: { isLogged: any }) => {

  const navigate = useNavigate();
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (sessionStorage.getItem('user_id'))
      navigate('/list')
  }, [])

  const validateUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchLogin(user, password)
      .then(data => {
        if (data.status === 200) {
          sessionStorage.setItem('user_id', data.data._id.toString())
          isLogged(true)
          toast.success(data.message)
          navigate('/list')
        }
        else if (data.status === 401)
          toast.error(data.message)

      })
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