import {useState} from 'react';

function Texte(props){
    /*zone d'affichage du texte*/
    const [texte, setTexte] = useState(props.texte);

    return(
        <div>
            <div>{texte}</div>
        </div>
    );
}

export default Texte;
        