import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout';
import List from './pages/List';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/list' element={<List />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
