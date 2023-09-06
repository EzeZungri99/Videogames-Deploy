// import styles from "./Filter.module.css";
// import { getFilter, getGenres,filterByGenre } from "../../../redux/actions.js";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { useEffect } from "react";

// const FilterOrigin = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getGenres());
//   }, [dispatch]);
//   const [state, setState] = useState({
//     origin: "all",
//     genre: "all",
//     sort: "asc",
//   });

//   let videogameCopy = useSelector((state) => state.videogamesCopy);
//   // const genres = useSelector((state) => state.genres);
//   // const [selectedGenres, setSelectedGenres] = useState([]);
//   // console.log(selectedGenres);

//   let [videogameFilter, setVideogameFilter] = useState(...videogameCopy);
//   console.log(videogameFilter);

//   const filterOrigin = (e) => {
//     const evaluation = e.target.value;

//     if (evaluation === "bdd") {
//       console.log("esto es bdd");
//       setState({ ...state, origin: e.target.value });
//       setVideogameFilter(
//         videogameCopy.filter((e) => {
//           return typeof e.id !== "number";
//         })
//       );
//     } else if (evaluation === "api") {
//       setState({ ...state, origin: e.target.value });
//       setVideogameFilter(
//         videogameCopy.filter((e) => {
//           return typeof e.id == "number";
//         })
//       );
//     } else {
//       setState({ ...state, origin: e.target.value });
//       setVideogameFilter(videogameCopy);
//     }
//   };

//   //       const filterGenres = (e) => {
//   //         if(selectedGenres.includes(e.target.value)){
//   //             const deleteFilter = selectedGenres.filter((g)=>{
//   // console.log(g);
//   //                 return g !== e.target.value
//   //                 ;
//   //             })
//   //             setSelectedGenres(deleteFilter)
//   //         }
//   //         else if(!selectedGenres.includes(e.target.value)){; setSelectedGenres([...selectedGenres, e.target.value])}

//   //         const filteredByGenre = videogameFilter.filter((videogame) =>
//   //               selectedGenres.every((genre) => videogame.genres.includes(genre))
//   //             );

//   //         setVideogameFilter(filteredByGenre)

//   // const filterGenres = (e) => {
//   //   if (selectedGenres.includes(e.target.value)) {
//   //     const deleteFilter = selectedGenres.filter((g) => g !== e.target.value);
//   //     setSelectedGenres(deleteFilter);
//   //   } else if (!selectedGenres.includes(e.target.value)) {
//   //     setSelectedGenres([...selectedGenres, e.target.value]);
//   //   }

//   //   const filteredByGenre = videogameFilter.filter((videogame) =>
//   //     selectedGenres.every((genre) => videogame.genres.includes(genre))
//   //   );
//   //   console.log(filteredByGenre);
//   //   setState({ ...state, genres: e.target.value });
//   //   setVideogameFilter(filteredByGenre);
//   // };

//   //   const sortedRating = [...state.videogamesCopy]; // Crear una copia del array
//   //   sortedRating.sort((a, b) => {
//   //     const ratingA = parseFloat(a.rating);
//   //     const ratingB = parseFloat(b.rating);
//   //     if (isNaN(ratingA) || isNaN(ratingB)) return -1;
//   //     if (ratingA > ratingB) return action.payload === 'ratmax' ? 1 : -1;
//   //     if (ratingA < ratingB) return action.payload === 'ratmax' ? -1 : 1;
//   //     return 0;
//   //   });

//   // selectedGenres.every((e)=>{
//   //    return videogameCopy.genres.includes(e)
//   // })

//   //     const evaluation = e.target.value
//   //     if(evaluation === "bdd"){
//   //         console.log("esto es bdd");
//   //         setVideogameFilter(videogameCopy.filter((e) => {
//   //             return typeof e.id !== "number"}))
//   //        }
//   //        else if( evaluation === "api"){
//   //         setVideogameFilter(videogameCopy.filter((e)=> {return typeof e.id == "number"}))
//   //        }
//   //        else {setVideogameFilter(videogameCopy)}}

//   // function sortGamesAlphabeticallyByFirstLetter(games) {
//   //   return games.sort((a, b) => {
//   //     const nameA = a.name.charAt(0).toLowerCase();
//   //     const nameB = b.name.charAt(0).toLowerCase();
//   //     if (nameA < nameB) {
//   //       return -1;
//   //     }
//   //     if (nameA > nameB) {
//   //       return 1;
//   //     }
//   //     return 0;
//   //   });
//   // }

//   const handleChange = (e) => {
//     dispatch(getFilter(videogameFilter));
//   };

//   const handleReset = (e) => {
//     setSelectedGenres([]);
//     dispatch(getFilter(videogameCopy));
//   };

//   return (
//     <div>
//       <input className={styles.inputSearch} onChange={handleChange} />

//       <select value={state.origin} onChange={filterOrigin} name="" id="">
//         <option hidden>Filter by origin:</option>
//         <option value="bdd">bdd</option>
//         <option value="api">api</option>
//         <option value="all">all</option>
//       </select>

//       <div>
//         <select value={state.genre} onChange={(e) => filterGenres(e)}>
//           {" "}
//           {genres &&
//             genres.map((g) => (
//               <option value={g.name} key={g.id}>
//                 {g.name}
//               </option>
//             ))}
//         </select>

//         <select
//           onChange={filterGenres} //cambiar
//           name=""
//           id=""
//         >
//           <option hidden>Sort by Alphabet:</option>
//           <option value="asc">A-Z</option>
//           <option value="desc">Z-A</option>
//         </select>
//         <select
//           value={state.sort}
//           onChange={filterGenres} //cambiar
//           name=""
//           id=""
//         >
//           <option hidden> Sort by Rating:</option>
//           <option value="ratmin">Rating Max</option>
//           <option value="ratmax">Rating Min</option>
//         </select>
//       </div>
//       <button onClick={handleChange}>Filtrar</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

// export default FilterOrigin;
