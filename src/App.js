import { Route, Routes } from 'react-router-dom'
import './App.css'
import Become from './components/Become.seller.page'
import Home from './components/Home'
import Login from './components/Login'
import Single from './components/pages/Single.page'
import ProductList from './components/ProductList'
import Register from './components/Register'

function App() {
  return (
    <div className="">
      {/* <Header />
      <MenuHeader /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/becomeseller" element={<Become />} />
        <Route path="/page/:name" element={<Single />} />
        <Route path="/:slug" element={<ProductList />} />
      </Routes>
    </div>
  )
}

export default App
