import style from "./Card.module.css"

const Card =(props) =>{
    const imageUrl = props.image || props.background_image;

    console.log("esto es el image de card", props);
    return(
        <div className={style.conteiner}>
        {imageUrl && <img src={imageUrl} alt="Game Image" 
className={style.image} />}
        <p className={style.text}>
          Name:
          <br />
          {props.name}
        </p>
        <p className={style.text}>
          Genres:
          <br />
          {props.genres || props.genre}{' '}
        </p>
      </div>
    )

}
export default Card
