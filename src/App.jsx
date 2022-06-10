import './App.css'
import Navbar from './components/Navbar'
import Pagina from './components/Pagina'
import Menu from './components/Menu/Menu'
import {useContext, useState, createContext} from 'react'

export const MenuContext = createContext()

function App() {
  
  const [menu, setMenu] = useState(false)
  
  return (
    <div>
      <MenuContext.Provider value={{menu, setMenu}}>
      <Navbar />
      <main>
        <Menu />
        <Pagina />
      </main>
      </MenuContext.Provider>
    </div>
  )
}

export default App
