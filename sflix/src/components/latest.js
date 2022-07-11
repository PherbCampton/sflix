import "./trending.css"
import { useEffect, useState } from "react"
import Thumbnail from "./thumbnail"

export default function Latest({mode, urls}) {

    const [popular, setPopular] = useState([]);
    const [second, setSecond] = useState([])



    const url = urls
    useEffect(() => {
        fetchPopular()
        testapi()
      },[popular]);

    const testapi = async() => {
        const response = await fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=61eb6a9222af515ea9dc3bb91650d558&language=en-US&page=2");
        const data = await response.json();
        setSecond(data.results.slice(0, 4));
    }

    const fetchPopular = async () => {
        const data = await fetch(url)
        const movies = await data.json()
        setPopular([...second, ...movies.results])
        
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
                    <h1 className="section-title">{mode}</h1>
                </div>
            </div>
            <div className="thumbs">
                {movie} 
            </div>
        </div>
    )
}