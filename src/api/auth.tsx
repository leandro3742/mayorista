interface AuthInterface {
  status: number,
  message: string,
  data: {
    _id: number,
    name: string,
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
  if (user !== 'admin' || password !== 'admin')
    return { status: 401, message: 'Usuario o contraseña incorrectos', data: { _id: 0, name: '' } }

  return { status: 200, message: `Bienvenido ${user}`, data: { _id: 1, name: user } }
}