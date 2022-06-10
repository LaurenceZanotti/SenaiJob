import React from 'react'
import logo from '../assets/logo.png'

function Menu() {
    return (
        <div className="menu_container">
            <div>
                <img src={logo} alt=""/>
                <h1>JOB</h1>
            </div>
            <div>
                <img src="" alt=""/>
                Home
            </div>
            <div>
                <img src="" alt=""/>
                Meu perfil
            </div>
            <div>
                <img src="" alt=""/>
                Minhas vagas
            </div>
        </div>
    )
}

export default Menu
