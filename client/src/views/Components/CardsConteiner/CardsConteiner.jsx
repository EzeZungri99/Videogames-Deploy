import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsConteiner.module.css";
import { Link } from "react-router-dom";
import { displayGames } from "../Page/Page.jsx";
import { useState, useEffect } from "react";

import {
  getFilter,
  getGenres,
  filterByGenre,
  orderByRating,
  orderByName,
  getAllGames,
  filterApiDb,
} from "../../../redux/actions.js";

const CardsConteiner = () => {
  const videogamesState = useSelector((state) => state.videogames);
  const [currentPage, setCurrentPage] = useState(1);
  let videogames = displayGames(currentPage, videogamesState);
  const totalPages = Math.ceil(videogamesState.length / 15);

  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);
  let videogameCopy = useSelector((state) => state.videogamesCopy);
  const [order, setOrder] = useState("");
  let [videogameFilter, setVideogameFilter] = useState(...videogameCopy)

  const [state, setState] = useState({
    origin: "all",
    genre: "all",
    sort: "asc",
  });
  
  useEffect(() => {
    dispatch(getAllGames());
  }, []);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const handleSortByName = (e) => {
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
  };

  const handleSortByRating = (e) => {
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
  };

  const handleFilterByGenre = (e) => {
    dispatch(filterByGenre(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
  };

  const handleChange = (e) => {
    dispatch(getFilter(videogameFilter));
  };

//   const handleReset = (e) => {
//     setSelectedGenres([]);
//     dispatch(getFilter(videogameCopy));
//   };

  // const filterOrigin = (e) => {
  //   const evaluation = e.target.value;

  //   if (evaluation === "bdd") {
  //     console.log("esto es bdd");
  //     setState({ ...state, origin: e.target.value });
  //     setVideogameFilter(
  //       videogameCopy.filter((e) => {
  //         return typeof e.id !== "number";
  //       })
  //     );
  //   } else if (evaluation === "api") {
  //     setState({ ...state, origin: e.target.value });
  //     setVideogameFilter(
  //       videogameCopy.filter((e) => {
  //         return typeof e.id == "number";
  //       })
  //     );
  //   } else {
  //     setState({ ...state, origin: e.target.value });
  //     setVideogameFilter(videogameCopy);
  //   }
  // };

  const handleFilterApiDb = (e) => {
    dispatch(filterApiDb(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
  };

  function goToPreviousPage() {
    setCurrentPage(currentPage - 1);
  }

  // Función para ir a la página siguiente
  function goToNextPage() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className={style.divPadre}>
     <div className ={style.filters}>
        {/* <input className={style.conteiner} onChange={handleChange} /> */}




        <div>
        <select className={style.SortOption} value={state.origin} onChange={(e) => handleFilterApiDb(e)} name="" id="">
          <option hidden>Filter by origin:</option>
          <option value="bdd">bdd</option>
          <option value="api">api</option>
          <option value="all">all</option>
        </select>
        <select className={style.SortOption} onChange={(e) => handleSortByName(e)} >
          <option value="-">Alphabetic</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
        <select className={style.SortOption} onChange={(e) => handleSortByRating(e)}>
          <option value="-">Rating</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select className={style.SortOption} onChange={(e) => handleFilterByGenre(e)}>
          <option value="All">Genres</option>
          {genres.map((g) => (
            <option key={g.id} value={g.name}>
              {g.name}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className={style.conteiner}>
        {videogames.map((videogame) => {
          return (
            <Link className={style.link} key={videogame.id} to={`/videogames/${videogame.id}`}>
              <Card
                id={videogame.id}
                key={videogame.id}
                name={videogame.name}
                genres={videogame.genres}
                image={videogame.image}
                
              />
            </Link>
          );
        })}
      </div>
      <div className={style.button}>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          {"<<Prev"}
        </button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          {"Next>>"}
        </button>
      </div>
    </div>
  );
};

export default CardsConteiner;
