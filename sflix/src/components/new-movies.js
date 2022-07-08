import "./new-movies.css"
import { useEffect, useState } from "react"
import NewMoviesThumb from "./new-movies-thumb";

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
        <NewMoviesThumb key={item.id} item={item} />
        )
      })

    return (
        <div className="wrapper">
        {movie}
        </div>
    )
}