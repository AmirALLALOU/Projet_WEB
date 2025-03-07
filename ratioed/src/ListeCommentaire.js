import { useState } from "react";
import Commentaire from "./Commentaire";
import axios from "axios";

function ListeCommentaire(props) {
    
    const {currentUser} = props;
    const [commentaires, setCommentaires] = useState([]);
    const [req,setReq] = useState(false);

    const getCommentaires = () => {
            const configuration = {
                method: "GET",
                url: "/api/commentaire/",
            };
            axios(configuration)
                .then((response) => {
                    console.log(response);
                    setCommentaires([]);
                    setCommentaires(response.data.result);
                })
                .catch((error) => {
                    console.log(error);
                });    

        setReq(true);
    };

    
    const formatDate = (date) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(date).toLocaleDateString('fr-FR', options);
    }

    
    return (
        <div>
            <h2>Commentaires</h2>
            {req===false ? getCommentaires() : null}
            <button onClick={getCommentaires}>Refresh</button>
            {commentaires.toReversed().map((commentaire) => (
                <ul>
                    <Commentaire key={commentaire.id} commentaire={commentaire} formatDate={formatDate} currentUser={currentUser}/>
                </ul>
            ))}

        </div>
    );

}

export default ListeCommentaire;
    