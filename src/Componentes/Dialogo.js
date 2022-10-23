import React  from 'react';
import '../css/chatBot.css'
class Dialogo extends React.Component{
    constructor(props){
        super(props)
        this.state = {msg: "..."}
    }
    /*componentDidMount(){
        setTimeout(()=>{}, 3000)
    }*/
    render(props){
        return (
            <div className={this.props.sender=="Bot" ? "globo_dialogo izq" : "globo_dialogo_der"}>{this.props.msg}</div>
        )
    }
}


export default Dialogo