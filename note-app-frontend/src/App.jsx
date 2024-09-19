import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Notes from './pages/Notes'
import Register from './pages/Register'
import CreateNote from './pages/CreateNote'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/create-note' element={<CreateNote />}/>
    </Routes>
  )
}

export default App
