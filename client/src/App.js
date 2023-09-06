
import {Home, Landing,Form,Detail} from "./views/index.js"
import NavBar from "./views/Components/NavBar/NavBar.jsx"
import { Route, useLocation } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3001/'

function App() {

  const location = useLocation()

  return (
    <>
      {location.pathname !== "/" && <NavBar/>}
          <Routes>

      
  
      <Route path="/home" element ={<Home/>} />
     
      
      <Route exact path="/" element ={<Landing/>}/>
      
      <Route path="/create" element ={<Form/>}/>
      <Route path="/videogames/:id" element={<Detail/>}/>


      </Routes>

    </>
  );
}

export default App;
