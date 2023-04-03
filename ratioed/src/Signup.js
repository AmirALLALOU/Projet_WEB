import { useState } from 'react';

function Signin (props) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passOK, setPassOK] = useState(true);
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");

    const getLogin = (evt) => {setLogin(evt.target.value)};
    const getFirstName = (evt) => {setFirstName(evt.target.value)};
    const getLastName = (evt) => {setLastName(evt.target.value)};
    const getPass1 = (evt) => {setPass1(evt.target.value)};
    const getPass2 = (evt) => {setPass2(evt.target.value)};

    const submissionHandler = (evt) => {
        if (pass1 === pass2) setPassOK(true);
        else setPassOK(false);
    }

    const resetHandler = (evt) => {
        setLogin("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setPassOK(false);
        setPass1("");
        setPass2("");

    }

    return (
        <div>
            <label htmlFor="firstname">First name</label>
            <label htmlFor="lastname">Last namezzzzz</label>
            <input id="firstname" value={firstName} onChange={getFirstName}/>
            <input id="lastname" value={lastName}onChange={getLastName}/>
            <label htmlFor="signin_login">Login</label>
            <input id="signin_login" value={login} onChange={getLogin}/>
            <label htmlFor="signin_mdp1">Password</label>
            <input type="password" value={pass1} id="signin_mdp1" onChange={getPass1}/>
            <label htmlFor="signin_mdp2">Password (2)</label>
            <input type="password" value={pass2} id="signin_mdp2" onChange={getPass2}/>
            <button onClick={submissionHandler}>Sign In</button>
            <button onClick={resetHandler}>Reset</button>
            {passOK ? <p></p> : <p style={{color:"red"}}>Erreur: mots de passe différents</p>}
        </div>
    );
}


export default Signin;