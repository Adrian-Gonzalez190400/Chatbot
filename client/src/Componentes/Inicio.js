<<<<<<< HEAD
=======
import { Component, useImperativeHandle }  from 'react';
>>>>>>> 66e8dc8a45312670416b0a20342843c2ec99845a
import imagenItsur from "../files/logo_itsur.jpg"
import { Navigate } from "react-router-dom";
import React from 'react';
import '../css/style.css'

//const handleClick = () => history.push('/chatea');

export const Inicio = () => {
    const [goToChatBot, setGoToChatBot] = React.useState(false);

if (goToChatBot){
    return <Navigate to="/chatea"/>
}

    return (
        <div>
            <section className="main">
                <section className="articles">
                    <article className = "introduccion">
                        <div>
                            <h2 id="pregunta_inicial">¿Tienes alguna duda sobre el ITSUR?</h2>
                            <p id="descripcion_inicial">Sabemos que ser universitario es complicado. Aquí te presentamos el chat-bot que te resolverá algunas de tus dudas sobre la institución.</p>    
                            <div className='globo_inicio' onClick={() => {setGoToChatBot(true);}}><div className = "globo_dialogo izq"><center><i>¡Comienza a chatear ya! ➜</i></center></div></div>
                        </div>
                    </article>
                </section>   
                <aside id="logo_itsur">
                    <img src={imagenItsur} width="370px" height="370px"  alt="imagen itsur"></img>
                </aside> 
            </section>
        <footer></footer>
        </div>
    )
}