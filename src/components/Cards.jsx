import Card from "./Card";
import style from "../modules/Cards.module.css";
export default function Cards({characters, onClose}) {
  
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
