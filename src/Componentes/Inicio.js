
import imagenItsur from "../files/itsur.png"
import '../css/style.css'

export const Inicio = () => {
    return (
        <div>
            {/* <header>
                <nav>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="chatbot.html">Chatea</a></li>
                        <li><a href="about.html">About us</a></li>
                    </ul> 
                </nav>
            </header>*/}
            <section class="main">
                <section class="articles">
                    <article class = "introduccion">
                        <div>
                            <h2 id="pregunta_inicial">¿Tienes alguna duda sobre el ITSUR?</h2>
                            <p>Sabemos que ser universitario es complicado.Aquí te presentamos el chat-bot que te resolverá algunas de tus dudas sobre la institución.</p>    
                            <div class = "dialogo_izq">¡Comienza a chatear ya!</div>
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