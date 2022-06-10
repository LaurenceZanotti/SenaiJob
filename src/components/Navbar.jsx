import React from 'react'
import menu from '../assets/icons/menu.svg'

function Navbar() {
    return (
        <nav className="d-flex justify-content-between w-100 bg-secondary text-white">
            <img src={menu} alt="Botão de menu" className="ms-2 mt-1 mb-1" role="button"/>
            <div className="me-2 mt-1 mb-1 pe-auto  " role="button">Sair</div>
        </nav>            
    )
}

export default Navbar
