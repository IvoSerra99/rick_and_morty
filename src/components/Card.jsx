import { Link } from "react-router-dom";
export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   
   return (
      <div>
         <img src={image} alt={name}></img>
         <Link to={`/detail/${id}`} >
            <h3 className="card-name">{name}</h3>
         </Link>
         <h2>Status : {status}</h2>
         <h2>Specie : {species}</h2>
         <h2>Gender : {gender}</h2>
         <h2>Origin : {origin}</h2>
         <button onClick={() => onClose(id)}>X</button>
      </div>
   );
}
