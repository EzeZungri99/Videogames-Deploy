import { GET_GAMES, POST_VIDEOGAME, GET_GENRES, GET_PLATFORMS, GET_BY_ID,GET_FILTER,GET_BY_NAME, ORDER_BY_NAME, ORDER_BY_RATING, FILTER_BY_GENRE,FILTER_API_DB } from "./actions.js"

const initialState = {
    videogames: [],
    videogamesCopy: [],
    genres: [],
    gameId: [],
    platforms: [],


}

export default function reducer(state = initialState, action){
    switch (action.type){
        case GET_GAMES: return{
            ...state,
            videogames : action.payload,
            videogamesCopy:action.payload}
        
        case POST_VIDEOGAME:return {
                  ...state,
                };
        case GET_GENRES:return {
            ...state,
            genres: action.payload};

        case GET_PLATFORMS:return{
            ...state,platforms:action.payload
        };

        case GET_BY_ID : return{
            ...state,
            gameId: action.payload,
        }


        case FILTER_BY_GENRE:
            const allVideogames = state.videogamesCopy;
            const filtered =
              action.payload === "All"
                ? allVideogames
                : allVideogames.filter((e) => e.genres.includes(action.payload));
            return {
              ...state,
              videogames: filtered,
            };
      
          case ORDER_BY_RATING:
            const allVideogames2 = state.videogamesCopy;
            const sorted =
              action.payload === "Ascendente"
                ? allVideogames2.sort((a, b) => Number(a.rating) - Number(b.rating))
                : allVideogames2.sort((a, b) => Number(b.rating) - Number(a.rating));
            return {
              ...state,
              videogames: sorted,
            };
      
          case ORDER_BY_NAME:
            let sort2 = [...state.videogamesCopy];
            if (action.payload !== "-") {
              sort2 =
                action.payload === "A-Z"
                  ? sort2.sort((a, b) => {
                      if (a.name > b.name) {
                        return 1;
                      }
                      if (b.name > a.name) {
                        return -1;
                      }
                      return 0;
                    })
                  : sort2.sort((a, b) => {
                      if (a.name > b.name) {
                        return -1;
                      }
                      if (b.name > a.name) {
                        return 1;
                      }
                      return 0;
                    });
            }
            return {
              ...state,
              videogames: sort2,
            };
      
        //   case GET_BY_NAME:
        //     return {
        //       ...state,
        //       videogames: action.payload,
        //     };
      
       
        case GET_FILTER : return{
            ...state,
            videogames: action.payload,
        }
        
        default:
            return state
       
        case  GET_BY_NAME : return{
            ...state,
            videogames: action.payload,
        }
        case FILTER_API_DB:
            if (action.payload === "api") {
              return {
                ...state,
                videogames: [
                  ...state.videogamesCopy.filter(
                    (game) => typeof game.id === "number"
                  ),
                ],
              };
            } else if (action.payload === "bdd") {
              return {
                ...state,
                videogames: [
                  ...state.videogamesCopy.filter(
                    (game) => typeof game.id === "string"
                  ),
                ],
              };
            }
        




    }
    
  
}

