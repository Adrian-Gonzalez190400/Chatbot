import React  from 'react';
import '../css/chatBot.css'
import Dialogo from '../Componentes/Dialogo'
// Componente que genera todos los globitos dde dialogo con los mensajes guardados en sessionStorage
class ListaDeMensajes extends React.Component{

    getConversacion(){
        var chatMsgs = []
        if(sessionStorage.getItem('chat')==null){
            chatMsgs = sessionStorage.setItem('chat','[]');
            var chat=JSON.parse(sessionStorage.getItem('chat')); 
            chat.push({
                'sender':'Bot',
                'msg':"¡Hola, halcón! ¿En qué te puedo ayudar?"
            });
            chat.push({
                'sender':'Bot',
                'msg':"Tenemos información sobre: \n • Correos de maestros. \n • Donde ubicar a maestros en el ITSUR.\n • Ubicación de oficinas. \n • Entre otros temas."
            });
            sessionStorage.setItem('chat',JSON.stringify(chat));
        }else if(sessionStorage.getItem('ultMensaje')!=null){
            var chat=JSON.parse(sessionStorage.getItem('chat')); 
            var nuevoMsg = sessionStorage.getItem('ultMensaje');
            sessionStorage.removeItem('ultMensaje');
            let url = "/api/"+nuevoMsg.toString();
            fetch(url).then(
                response => response.json()
            ).then(
                data =>{
                    chat.push({
                        'sender':'Bot',
                        'msg':data.response
                    })
                    sessionStorage.setItem('chat',JSON.stringify(chat));
                    chatMsgs = JSON.parse(sessionStorage.getItem('chat'));
                    this.state = { mensajes: chatMsgs}
                    this.forceUpdate();
                } 
            )   
            
        }
        chatMsgs = JSON.parse(sessionStorage.getItem('chat'))
        this.state = { mensajes: chatMsgs}
    }

    render(){   
        this.getConversacion()    
        return(
            <center> <div className="ScrollStyle" >
            {
                this.state.mensajes.map((msg, index)=> {
                    return <Dialogo msg={msg.msg} key={index} sender={msg.sender}/>
                })
            }
            </div></center>
        )
    }
}

export default ListaDeMensajes
