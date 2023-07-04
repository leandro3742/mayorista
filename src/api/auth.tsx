import { clients } from '../mock/clients'

interface AuthInterface {
  status: number,
  message: string,
  data: {
    id: number,
    name: string,
    role: string
  }
}

export const fetchLogin = async (user: string, password: string): Promise<AuthInterface> => {
  // const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ user, password })
  // })
  // const data = await response.json()
  // return data
  const clientElem = clients.find((element) => element.email === user && element.password === password)
  if (!clientElem)
    return { status: 401, message: 'Usuario o contraseña incorrectos', data: { id: 0, name: '', role: '' } }

  return { status: 200, message: `Bienvenido ${user}`, data: { id: clientElem.id, name: clientElem.name, role: clientElem.role } }
}