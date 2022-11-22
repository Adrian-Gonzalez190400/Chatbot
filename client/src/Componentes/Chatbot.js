import React  from 'react';
import ListaDeMensajes from './ListaDeMensajes';
import '../css/chatBot.css';


// Componente que simula la página en donde sucede la conversación
class ChatBot extends React.Component{
    
    render(){
        let nuevoMensaje = (nuevoMsg) => {
            if(sessionStorage.getItem('chat')==null){
                sessionStorage.setItem('chat','[]');
            }
            var chat=JSON.parse(sessionStorage.getItem('chat')); 
            chat.push({
                'sender':'Usuario',
                'msg':nuevoMsg
            });
            sessionStorage.setItem('ultMensaje',JSON.stringify(nuevoMsg));
            sessionStorage.setItem('chat',JSON.stringify(chat));
            document.getElementById("mensajeTxt").value = ""
            this.forceUpdate();
        }
        return (
            <div>
                <ListaDeMensajes/>
                <input type="text" id="mensajeTxt" placeholder='Escribe tu pregunta aquí...'></input>
                <button onClick={e => nuevoMensaje(document.getElementById("mensajeTxt").value)} > ➤ </button>
            </div>
        )
    }
}


export default ChatBot