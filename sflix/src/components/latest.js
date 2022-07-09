import "./trending.css"
import { useEffect, useState } from "react"
import Thumbnail from "./thumbnail"

export default function Latest({mode, urls}) {

    const [popular, setPopular] = useState([]);

    const url = urls
    useEffect(() => {
        fetchPopular()
      },[]);
    const fetchPopular = async () => {
        const data = await fetch(url)
        const movies = await data.json()
        setPopular(movies.results.slice(0, 12))
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