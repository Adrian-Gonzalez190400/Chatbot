import React  from 'react';
import '../css/chatBot.css'
import Dialogo from '../Componentes/Dialogo'

class ListaDeMensajes extends React.Component{

    getConversacion(){
        var chatMsgs = []
        if(sessionStorage.getItem('chat')==null){
            chatMsgs = sessionStorage.setItem('chat','[]');
            var chat=JSON.parse(sessionStorage.getItem('chat')); 
            chat.push({
                'sender':'Bot',
                'msg':"Hola, en que te ayudo"
            });
            chat.push({
                'sender':'Bot',
                'msg':"Te puedo ayudar con..."
            });
            sessionStorage.setItem('chat',JSON.stringify(chat));
        }
        chatMsgs = JSON.parse(sessionStorage.getItem('chat'))
        this.state = { mensajes: chatMsgs}
    }

    render(){   
        this.getConversacion()     
        console.log(this.state.mensajes)
        this.state.mensajes.map((msg)=> {
            console.log(msg.msg)
        })
        return(
            <div>
            {
                this.state.mensajes.map((msg, index)=> {
                    console.log(index)
                    return <Dialogo msg={msg.msg} key={index} sender={msg.sender}/>
                })
            }
            </div>
        )
    }
}

export default ListaDeMensajes