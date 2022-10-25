import React, { Component }  from 'react';
import imagenItsur from "../files/logo_itsur.jpg"
import '../css/style.css'

export const Inicio = () => {
    return (
        <div>
            <section className="main">
                <section className="articles">
                    <article className = "introduccion">
                        <div>
                            <h2 id="pregunta_inicial">¿Tienes alguna duda sobre el ITSUR?</h2>
                            <p>Sabemos que ser universitario es complicado.Aquí te presentamos el chat-bot que te resolverá algunas de tus dudas sobre la institución.</p>    
                            <div className = "globo_dialogo izq">¡Comienza a chatear ya!</div>
                        </div>
                    </article>
                </section>   
                <aside id="logo_itsur">
                    <img src={imagenItsur} width="300px" height="300px"></img>
                </aside> 
            </section>
        <footer></footer>
        </div>
    )
}
