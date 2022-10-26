import './App.css'
import Header from './components/Header'
import MenuHeader from './components/MenuHeader'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="">
      {/* <Header />
      <MenuHeader /> */}
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:slug' element={<ProductList />} />
      </Routes>
    </div>
  )
}

export default App
