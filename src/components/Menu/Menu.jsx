import React, {useState} from 'react'
import logo from '../../assets/logo.png'
import house from '../../assets/icons/house.png'
import user from '../../assets/icons/user.png'
import menu from '../../assets/icons/menu.svg'
import './Menu.css'
import {MenuContext} from '../App'


function Menu() {
    const [show, setShow] = useState('hide-menu')
    const menuContext = useContext(MenuContext)

    if (menuContext.menu)
    return (
        <div className="menu_container hide-menu">
            <div role="button">
                <img src={logo} alt="Logo SENAI" className="logo"/>
                <h1 className="job">JOB</h1>
            </div>
            <br/>
            <div role="button" className="mb-3 mt-3">
                <img src={house} alt="Icone home"/>
                <span className="d-inline-block mt-2">Home</span>
            </div>
            <div role="button" className="mb-3 mt-3">
                <img src={user} alt="Icone usuário"/>
                Meu perfil
            </div>
            <div role="button" className="mb-3 mt-3">
                <img src={menu} alt="Icone vagas"/>
                Minhas vagas
            </div>
        </div>
    )
}

export default Menu
