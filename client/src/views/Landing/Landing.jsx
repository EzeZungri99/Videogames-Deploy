import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getAllGames } from "../../redux/actions"
import { useEffect } from "react"
import s from "./Landing.module.css"




const Landing =()=>{

    const dispatch = useDispatch()
    const videogames = useSelector(state => state.videogames)


    
    useEffect(() => {if(videogames.length < 1){
        dispatch(getAllGames())}
    },[]);
    //hacer pantalla de carga

    return(
        <>
        <button className={s.button}>
        <Link to="/home" className={s.link}> START </Link>
        </button>
        
 
        </>
    )

}
export default Landing