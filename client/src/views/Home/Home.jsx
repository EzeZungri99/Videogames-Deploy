import { useEffect, useState } from "react"
import CardsConteiner from "../Components/CardsConteiner/CardsConteiner"
import { getAllGames } from "../../redux/actions.js"
import { useDispatch, useSelector } from "react-redux"
import style from "./Home.module.css"


const Home =()=>{
    const dispatch = useDispatch()
    const videogames = useSelector(state => state.videogames)


    
    useEffect(() => {if(videogames){
        dispatch(getAllGames())}
    },[]);
    return(
        <div className={style} >
        <CardsConteiner/>
        </div>

    )

}
export default Home