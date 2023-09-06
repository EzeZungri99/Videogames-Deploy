import styles from "./SearchBar.module.css";
import {getByName} from "../../../redux/actions.js"
import {useDispatch} from "react-redux"


const SearchBar = () => {
const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(getByName(e.target.value));
  };


 const searchIcon = "https://i.ibb.co/0FjXF0S/busqueda.png"


  return (
    <div className={styles.divMayor}>



{/* <div class="search-box">
    <button class="btn-search"><i class="fas fa-search"></i></button>
    <input type="text" class="input-search" placeholder="Type to Search...">
  </div> */}

<div className={styles['search-box']}>
<button className={styles['btn-search']} ><i class="fas fa-search"></i></button>
      <input
        className={styles['input-search']}
        placeholder="Search a Videogame..."
        type="text"
        onChange={handleChange}
      /> 
  <div className={styles['input-search-icon']} style={{ backgroundImage: `url(${searchIcon})` }}></div>

      {/* <img src="https://i.ibb.co/0FjXF0S/busqueda.png" alt="busqueda" border="0"/> */}
      

</div>
    </div>
  );
};

export default SearchBar