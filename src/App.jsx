import { useState } from "react";

import Perfil from "./components/Pefil";
// import Form from "./components/Formulario";
import ReposList from "./components/RepoListq";

import './global.css';

function App() {
  const [formIsVisible, setformIsVisible] = useState(true);
  const [userName, setUserName] = useState('');

  return (
    <>
    <input placeholder="Digite um usuário do github" className="input" type="text" onBlur={event => setUserName(event.target.value)}/>

    {userName.length > 4 && (
      <>
      <Perfil userName={userName}/>
      <ReposList userName={userName}/>
      </>
    )}
    {/* {formIsVisible && <Form/>}
    <button onClick={() => setformIsVisible(!formIsVisible)} type="button">toggle form</button> */}
    </>
  )
}

export default App
