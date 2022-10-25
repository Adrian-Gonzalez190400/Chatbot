import React, { Component }  from 'react';
import imagenItsur from "../files/itsur.png"
import logo from "../files/logo_chatbot.png"


import '../css/style.css'

export const AcercaDe = () => {
    return (
                <section className="main_about_us">
                <section className="articles_about_us">
                <article id="equipo">
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <div class="container">
                    
                                    <h2>Aurora Perez Calderon</h2>
                                    <p class="title">Estudiante de Ing. Sistemas Computacionales</p>
                                    <p>s19120121@alumnos.itsur.edu.mx</p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <div class="container">
                                
                                    <h2>José Adrián González García</h2>
                                    <p class="title">Estudiante de Ing. Sistemas Computacionales</p>
                                    <p>s19120195@alumnos.itsur.edu.mx</p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                
                                <div class="container">
                                
                                    <h2>Karyme Jocelyn Nava Osorio</h2>
                                    <p class="title">Estudiante de Ing. Sistemas Computacionales</p>
                                    <p>s19120124@alumnos.itsur.edu.mx</p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <div class="container">
                                
                                    <h2>Andrea Paola Martinez Lopez</h2>
                                    <p class="title">Estudiante de Ing. Sistemas Computacionales</p>
                                    <p>s19120125@alumnos.itsur.edu.mx</p>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="card">
                                <div class="container">
                                
                                    <h2>Giovanni de Jesus Alejo Calderon</h2>
                                    <p class="title">Estudiante de Ing. Sistemas Computacionales</p>
                                    <p>s19120147@alumnos.itsur.edu.mx</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="container" >
                                  <img src={logo} width="200px" height="200px"></img>

                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section><aside id="logo_itsur">
            </aside>
        </section>
    )
}
