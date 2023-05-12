import Card from "./Card";
import style from "../modules/Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getCharacters} from "../redux/action"
export default function Cards({onClose}) {

  const characters = useSelector((state) => state.characters)
  
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getCharacters())
  }, [characters])


  return (
    <div className={style.container}>
      {characters.map(({id, name, status, species, gender, origin, image}) => {
        return (
          <Card
            id={id}
            key={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
