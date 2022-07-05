import "./new-movies.css"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons'

export default function NewMovies() {

    const [popular, setPopular] = useState([]);

      const url =
          "https://api.themoviedb.org/3/movie/popular?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=1";
      useEffect(() => {
          fetchPopular()
        },[]);
      const fetchPopular = async () => {
          const data = await fetch(url)
          const movies = await data.json()
          setPopular(movies.results.slice(0, 3))
      }
      
      const movie = popular.map(item => {
        return (
        <div className="new-movies">
            <div className="new-movies-card">
                <img src={"https://image.tmdb.org/t/p/w200" + item.poster_path} alt=""  className="new-movies-card"/>
            </div>
            <div className="new-movies-detail">
                <div className="new-movies-top">
                    <div className="new-movies-star-rating">
                        <div className="new-movies-star"><FontAwesomeIcon icon={faStar} color="#00acc1ff"/></div>
                        <div className="new-movies-rating">{item.vote_average}</div>
                    </div>
                    <div className="new-movies-quality">HD</div>
                </div>
                <div className="new-movies-title">{item.original_title}</div>
                <p className="new-movies-description">{item.overview}</p>
                <div className="watch-now">
                    <><FontAwesomeIcon icon={faPlay} fontSize="14px" /></>
                    <>Watch now</>
                </div>
            </div>
        </div>
        )
      })

    return (
        <>
        {movie}
        </>
    )
}