import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions";
import s from "../Detail/Detail.module.css";
import { useParams } from "react-router-dom";

 
    function Detail() {
      const dispatch = useDispatch();
      const { id } = useParams();

 
    
      useEffect(() => {
        dispatch(getById(id));//ej 55
      }, [dispatch, id]);
    
      const videogame = useSelector((state) => state.gameId);
      console.log(videogame);
    
      let genres = [];
      let platforms = [];

      console.log("este esl name videogame", videogame.name);
    
      if (videogame) {
        console.log("este es el videogame", videogame);
        genres = videogame?.genres?.map((e) => (e.name ? e.name : e)).join(", ");
        platforms = videogame?.platforms
          ?.map((e) => (e.platform ? e.platform : e))
          .join(", ");

          console.log("esto es el platforms", platforms);
      }
      console.log("soy el videogame.image", videogame.background_image);
    
      return (
        <div className={s.container}>
          
          <div >
            <div className={s.info}>
              <h1 className={s.title}>DETALLES   </h1>
            </div>
            {
              
              <div className={s.info}>
                <div><img
                    className={s.imageDetail}
                    
                    src={videogame.background_image}
                    alt={videogame.name}
                  />
                  </div>

             <div>
                <div className="imgContainer">
                  <h1 className={s.title}>{videogame.name}</h1>
                  <h3 className={s.title}> ID: {videogame.id}</h3>
                  <h3 className={s.title}>Popularidad: {videogame.rating}</h3>
                  <h4 className={s.title}>Generos: {genres}</h4>
                  <h4 className={s.title}>Plataformas: {platforms}</h4>
                  
                  </div>
                  
                  <p className={s.title}>Fecha: {videogame.released}</p>
                
                <div className={s.description}>
                  <p>{videogame?.description?.replace(/<[^>]*>?/g, "")}</p>
                </div>
              </div>
              </div>
            }
          </div>
        </div>
      );
    }




export default Detail