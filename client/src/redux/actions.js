import axios from "axios"
// import{GET_GAMES} from "./actionsTypes"
export const GET_GAMES = 'GET_GAMES'
export const GET_GAMES_BDD = 'GET_GAMES_BDD'
export const GET_GAMES_API = 'GET_GAMES_API'
export const POST_VIDEOGAME = "POST_VIDEOGAME"
export const GET_GENRES = "GET_GENRES"
export const GET_PLATFORMS = "GET_PLATFORMS"
export const GET_BY_ID = "GET_BY_ID"
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_FILTER = "GET_FILTER"

export const ORDER_BY_NAME = "SORT_BY_NAME"
export const ORDER_BY_RATING = "FILTER_BY_RATING"
export const FILTER_BY_GENRE = "FILTER_BY_GENRE"
export const FILTER_API_DB = "FILTER_API_DB"




export function getAllGames(){
    return async function (dispatch){
        try {
            const response = await axios.get("/videogames");
            console.log(response);
            dispatch({
                type: GET_GAMES,
                payload: response.data
            })
        } catch (error) {
            console.error("Error while getting videogamesAll:", error);
        }
    }
}

export function getGamesBdd(){
    return async function (dispatch){
        try {
            const response = await axios.get("/videogamesBDD");

            dispatch({
                type: GET_GAMES_BDD,
                payload: response.data
            })
        } catch (error) {
            console.error("Error while getting videogames bdd:", error);
        }
    }
}

export function getGamesApi(){
    return async function (dispatch){
        try {
            const response = await axios.get("/videogamesApi");
            dispatch({
                type: GET_GAMES_API,
                payload: response.data
            })
        } catch (error) {
            console.error("Error while getting videogames Api:", error);
        }
    }
}

export function getGameDetail(){
    return async function (dispatch){
        try {
            const response = await axios.get("/videogames");
            console.log(response);
            dispatch({
                type: GET_GAMES_API,
                payload: response.data
            })
        } catch (error) {
            console.error("Error while getting detail:", error);
        }
    }
}

export function postVideogame(payload) {
    return async function (dispatch) {
        try{
      const response = await axios.post("/videogames", payload)
          dispatch({
            type: POST_VIDEOGAME,
            payload: response.data,
          })
        }catch(error){console.error("Error while gettiong postVideogame", error)}

        ;
    };
  }


export function getGenres(){

    return async function (dispatch){
     try{
              const response = await axios.get("/genres");
              return dispatch({
                type: GET_GENRES,
                payload: response.data,
              });
    }catch(error){console.error("Error while getting genres", error)}
          }; 
          
     }
export function getPlatforms(){

        return async function (dispatch){
         try{
                  const response = await axios.get("/platforms");
                  return dispatch({
                    type: GET_PLATFORMS,
                    payload: response.data,
                  });
        }catch(error){console.error("Error while getting Platforms", error)}
              }; 
              
         }
    

 export function getById(id) {
            return async function (dispatch){
                try {
                    const response = await axios.get(`/videogames/${id}`)
                   return  dispatch({
                        type: GET_BY_ID,
                        payload: response.data
                    })
                } catch (error) {
                    console.error("Error while getting Get By Id", error);
                }
            }
        }
export function getByName(name){
     return async function (dispatch){
            try {
             const response = await axios.get(`/videogames/name?name=${name}`);
             console.log(response);
            dispatch({
                        type: GET_BY_NAME,
                        payload: response.data
                    })
                } catch (error) {
                    console.error("Error while getting get by name", error);
                }
            }
        }
        

        export function getFilter(payload){
            return {
                        type: GET_FILTER,
                        payload,

            }
        }


        // export function filterDatabase2(){
        //     return async function (dispatch){
        //         try {
        //             const response = await axios.get("/videogamesBDD");
        //             console.log(response);
        //             dispatch({
        //                 type: OTRA_FUNCION2,
        //                 payload: response.data
        //             })
        //         } catch (error) {
        //             console.error("Error while getting videogamesAll:", error);
        //         }
        //     }
        // }
        
        

        export const filterByGenre = (payload) => {
            return {
              type: FILTER_BY_GENRE,
              payload,
            };
          };
          
          export const orderByRating = (payload) => {
            console.log(payload);
            return {
              type: ORDER_BY_RATING,
              payload,
            };
          };
          
          export const orderByName = (payload) => {
            return {
              type: ORDER_BY_NAME,
              payload,
            };
          };
export const  filterApiDb = (payload) =>{
    return{
        type: FILTER_API_DB,
        payload
    }
}