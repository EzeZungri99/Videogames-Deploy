import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postVideogame, getGenres, getPlatforms } from "../../redux/actions.js";
import s from "./Form.module.css";
// import {getAllGames,getGamesBdd,getGamesApi,getGameDetail, postVideogame} from "../../redux/actions.js"

// import { Link, useHistory } from "react-router-dom";

const validate = (input) => {
  let errors = {};
 
  if (!input.name) {
    errors.name = "Debe ingresar el nombre";
  }
  if(input.name.length > 19)
  {errors.name = "La Longitud debe ser menor a 20 caracteres"}

  if (!input.platforms.length) {
    errors.platforms = "Debe ingresar la plataforma";
  }
  if (!input.description) {
    errors.description = "Debe ingresar una descripcion";
  }
  if (!input.genres.length) {
    errors.genres = "Debe ingresar el genero";
  }
  if (!input.released.length) {
    errors.released = "22/22/2222";
  }
  if (!input.rating.length) {
    errors.rating = 1;
  }
  return errors;
};
const Form = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);
  // const videogames = useSelector((state) => state.videogames);
  const [errors, setErrors] = useState({});
  console.log(errors);

  const [input, setInput] = useState({
    name: "",
    description: "",
    platforms: [],
    released: "",
    genres: [],
    rating: "",
    background_image: "",
    image:""
  });

  const handleChangeI = (e) => {
    const property = e.target.name;
    const value = e.target.value;
  
    const errorsVali = validate({
      ...input,
      [property]: value,
    });
  
    setErrors({ ...errors, [property]: errorsVali[property] });
  
    setInput((prevInput) => ({
      ...prevInput,
      background_image: value,
      image: value,
    }));
  };
  

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    const errorsVali = validate({
      ...input,
      [property]: value,
    });

    setErrors({ ...errors, [property]: errorsVali[property] });

    setInput({ ...input, [property]: value });
  };

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  // const handleChange = (e) => {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsFields = validate(input);
    setErrors(errorsFields);
    if (!Object.keys(errorsFields).length) {
      dispatch(postVideogame(input));
      setInput({
        name: "",
        description: "",
        platforms: [],
        released: "",
        genres: [],
        rating: "",
        background_image: "",
        image: "",
      });
      alert("Videojuego creado!");
      // history.push("/videogames");
    } else {
      alert("Ingresar todos los campos necesarios");
    }
  };

  const handleGenreSelect = (e) => {
    setInput({
      ...input,
      genres: [...input.genres, e.target.value],
    });
  };

  const handlePlatformSelect = (e) => {
    setInput({
      ...input,
      platforms: [...input.platforms, e.target.value],
    });
  };

  const handleGenresDelete = (e) => {
    setInput({
      ...input,
      genres: input.genres.filter((g) => g !== e),
    });
  };

  const handlePlatformsDelete = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.filter((p) => p !== e),
    });
  };

  const verification = Object.values(errors);

  const verificationUn = verification?.filter((e) => {
    return e !== undefined;
  });

  return (
    <div className={s.container}>
      <h1 className={s.title}>CREAR VIDEOJUEGO</h1>
      <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={s.inputContainer}>
          <div>
            <label className={s.form__label}>Nombre:</label>
            <br />
            <input
              className={s.input}
              onBlur={(e) => {
                handleChange(e);
              }}
              onChange={(e) => handleChange(e)}
              type="text"
              value={input.name}
              name="name"
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div>
            <label className={s.form__label}>Descripcion:</label>
            <br />
            <input
              className={s.input}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => {
                handleChange(e);
              }}
              type="text"
              value={input.description}
              name="description"
            />
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </div>
          <div>
            <label className={s.form__label}>Fecha:</label>
            <br />
            <input
              className={s.input}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => {
                handleChange(e);
              }}
              type="date"
              value={input.released}
              name="released"
            />
          </div>
          <div>
            <label className={s.form__label}>Valoracion:</label>
            <br />
            <input
              className={s.input}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => {
                handleChange(e);
              }}
              type="number"
              min="1"
              max="5"
              value={input.rating}
              name="rating"
            />
          </div>
          <div>
            <label className={s.form__label}>Imagen:</label>
            <br />
            <input
              className={s.input}
              onChange={(e) => handleChangeI(e)}
              onBlur={(e) => {
                handleChangeI(e);
              }}
              type="text"
              value={input.background_image && input.image}
              name="background_image"
            />
          </div>
          <p className={s.form__label}>Generos:</p>
          {
            <select
              onChange={(e) => handleGenreSelect(e)}
              onBlur={(e) => {
                handleChange(e);
              }}
            >
              {" "}
              {genres &&
                genres.map((g) => (
                  <option value={g.name} key={g.id}>
                    {g.name}
                  </option>
                ))}
            </select>
          }
          <div className={s.inputG}>
            {input.genres.map((e) => (
              <div value={e} key={e.id} className={s.text}>
                <p className={s.text}>{e}</p>
                <button
                  className={s.form__button}
                  onClick={() => handleGenresDelete(e)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <p className={s.form__label}>Plataforma:</p>
          {
            <select
              onChange={(e) => handlePlatformSelect(e)}
              onBlur={(e) => {
                handleChange(e);
              }}
            >
              {" "}
              {platforms.map((p) => (
                <option value={p}>{p}</option>
              ))}
            </select>
          }
          <div className={s.inputG}>
            {input.platforms.map((e) => (
              <div value={input.platforms} className={s.text}>
                <p className={s.text}>{e}</p>
                <button
                  key={e}
                  className={s.form__button}
                  onClick={() => handlePlatformsDelete(e)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button
            className={s.submit}
            type="submit"
            disabled={verificationUn.length > 0 || verification.length === 0}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

//         <form className={style.container}>

//             <div>
//                 <label>Name</label>
//                 <input type="text" value= {form.name} onChange={changeHandler} name="Name" />
//             </div>

//             <div>
//                 <label>Image</label>
//                 <input type="text" value= {form.image} onChange={changeHandler} name="Image"/>
//             </div>

//             <div>
//                 <label >Description</label>
//                 <input type="text" value = {form.description} onChange={changeHandler} name ="Description" />
//             </div>

//             <div>
//                 <label>Id</label>
//                 <input type="text"  />
//             </div>
//         </form>
//     )

// }
export default Form;
