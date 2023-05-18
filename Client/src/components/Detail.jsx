import axios from "axios";
import { useState, useEffect} from "react";
import { useParams, Link} from "react-router-dom";

function Detail(){
 const {id} = useParams();
 const [character, setCharacter] = useState({});
 useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (
        <div>
            <h1>Soy el Detail de: {character.name}</h1>
            <ol>
                <li>
                    <img src={character.image && character.image} alt={character.name && character.name} />
                </li>
                <h2>Detalles de personaje:</h2>
                <li>Status :{character.status && character.status}</li>
                <li>Specie :{character.species && character.species}</li>
                <li>Gender :{character.gender && character.gender}</li>
                <li>Origin :{character.origin?.name && character.origin?.name}</li>
            </ol>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    );
}
export default Detail;