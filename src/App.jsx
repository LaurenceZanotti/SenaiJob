import './App.css'
import Navbar from './components/Navbar'
import Pagina from './components/Pagina'
import Menu from './components/Menu/Menu'

function App() {

  return (
    <div>
      <Navbar />
      <main>
        <Menu />
        <Pagina />
      </main>
    </div>
  )
}

export default App
