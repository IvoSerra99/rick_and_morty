import { useState } from "react";
import style from "./SearchBar.module.css"
export default function SearchBar({onSearch}) {
   
   const [id, setId]= useState("");

   const handleChange = (event) =>{
      setId(event.target.value)

    };
    
   return (
      <div className={style.container}>
         <input id="search" type='search' onChange={handleChange} value={id}/>
         <button onClick={() => onSearch(id)}>Add</button> 
      </div>
   );
}
