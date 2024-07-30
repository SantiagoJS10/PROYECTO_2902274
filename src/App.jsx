import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import {Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <div className='text-white h-[100vh] flex items-center  justify-center bg-cover ' style={{backgroundImage: "url('./src/assets/img/fondo.avif')"}}>
    <Routes>
     <Route path='Login' element={<Login/>}/>
     <Route path='Register' element={<Register/>}/>
    </Routes>

    </div>
  )
}

export default App
