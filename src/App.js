import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Single from './components/pages/Single.page'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="">
      {/* <Header />
      <MenuHeader /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:name" element={<Single />} />
        <Route path="/:slug" element={<ProductList />} />
      </Routes>
    </div>
  )
}

export default App
