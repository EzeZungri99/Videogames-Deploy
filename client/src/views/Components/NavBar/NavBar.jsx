import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar  from "../SearchBar/SearchBar.jsx";
// import FilterOrigin from "../Filter/Filter";

const NavBar =()=>{
    return(
        <div className={style.conteiner}>
                      <button>
            <Link className={style.link} to="/" >Landing</Link>
            </button>
            
          
          
             <button>
            <Link className={style.link} to="/home" >Home</Link>
            </button>  



            <button>
            <Link className={style.link} to="/create" >Form</Link>
            </button>





            <button>
            <Link className={style.link} to="/videogames/:id" >Detail</Link>
            </button>
            



            <SearchBar></SearchBar>
            {/* <FilterOrigin></FilterOrigin> */}


        </div>
    )

}
export default NavBar