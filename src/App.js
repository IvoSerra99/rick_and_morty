import './App.css';
import React, { useState } from 'react';
import Cards from './components/Cards.jsx';
import About from "./components/About.jsx"
import Detail from "./components/Detail.jsx"
import Nav from './components/Nav.jsx';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
function App() {
   const [characters, setCharacters] = useState([]);
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
const onClose = (id) =>{
   setCharacters(
      characters.filter((char)=> {
        return char.id !== Number(id)
      }) 

   )
};
   return (
      <div className='App'>
      <Nav onSearch={onSearch}/>
      <Routes>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />   
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </div>
   );
}

export default App;
