import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout';
import List from './pages/List';
import Cart from './pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';
import CreateCsv from './pages/CreateCsv';
import Sales from './pages/Sales';
import HistorySales from './pages/HistorySales';
function App() {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('user_id'))
      setIsLogged(true)
  }, [])

  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Layout isLogged={isLogged} setIsLogged={setIsLogged}>
          <Routes>
            <Route path="/" element={<Home isLogged={setIsLogged} />} />
            {/* PRODUCTS ROUTES */}
            <Route path='/list-products' element={<List />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/add-product' element={<CreateProduct />} />
            <Route path='/update/:id' element={<UpdateProduct />} />
            <Route path='/create-csv' element={<CreateCsv />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/history-sales' element={<HistorySales />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
