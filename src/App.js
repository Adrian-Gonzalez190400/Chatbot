import './App.css';
import { RouterPrincipal } from './rutas/RouterPrincipal';
import {ChatKommunicate} from './Componentes/ChatKommunicate';
{/*import Chat from './Componentes/Chat';
import SignIn from './Componentes/Chat';
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'*/}

function App() {
  {/*const [user] = useAuthState(auth)*/}
  return (
    <div className="App">
      <RouterPrincipal/>
      <ChatKommunicate/>
      {/*{user ? <Chat /> : <SignIn />}*/}
      
      
    </div>
  );
}

export default App;
