import "./trending.css"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Thumbnail from "./thumbnail"

export default function Trending() {

    const [popular, setPopular] = useState([]);
    const [second, setSecond] = useState([])

    

    const url =
        "https://api.themoviedb.org/3/trending/movie/day?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=1";

    useEffect(() => {
        fetchPopular()
        testapi()
      },[popular]);

    const testapi = async() => {
    const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=2");
    const data = await response.json();
    setSecond(data.results.slice(0, 4));
    }

    const fetchPopular = async () => {
        const data = await fetch(url)
        const movies = await data.json()
        setPopular([...second, ...movies.results] )
    }
    
    const movie = popular.map(item => {
      return (
      <Thumbnail key={item.id} item={item} />
      )
    })


    return(
        <div>
            <div className='trending'>
                <div>
                    <h1 className="section-title">Trending</h1>
                </div>
                <div className="space-break">
                    <div className="movies">
                        <div className="play-icon">
                        <FontAwesomeIcon icon={faPlayCircle} />
                        </div>
                        <p>Movies</p>
                    </div>
                    <div className="shows">
                        <div className="list-icon">
                        <FontAwesomeIcon icon={faList} />
                        </div>
                        <p>Shows</p>
                    </div>
                </div>
            </div>
            <div className="thumbs">
                {movie} 
            </div>
        </div>
    )
}