import './App.css';
import React, { useState, useEffect } from 'react';
import Cards from './components/Cards.jsx';
import About from "./components/About.jsx"
import Detail from "./components/Detail.jsx"
import Nav from './components/Nav.jsx';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/Form';

const EMAIL = 'ivoozmarserra@gmail.com';
const PASSWORD = 'asd123';

function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();
   const [access, setAccess] = useState(false);

   const navigate = useNavigate()
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
};

useEffect(() => {
   !access && navigate('/');
 }, [access, navigate]);

const onClose = (id) =>{
   setCharacters(
      characters.filter((char)=> {
        return char.id !== Number(id)
      }) 

   )
};
   return (
      <div className='App'>
      {pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
         <Route path='/' element= {<Form login={login}/>}/>
         <Route path='/home' element={<Cards onClose={onClose} characters= {characters}/>} />   
         <Route path='/about' element={<About/>}/>
         <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </div>
   );
}

export default App;
