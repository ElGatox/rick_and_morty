import Cards from './components/Cards/Cards.jsx';
import { useState } from 'react';
import Nav from './components/Nav/Nav';
import { Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Detail from "./components/Detail/Detail.jsx"
import About from './components/About/About.jsx';
import Form from './components/Form/Form.jsx';
import { useEffect } from 'react';






function App() {
   const location = useLocation();
 
   const onSearch = (id) => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      })
      
   }
   const [characters,setCharacters] = useState([]);
   const [access, setAcces] = useState(false)
   const username = "prueba@gmail.com"
   const password = "123asd"
   const navigate = useNavigate()
   useEffect (()=> {
      !access && navigate("/")
   }, [access])

   function login(userData) {
      if (userData.username === username && userData.password === password)
         setAcces(true);
      navigate("/home");
   } 
 
  
   const onClose = (id) => {
      setCharacters(characters.filter((char)=>char.id !== id))

   }
   return (
     
      
      <div className='App'>
         <div>
         {location.pathname !== "/" && <Nav onSearch={onSearch} />}
         </div>
         <hr/>
          <Routes>
            <Route path="/" element={<Form login={login} />}/>
            <Route path="home" element={<Cards characters={characters}  onClose={onClose}/>}/>
            <Route path="/detail/:id" element={<Detail />}>
            </Route>
            <Route path="about" element={<About />} />
        
         </Routes>
      </div>
      
       
   );
}


export default App;
