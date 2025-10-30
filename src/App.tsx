import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/home'
import Products from './pages/products'
import InfoProduct from './pages/infoProduct'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/productos' element={<Products></Products>}></Route>
                <Route path='/productos/:id' element={<InfoProduct></InfoProduct>}></Route>
            </Routes>
        </Router>
    )
}

export default App
