import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Cards from './componentes/cards/Cards.jsx'
import Nav from './componentes/nav/Nav.jsx';
import axios from 'axios';
import About from './componentes/about/About.jsx';
import Detail from './componentes/detail/Detail.jsx';
import NotFound from './componentes/notFound/NotFound.jsx';
import Form from './componentes/form/Form.jsx';
import Favorites from "./componentes/favorites/Favorites"
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions.js';



const URL = "https://rickandmortyapi.com/api/character";
const API_KEY = 'leoferson07'

const App = () => {
   const navigate = useNavigate();
   const location = useLocation();

const [characters, setCharacters] = useState([]); //se crea un stado local.

async function onSearch(id) {
   try {
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length){
         return alert(`${characterId[0].name} ya existe!`)
      }
         const { data }= await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters([...characters, data]);
            navigate('/home');
         } else {
            alert('¡No hay personajes con este ID!');
         }
   }catch(error){
      alert(error.message);
   }
      }
      const dispatch = useDispatch()
      const onClose = (id)=>{
         setCharacters(characters.filter(char => char.id !== Number(id)));
         dispatch(removeFav(id));
      }
          //* Login
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';


      // function login(userData) {
      //    if (userData.password === PASSWORD && userData.email === EMAIL) {
      //       setAccess(true);
      //       navigate('/home');
      //    } else {
      //       alert("Credenciales incorrectas!");
      //    }
      // }
      async function login(userData) {
         try{
            const { email, password } = userData;
            const URL = 'http://localhost:3001/rickandmorty/login/';
            const { data }= await axios(URL + `?email=${email}&password=${password}`)
            if(data.access){
               setAccess(data.access);
              access && navigate('/home');
              navigate('/home');
              }else{
                 alert("Credenciales incorrectas!");
              }
         }catch(error){
            alert(error.message)
         }
      }
      
   function logout() {
      setAccess(false);
   }
      useEffect(() => {
         //* Logueo automático
         // !access && navigate('/home');
         !access && navigate('/');
      }, [access]);
   
         
   return (
      <div>
         {
            location.pathname !== '/' ? <Nav onSearch={onSearch} logout={logout}/> : null
         }
         <Routes>
            <Route 
            path='/' element={<Form login={login}/>}
            />
            <Route
            path='/home'
            element ={<Cards characters={characters} onClose={onClose}/>}
            />
            <Route
            path='/about'
            element={<About/>}
            />
             <Route
            path='/detail/:id'
            element={<Detail/>}
            />
            <Route
            path='/favorites'
            element={<Favorites onClose={onClose}/>}
            />
            <Route path='*' element={<NotFound/>}/>
         </Routes>
         <hr />
      </div>
   );
}

export default App;