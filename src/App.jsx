import { useState } from 'react'
import { Extract } from './components/Extract'
import {Header} from './components/Header'
import { Login } from './components/Login'
import { Menu } from './components/Menu'
import styles from './styles/global.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  

  function handleOpenMenu() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles}>

      {isOpen ? (
        <Menu handleOpenMenu={handleOpenMenu} />
        ) : (
          <>
          <Header handleOpenMenu={handleOpenMenu} />
        <Extract />
        </>
      )} 
    </div>
  )
}

export default App
