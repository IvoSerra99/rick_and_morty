import { Link } from 'react-router-dom';
 import { addFav, removeFav } from '../../redux/action';
 import {connect} from 'react-redux'
 import { useState, useEffect } from 'react';

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
   const [isFav, setIsFav] = useState(false);

  const handleFavorite = () =>{
    isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose});
    setIsFav(!isFav)
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites, id]);
   return (
      <div>
         {
          (
            <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>) 
        }
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
const mapDispatchToProps = (dispatch)=>{
   return {
     addFav: (character) => dispatch(addFav(character)),
     removeFav: (id) => dispatch(removeFav(id)),
   }
 };
 
 const mapStateToProps =(state)=>{
   return{
     myFavorites: state.myFavorites
   }
 };

 export default connect(mapStateToProps,mapDispatchToProps)(Card)
