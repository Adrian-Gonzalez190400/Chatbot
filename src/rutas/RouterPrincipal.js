import React from 'react'
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import {Inicio} from '../Componentes/Inicio';
import ChatBot from '../Componentes/ChatBot'
import '../css/style.css';



export const RouterPrincipal = () => {
  
    return (
        <BrowserRouter>
        <header>
                <nav>
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "activado" : ""}>Inicio</NavLink></li>
                        <li><NavLink to="/chatea" className={({ isActive }) => isActive ? "activado" : ""}>Chatea</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "activado" : ""}>About us</NavLink></li>
                    </ul>
                </nav>
            </header>
            <section>
                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/chatea" element={<ChatBot/>} />
                   {/* <Route path="/about" element={<AcercaDe />} />*/}
                </Routes>
              
            </section>
        </BrowserRouter>


    )
}