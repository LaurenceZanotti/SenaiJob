import React from 'react'
import menu from '../assets/icons/menu.svg'
import {useContext, useState, createContext} from 'react'
import {MenuContext} from '../App'

function Navbar() {
    const menuContext = useContext(MenuContext)
    function handleClick() {
        menuContext.setMenu(true)
    }
    return (
        <nav className="d-flex justify-content-between w-100 bg-secondary text-white">
            <img src={menu} alt="Botão de menu" className="ms-2 mt-1 mb-1" role="button" onClick={handleClick}/>
            <div className="me-2 mt-1 mb-1 pe-auto  " role="button">Sair</div>
        </nav>            
    )
}

export default Navbar
